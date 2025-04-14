import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search"; // Ensure this is correct

export const fetchFromAPI = async (query) => {
  const options = {
    params: {
      part: "snippet",
      type: "video",
      maxResults: 50,
      q: query,
    },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY, 
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.get(BASE_URL, options);
    
    console.log("✅ API Response:", response.data); // Debugging

    return response.data.items || [];
  } catch (error) {
    console.error("❌ API Fetch Error:", error.response ? error.response.data : error);
    return [];
  }
};
