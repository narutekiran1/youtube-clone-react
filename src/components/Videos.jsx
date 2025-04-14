import React from "react";
import { Stack, Box } from "@mui/material";

import { Channelcard, Loader, Videocard } from "./";

const Videos = ({ videos, direction }) => {
  console.log("📺 Videos received by Videos.jsx:", videos); // Debugging

  if (!videos || videos.length === 0) return <Loader />; // ✅ Show loader if no videos

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id?.videoId && <Videocard video={item} />}
          {item.id?.channelId && <Channelcard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
