import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ui/theme-Toggle';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    //   const { user, isAuthenticated } = useAuth();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");



    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/#features', label: 'Features' },
        { href: '/#work', label: 'Work' },
        { href: '#blog', label: 'Blog' },
        // { href: '/dashboard', label: 'Dashboard' }
        // ...(isAuthenticated ? [{ href: '/dashboard', label: 'Dashboard' }] : []),
    ];

    return (
        <nav className="fixed top-0 mb-8 w-full bg-background/80 backdrop-blur-lg  z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={theme === "light" ? "/Logo.png" : "/LogoDark.png"} alt="Konect Logo" className="h-10" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) =>
                            item.href.startsWith('/#') ? (
                                <a key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground transition">
                                    {item.label}
                                </a>
                            ) : (
                                <Link key={item.href} to={item.href} className="text-muted-foreground hover:text-foreground transition">
                                    {item.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">

                         {/* contact support */}

                        <Link to="/support" className="text-muted-foreground hover:text-foreground transition border-b border-transparent hover:border-b border-muted-foreground">
                            Contact Support
                        </Link>
                        <ThemeToggle />

                       

                        {/* {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Hello, {user?.name || 'User'}
                </span>
                <Link to="/dashboard">
                  <Button className="hero-button">Dashboard</Button>
                </Link>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" className="text-foreground">Sign In</Button>
              </Link>
            )} */}
                        <Link to="/dashboard">
                            <Button className="hero-button">Dashboard</Button>
                        </Link>


                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
                            {navItems.map((item) =>
                                item.href.startsWith('/#') ? (
                                    <a key={item.href} href={item.href} className="block px-3 py-2 text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link key={item.href} to={item.href} className="block px-3 py-2 text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
                                        {item.label}
                                    </Link>
                                )
                            )}
                            <div className="pt-4 space-y-2">
                                {/* {isAuthenticated ? (
                                    <>
                                        <span className="block text-sm text-muted-foreground px-3">Logged in as {user?.name}</span>
                                        <Link to="/dashboard">
                                            <Button className="w-full hero-button">Dashboard</Button>
                                        </Link>
                                    </>
                                ) : (
                                    <Link to="/auth">
                                        <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                                    </Link>
                                )} */}
                                {/* temporaire */}

                                <>
                                    <span className="block text-sm text-muted-foreground px-3">Logged </span>
                                    <Link to="/dashboard">
                                        <Button className="w-full hero-button">Dashboard</Button>
                                    </Link>
                                </>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
