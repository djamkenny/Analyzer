import React, { useState } from 'react';
import './App.css';
import Result from './Result';  // Import the Result component

function YoutubeApp() {
  const [url, setUrl] = useState('');
  const [region, setRegion] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle the form submission
  const handleSubmit = async (e) => {  
    e.preventDefault();  
    setError(null);  
    setResult(null);  

    try {  
        const response = await fetch('http://localhost:5000/analyze', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify({ url, region }),  
        });  

        if (response.ok) {  
            const data = await response.text(); // Get response as HTML  
            setResult(data);  // Set HTML text as result  
        } else {  
            const errorData = await response.json(); // Get error message  
            setError(errorData.message);  
        }  
    } catch (err) {  
        setError('Something went wrong. Please try again later.');  
    }  
};

  return (
    <div className="App">
      <h1>YouTube Video Analyzer</h1>

      <form onSubmit={handleSubmit}>
        <div>
         <p>Youtube URL</p>
          <input 
            placeholder='url...'
            className='inputs'
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <div>
          <p> Region Code </p>
          <input 
            placeholder='example US...'
            className='inputs'
            type="text"
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          />
        </div>

        <button type="submit">Analyze</button>
      </form>

      {result && <Result html={result} />}
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
}

export default YoutubeApp;
