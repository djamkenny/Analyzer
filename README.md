# YouTube Video Analyzer

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Frontend](#frontend-installation)
  - [Backend](#backend-installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Description
YouTube Video Analyzer is a web application that allows users to analyze YouTube videos by providing a video URL. The application fetches data from a server and returns an analysis formatted in HTML. This analysis is displayed to the user, making it easy to read and understand.

## Features
- Input a YouTube video URL and select a region.
- Fetches and displays video analysis.
- Renders analysis content as safe HTML.
- Error handling for invalid URLs or server errors.

## Technologies Used
**Frontend:**
- React: A JavaScript library for building user interfaces.
- HTML/CSS: For styling the application.
- Fetch API: To make requests to the backend.

**Backend:**
- Node.js: A JavaScript runtime environment for server-side development.
- Express: A web application framework for Node.js, used for serving the analysis.

## Installation

### Frontend Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/youtube-video-analyzer.git
   cd youtube-video-analyzer
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```
   This will start the React development server on `http://localhost:3000`.

### Backend Installation
1. **Navigate to the backend directory**:
   ```bash
   cd youtube-video-analyzer/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the backend server**:
   ```bash
   npm start
   ```
   The backend server will start running at `http://localhost:5000`.

## Usage
1. Navigate to `http://localhost:3000` in your web browser.
2. Enter the YouTube video URL in the input field.
3. Select the desired region from the dropdown.
4. Click the "Analyze" button to submit the request.
5. The analysis result will be displayed below the input form.

## API Documentation
The YouTube Video Analyzer backend provides an API endpoint for fetching video analysis data. Here's the documentation:

**Endpoint:** `http://localhost:5000/analyze`
**Method:** `POST`
**Request Body:**
```json
{
  "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "region": "US"
}
```
**Response:**
```json
{
  "title": "Video Title",
  "description": "Video description.",
  "views": 1000,
  "likes": 100,
  "dislikes": 10,
  "commentCount": 50,
  "duration": "3:45"
}
```

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [React](https://reactjs.org/) - For creating a powerful user interface.
- [Node.js](https://nodejs.org/) - For building the server-side application.
- [Express](https://expressjs.com/) - For handling HTTP requests.
- [DOMPurify](https://github.com/cure53/DOMPurify) - For sanitizing HTML output.


## Demo

