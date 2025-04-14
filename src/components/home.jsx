import React, { useState, useEffect } from "react";
import ChannelCard from "./Channelcard";
import Videos from "./Videos"; // Import Videos component
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFromAPI("programming") // Fetch videos
      .then((result) => {
        console.log("Setting videos state:", result); // Debug log
        setVideos(result);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!videos.length) return <div>Loading...</div>;

  return (
    <div>
      <ChannelCard />
      <Videos videos={videos} /> {/* Pass videos to Videos component */}
    </div>
  );
};

export default Home;
