


import React, { useState } from 'react';   
import '../asserts-css/CardForm.css';   

const CardForm = ({ onSubmit, onClick }) => {  
    const [title, setTitle] = useState('');  
    const [description, setDescription] = useState('');  
    const [imageUrl, setImageUrl] = useState('');  
    const [loading, setLoading] = useState(false); // State to manage loading  

    const handleSubmit = (event) => {  
        event.preventDefault();  
        const cardData = { title, description, imageUrl };  
        onSubmit(cardData); // Pass the card data to the parent component  

        // Start loading animation  
        setLoading(true);  
        
        // Call handleNewCardClick after 1 seconds  
        setTimeout(() => {  
            // handleNewCardClick();  
            setLoading(false); // Stop loading after the function call  
        }, 1000); // 1000 milliseconds = 1 seconds  

        // Reset form fields  
        setTitle('');  
        setDescription('');  
        setImageUrl('');  
    };  

    const handleNewCardClick = () => {  
        if (onClick) {  
            onClick(); // Execute the onClick function  
        }  
        // Optionally reset the form fields if needed  
        setTitle('');  
        setDescription('');  
        setImageUrl('');  
    };  

    // Check if all fields are filled  
    const isFormFilled = title && description && imageUrl;  

    return (  
        <form onSubmit={handleSubmit} className="card-form">  
            <h2>Create a Card</h2>  
            <div className="mb-4">  
                <label htmlFor="title">Title</label>  
                <input  
                    type="text"  
                    id="title"  
                    value={title}  
                    onChange={(e) => setTitle(e.target.value)}  
                    required  
                />  
            </div>  
            <div className="mb-4">  
                <label htmlFor="description">Description</label>  
                <textarea  
                    id="description"  
                    value={description}  
                    onChange={(e) => setDescription(e.target.value)}  
                    required  
                    rows="4"  
                />  
            </div>  
            <div className="mb-4">  
                <label htmlFor="imageUrl">Image URL</label>  
                <input  
                    type="url"  
                    id="imageUrl"  
                    value={imageUrl}  
                    onChange={(e) => setImageUrl(e.target.value)}  
                    required  
                />  
            </div>  
            <button type="submit">Create Card</button>   
            {/* {isFormFilled && (  
                <button type="button" onClick={handleNewCardClick}>New Card</button>  
            )}   */}
            {loading && <div className="loading-indicator">Loading...</div>} {/* Loading indicator */}  
        </form>    
    );  
};  

export default CardForm;