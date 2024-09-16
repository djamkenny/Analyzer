from src.extract import extract_and_analyze_trends
import google.generativeai as genai
import json



# Configure the Generative AI model
genai.configure(api_key="AIzaSyC-t3ycEKik5E3jxvyaufqmxcoA_G8_B1I")

# Paths to the video data files
data_path = 'data/youtube_data.json'  # Non-trending video data

trending_data_path = 'trending_data/trending_videos.json'  # Trending video data

# Analyze trends for both user video and trending video
users_video = extract_and_analyze_trends(data_path)
trending_video = extract_and_analyze_trends(trending_data_path)

# # Use Generative Model (Gemini)
model = genai.GenerativeModel("gemini-1.5-flash")

def respond():
    # Construct the prompt
    response = model.generate_content(
          f"""

          Generate a response using only plain HTML semantic tags and utilize <br> tags for line breaks instead of \n. Do not include any HTML templates like <html> or <body> tags. The content should be structured as follows:



          # Trending Video Analysis  
          **Trending Video Analysis for {trending_video}**     
          ## Analysis  
          Analyze why this video is trending:  
          - **Reasons:**  
          1. High view count and engagement.  
          2. Popular topic with broad appeal.  
          3. Strong visual appeal.  

          # User Video Analysis  
          **User Video Analysis for {users_video}**        
          ## Analysis  
          Analyze whether this video is trending or not:  
          Make references from the data by showing thorough details of why the video is not trending.  

          # Step by step guide
          Generate a step-by-step outline of how the user should improve the video, including suggestions and examples.

        """
    )
    
    # Return the generated HTML text
    print(response.text)
    return response.text
