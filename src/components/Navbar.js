import React from "react";
import YoutubeIcon from "./svgs/YoutubeIcon";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center py-5 gap-5 fixed top-0 w-3/4">
        <YoutubeIcon />
        <h1 className="font-alkatra">Youtube to mp3 downloader</h1>
      </nav>
    </>
  );
}
