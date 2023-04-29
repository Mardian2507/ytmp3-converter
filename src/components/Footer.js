import React from "react";
import CountVisit from "./CounVisit";

export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 w-3/4">
        <div className="flex justify-center p-2">
          <CountVisit apiUrl="https://api.countapi.xyz/update/localhost/8d6b22d7-bc89-4997-8ea7-855985fd39b1/?amount=1" />
        </div>
      </footer>
    </>
  );
}
