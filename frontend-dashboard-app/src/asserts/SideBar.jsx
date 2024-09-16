import React, { useState } from "react";
import TodoApp from "./components/TodoApp";
import '../asserts-css/sideBar.css';
import { Folder, FileText, Inbox, MessageCircle } from 'lucide-react'; 
import { Eye, User, Star, Link, Calendar, Settings, Book, Users } from 'lucide-react';



function SideBar() {

    const [showProjects, setShowProjects] = useState(false);  

    const toggleProjects = () => {  
        setShowProjects(prev => !prev);  
    }; 
    
    return (
        <aside className="side-bar">
            <ul>            
                
                <li><p><Eye size={24} className="mr-2" /><br /><a href="">Overview</a></p></li>
                
                <li><a href="#home" onClick={toggleProjects}><Folder className="mr-2" /><br /> Projects</a></li>
                {showProjects && (  
                <div className="projects-list">  
                    <ul className="project-li">  
                        <p>Games</p> 
                        <p>Websites</p> 
                        <p>Webapps</p> 
                        <p>UI/UX designs</p> 
                    </ul>  
                </div>  
            )}  
                <li><a href="#about"><FileText className="mr-2" /><br /> Documentation</a></li>  
                <li><a href="#services"><Inbox className="mr-2" /><br /> Inbox</a></li>  
                <li><a href="#contact"><MessageCircle className="mr-2" /><br /> Chats</a></li>  
            </ul>

            
            <TodoApp/>
            

        </aside>
    )
}
export default SideBar