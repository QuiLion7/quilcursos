"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  // const [duration, setDuration] = useState(0);

  return (
    <div className="flex h-[360px] w-full flex-col items-center">
      <ReactPlayer
        width="100%"
        height="100%"
        url={videoUrl}
        controls={true}
        // onDuration={(duration: number) => setDuration(duration)}
      />
    </div>
  );
};

export default VideoPlayer;
