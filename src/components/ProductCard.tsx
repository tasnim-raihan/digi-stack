import React from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [rating, setRating] = useState<{ avg: number; count: number } | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'reviews'), where('productId', '==', product.id));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        setRating(null);
        return;
      }
      const reviews = snapshot.docs.map(d => d.data());
      const avg = reviews.reduce((acc, r) => acc + (r.rating || 0), 0) / reviews.length;
      setRating({ avg, count: reviews.length });
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'reviews');
    });
    return () => unsubscribe();
  }, [product.id]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1a1f36] border border-white/10 rounded-xl p-3 flex flex-col group cursor-pointer hover:border-cyan-500/50 transition-all"
      onClick={() => onQuickView(product)}
    >
      <div className="relative aspect-[5/6] bg-gradient-to-br from-[#2a304d] to-[#1a1f36] rounded-lg mb-3 flex items-center justify-center overflow-hidden border border-white/5">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button 
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            className="p-2 bg-white text-gray-900 rounded-lg hover:bg-cyan-500 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye size={18} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            className="p-2 bg-white text-gray-900 rounded-lg hover:bg-cyan-500 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0 delay-75"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
        {rating && (
          <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/60 backdrop-blur-md rounded flex items-center gap-1 text-yellow-500 border border-white/10">
            <Star size={10} fill="currentColor" />
            <span className="text-[10px] font-bold text-white">{rating.avg.toFixed(1)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-xs font-bold truncate mb-1 text-white group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-1 text-yellow-500/40">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={8} fill={rating && i < Math.round(rating.avg) ? 'currentColor' : 'none'} className={rating && i < Math.round(rating.avg) ? 'text-yellow-500' : ''} />
          ))}
          {rating && <span className="text-[8px] text-white/20 ml-1">({rating.count})</span>}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div className="text-cyan-400 font-bold text-sm">
            {product.isCallForPrice ? (
              <span className="uppercase text-[10px] tracking-wider">Call Price</span>
            ) : (
              <span>৳ {product.price.toLocaleString()}</span>
            )}
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            className="p-1.5 bg-white/5 rounded-md hover:bg-cyan-500/20 text-white/50 hover:text-cyan-400 transition-all"
          >
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

