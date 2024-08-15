"use client";
import React from "react";

export const Video = () => {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/bg_video.webm" type="video/webm" />
    </video>
  );
};
