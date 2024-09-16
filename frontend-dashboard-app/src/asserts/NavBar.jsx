

import { useState } from "react";
import { Eye, User, Star, Link, Calendar, Settings, Book, Users, LogOut } from 'lucide-react';
import '../asserts-css/nav-css.css';

function NavBar() {
    const [count, setCount] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const increment = () => {
        setCount(c => c + 1);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMouseLeave = () => { 
        setTimeout (() =>
            {
                setIsDropdownOpen(false);
            },
            300
        )   
    }; 


    return (
        <nav className="nav">
            <span className="logo">Logo</span>

            <div className="wrapper">
                <span className='counter' aria-live="polite" aria-atomic="true">{count}</span>
                <Eye color="#6200ea" size={24} className="text-blue-600" onClick={increment} aria-label="Increment counter" />

                
                    <button className="img-container" onClick={toggleDropdown}>

                    </button>

                    {isDropdownOpen && (
                        <div className="dropdown-menu" onMouseLeave={handleMouseLeave} >
                            <div className="dropdown-header">
                                <span>Enoch Beamahn (Kenny BED)</span>
                            </div>

                            <div className="dropdown-section">
                                <h4>ACCOUNT SETTINGS</h4>
                                <div className="dropdown-item">
                                    <User size={16} /> Profile
                                </div>
                                <div className="dropdown-item">
                                    <Star size={16} /> Branding
                                </div>
                                <div className="dropdown-item">
                                    <Link size={16} /> My Link
                                </div>
                                <div className="dropdown-item">
                                    <Calendar size={16} /> Calendar Sync
                                </div>
                                <div className="dropdown-item">
                                    <Settings size={16} /> All Settings
                                </div>
                            </div>

                            <div className="dropdown-section">
                                <h4>RESOURCES</h4>
                                <div className="dropdown-item">
                                    <Book size={16} /> Getting Started Guide
                                </div>
                                <div className="dropdown-item">
                                    <Users size={16} /> Community
                                </div>
                                <div className="dropdown-item">
                                    <LogOut color="red" size={19} />  Logout
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </nav>
    );
}

export default NavBar;
