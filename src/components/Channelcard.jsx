const ChannelCard = ({ channelDetail }) => {
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        border: "1px solid gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "16px",
        backgroundColor: "#222",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={channelDetail?.snippet?.thumbnails?.high?.url}
        alt={channelDetail?.snippet?.title}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginBottom: "8px",
        }}
      />
      <p>{channelDetail?.snippet?.title || "Unknown Channel"}</p>
    </div>
  );
};

export default ChannelCard;
