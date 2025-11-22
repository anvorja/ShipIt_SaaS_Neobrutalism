// src/components/layout/Header.tsx
import { Rocket, Menu, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
    currentSpend?: string;
    onToggleSidebar?: () => void;
}

export const Header = ({ currentSpend = '$4.32', onToggleSidebar }: HeaderProps) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/app/dashboard', label: 'Pipelines' },
        { path: '/app/projects', label: 'Projects' },
        { path: '/app/settings', label: 'Settings' },
        { path: '/docs', label: 'Docs' }
    ];

    return (
        <header className="sticky top-0 z-50 h-[70px] bg-black text-white border-b-4 border-white font-mono">
            <div className="h-full px-4 md:px-6 flex items-center justify-between">
                {/* Left: Logo + Nav */}
                <div className="flex items-center gap-6">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onToggleSidebar}
                        className="md:hidden hover:text-brutal-yellow transition-colors"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 hover:text-brutal-yellow transition-colors">
                        <Rocket className="fill-white" size={24} />
                        <span className="text-xl font-black hidden sm:inline">ShipIt</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-bold text-sm hover:text-brutal-yellow transition-colors relative ${
                                    location.pathname.startsWith(link.path)
                                        ? 'text-brutal-yellow after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-1 after:bg-brutal-yellow'
                                        : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right: Spending + User */}
                <div className="flex items-center gap-4">
                    {/* Current Spend */}
                    <div className="hidden sm:flex items-center gap-2 text-xs">
                        <DollarSign size={16} className="text-brutal-yellow" />
                        <span className="font-bold text-brutal-yellow">{currentSpend}</span>
                        <span className="text-gray-400">this month</span>
                    </div>

                    {/* User Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="w-10 h-10 bg-white text-black font-bold flex items-center justify-center border-2 border-white hover:bg-brutal-yellow transition-colors"
                        >
                            A
                        </button>

                        {showUserMenu && (
                            <>
                                {/* Overlay */}
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setShowUserMenu(false)}
                                />

                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black border-4 border-black shadow-lg z-50">
                                    <div className="p-3 border-b-2 border-black">
                                        <p className="font-bold text-sm">Andres Borja</p>
                                        <p className="text-xs text-gray-600">andres@proton.dev</p>
                                    </div>
                                    <div className="py-2">
                                        <Link
                                            to="/app/settings"
                                            className="block px-4 py-2 text-sm font-bold hover:bg-gray-100 transition-colors"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            to="/app/billing"
                                            className="block px-4 py-2 text-sm font-bold hover:bg-gray-100 transition-colors"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            Billing
                                        </Link>
                                        <button
                                            className="w-full text-left px-4 py-2 text-sm font-bold hover:bg-gray-100 transition-colors text-red-600"
                                            onClick={() => {
                                                setShowUserMenu(false);
                                                // Handle logout
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};