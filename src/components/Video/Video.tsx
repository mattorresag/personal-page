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
      poster="/bg-image.png"
    >
      <source src="/bg_video.webm" type="video/webm" />
    </video>
  );
};
