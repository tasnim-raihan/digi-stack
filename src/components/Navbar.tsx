import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Rocket, LogOut, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';
import { auth } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

export const Navbar = ({ onCartClick }: { onCartClick: () => void }) => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1f36] text-white border-b border-white/10 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="font-bold text-xl text-white">T</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-white">Titan <span className="text-cyan-400">DigiStack</span></h1>
          </div>
        </div>

        {/* Search */}
        <div className="flex-grow max-w-md relative group hidden md:block mx-10">
          <input
            type="text"
            placeholder="Search digital products..."
            className="w-full bg-[#14182a] border border-white/10 rounded-full py-2 px-5 text-sm focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 italic text-xs pointer-events-none">
            e.g. Elementor
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden">
            <Search size={22} />
          </button>
          
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <img src={user.photoURL || ''} alt="" className="w-7 h-7 rounded-full border border-cyan-500/50" referrerPolicy="no-referrer" />
                <span className="text-sm font-medium hidden lg:block">{user.displayName?.split(' ')[0]}</span>
                <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </div>
              <button 
                onClick={handleLogout}
                className="p-2 hover:bg-red-500/10 text-red-400 rounded-full transition-colors hidden sm:block"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="flex items-center gap-1 px-4 py-1.5 bg-cyan-500 hover:bg-cyan-600 rounded-full transition-all text-sm font-bold shadow-lg shadow-cyan-500/20"
            >
              <User size={18} />
              <span>Login</span>
            </button>
          )}

          <button 
            className="relative p-2 hover:bg-white/10 rounded-full transition-colors group"
          >
            <Heart size={22} className="group-hover:scale-110 transition-transform" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {wishlistCount}
              </span>
            )}
          </button>

          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-white/10 rounded-full transition-colors group"
          >
            <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f1422] border-t border-blue-900/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-[#1a1f36] border border-blue-900/50 rounded-lg py-2 pl-10 text-sm focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {user ? (
                  <button onClick={handleLogout} className="flex items-center gap-2 p-3 bg-red-500/10 text-red-500 rounded-lg">
                    <LogOut size={20} />
                    <span className="text-sm font-bold">Logout</span>
                  </button>
                ) : (
                  <button onClick={handleLogin} className="flex items-center gap-2 p-3 bg-cyan-500 rounded-lg text-white">
                    <User size={20} />
                    <span className="text-sm font-bold">Login</span>
                  </button>
                )}
                <button 
                  onClick={() => { setIsMenuOpen(false); onCartClick(); }}
                  className="flex items-center gap-2 p-3 bg-[#1a1f36] rounded-lg"
                >
                  <ShoppingCart size={20} className="text-cyan-400" />
                  <span className="text-sm">My Cart ({cartCount})</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

