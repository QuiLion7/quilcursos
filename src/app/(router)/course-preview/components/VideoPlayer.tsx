"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="flex aspect-video w-full flex-col items-center bg-background">
      <ReactPlayer width="100%" height="100%" url={videoUrl} controls={false} />
    </div>
  );
};

export default VideoPlayer;
