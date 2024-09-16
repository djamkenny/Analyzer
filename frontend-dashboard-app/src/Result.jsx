import React from 'react';  
import './Result.css';  

function Result({ html }) {  
    return (  
        <div className="result-container" dangerouslySetInnerHTML={{ __html: html }} />  
    );  
}  

export default Result;