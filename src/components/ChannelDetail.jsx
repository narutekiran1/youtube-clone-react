import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, Channelcard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // ✅ Fetch channel info
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items?.[0]))
      .catch((err) => console.error("❌ Error fetching channel details", err));

    // ✅ Fetch videos from that channel
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        console.log("📹 Channel Videos:", data?.items);
        setVideos(data?.items || []);
      })
      .catch((err) => console.error("❌ Error fetching channel videos", err));
  }, [id]);

  return (
    <Box minHeight="95vh">
      {/* Header styling */}
      <Box
        sx={{
          height: "300px",
          background: "linear-gradient(to right, #009FFF, #ec2F4B)",
          zIndex: 10,
        }}
      />

      {/* Channel Card */}
      <Channelcard channelDetail={channelDetail} marginTop="-110px" />

      {/* Videos List */}
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
