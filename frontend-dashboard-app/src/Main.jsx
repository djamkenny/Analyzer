
// import Cards from './asserts/Cards';  
import Popup from './asserts/components/Popup';  
import CardForm from './asserts/CardForm';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faArrowUp, faArrowDown, faComment, faBookmark, faLink, faEllipsisH } from '@fortawesome/free-solid-svg-icons';  
import React, { useState, useEffect } from 'react'; 
import {  User, Star } from 'lucide-react';
import YoutubeApp from './YoutubeApp'
import './YoutubeApp.css';

function Main() {  
    const [tasks, setTasks] = useState([]); // This will hold created cards  
    const [buttonPopup, setButtonPopup] = useState(false); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); //toggles
    
    // Load cards
    // useEffect(() => {  
    //     try {  
    //         const savedCards = localStorage.getItem('tasks');  
    //         if (savedCards) {  
    //             setTasks(JSON.parse(savedCards));  
    //         }  
    //     } catch (error) {  
    //         console.error("Error loading cards from local storage:", error);  
    //     } 
    // }, []); 

    // Creating a card  
    const handleCardSubmit = (cardData) => { 
        const updatedCards =  [...tasks, cardData] 
        setTasks(updatedCards);  // Add the new card data to the tasks array  
        console.log('Card Created:', cardData);  
        localStorage.setItem('tasks', JSON.stringify(updatedCards));  
    };  

    // toggle card
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // const handleMouseEnter = () => {  
    //     setIsDropdownOpen(true);  
    // }; 

    const handleMouseLeave = () => { 
        setTimeout (() =>
            {
                setIsDropdownOpen(false);
            },
            200
        )   
    }; 



    return (
        <div className='hero'>  
            <div className='addCard-div'>
                            <button className='addCard' onClick={() => setButtonPopup(true)}> <span>+</span> <p>New Card</p></button>
            </div>
            <div className='main-div'>  
                    <div className="media-icon-container">  
                        <div className="media-icon">  
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Logo.svg" alt="Gmail" />  
                        </div>  
                        <div className="media-icon ">  
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />  
                        </div>  
                        <div className="media-icon ">  
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Reddit_logo.svg" alt="Reddit"  />  
                        </div>  
                        <div className="media-icon ">  
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/OpenAI_Logo.svg" alt="OpenAI"/>  
                        </div>  
                        <div className="media-icon ">  
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Stack_Overflow_icon.svg" alt="Stack Overflow" />  
                        </div>  
                        <div className="media-icon media-icon-add">  
                            <span>+</span>  
                        </div>  
                    </div>  

                <div className='app-space'>  

                    {/* <div className='title-space'>                    
                        <div className="media-platforms">
                        </div>  
                    </div>    */}
                    <div className='card-div'>  
                        {tasks.map((task, index) => (  
                            <div key={index} className="task-card"> {/* Ensure a unique key here */}  
                                {/* Render your task card details based on the task object */} 
                                <div className='visit-div'>
                                    <span>O</span>
                                    <div className='visit'>
                                        <a href="https://google.com">View</a>
                                        <FontAwesomeIcon  icon={faEllipsisH} className="icon" onClick={toggleDropdown}/>
                                        {isDropdownOpen && (
                                            <div className="drop-menu" onMouseLeave={handleMouseLeave} >

                                                <div className="drop-section">
                                                    <div className="drop-item">
                                                        <User size={16} /> Profile
                                                    </div>
                                                    <div className="drop-item">
                                                        <Star size={16} /> Branding
                                                    </div>
                                                   
                                                </div>

                                               
                                            </div>
                                        )}
                                    </div>
                                </div>
                               
                                <div className="title-div"> 

                                    
                                    <h3>{task.title}</h3>
                                    
                                   
                                </div>
                                <p>{task.description}</p>  
                                <img src={require('./asserts/image.png')} alt={task.title} /> 

                                <div className="card-reaction-content">
                                    <span className='icon-span'>
                                    <FontAwesomeIcon icon={faArrowUp} className="icon" />  
                                    <FontAwesomeIcon icon={faArrowDown} className="icon" /> 
                                    </span> 
                                    <FontAwesomeIcon icon={faComment} className="icon" />  
                                    <FontAwesomeIcon icon={faBookmark} className="icon" />  
                                    <FontAwesomeIcon icon={faLink} className="icon" />
                                </div>   
                            </div>  
                        ))}  
                    </div>  
                    
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>  
                        <div className="flex justify-center items-center h-screen bg-gray-100">  
                            <CardForm onSubmit={handleCardSubmit} onClick={() => {}}/> {/* Add logic to onClick if needed */}   
                            <button className='addCard close-button' onClick={() => setButtonPopup(false)}>Close</button>  
                        </div>  
                    </Popup>   
                </div>  
            </div>


           <YoutubeApp></YoutubeApp>

        </div>
    );  
}  

export default Main;