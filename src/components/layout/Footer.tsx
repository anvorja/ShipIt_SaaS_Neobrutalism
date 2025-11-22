// src/components/layout/Footer.tsx
import { Rocket, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t-4 border-white font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 hover:text-brutal-yellow transition-colors w-fit">
                            <Rocket className="fill-white" size={32} />
                            <span className="text-2xl font-black">ShipIt</span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            CI/CD without the complexity.
                            <br />
                            Ship code in 2 minutes, not 2 hours.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 border-b-2 border-brutal-yellow pb-2 inline-block">
                            Product
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/pricing" className="text-sm hover:text-brutal-yellow transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/docs" className="text-sm hover:text-brutal-yellow transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link to="/app/dashboard" className="text-sm hover:text-brutal-yellow transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <a href="#features" className="text-sm hover:text-brutal-yellow transition-colors">
                                    Features
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 border-b-2 border-brutal-cyan pb-2 inline-block">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-sm hover:text-brutal-cyan transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="text-sm hover:text-brutal-cyan transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="text-sm hover:text-brutal-cyan transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-sm hover:text-brutal-cyan transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 border-b-2 border-brutal-green pb-2 inline-block">
                            Connect
                        </h3>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/anvorja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 border-4 border-white bg-white text-black flex items-center justify-center hover:bg-brutal-yellow hover:border-brutal-yellow transition-all brutal-hover"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/carlos-andr%C3%A9s-borja-7bb853236/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 border-4 border-white bg-white text-black flex items-center justify-center hover:bg-brutal-cyan hover:border-brutal-cyan transition-all brutal-hover"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 border-4 border-white bg-white text-black flex items-center justify-center hover:bg-brutal-blue hover:border-brutal-blue transition-all brutal-hover"
                                aria-label="Twitter"
                            >
                                <Twitter size={24} />
                            </a>
                            <a
                                href="mailto:anvorja@shipit.dev"
                                className="w-12 h-12 border-4 border-white bg-white text-black flex items-center justify-center hover:bg-brutal-red hover:border-brutal-red transition-all brutal-hover"
                                aria-label="Email"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t-2 border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            © {currentYear} ShipIt. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#privacy" className="hover:text-brutal-yellow transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="hover:text-brutal-yellow transition-colors">
                                Terms of Service
                            </a>
                            <a href="#cookies" className="hover:text-brutal-yellow transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};