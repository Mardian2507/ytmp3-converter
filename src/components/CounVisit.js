import { useState, useEffect } from "react";
import EyeIcon from "./svgs/EyeIcon";

export default function CountVisit({ apiUrl }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCount(data.value);
    }
    fetchCount();
  }, [apiUrl]);

  return (
    <div className="flex items-center">
      <EyeIcon />
      <span className="text-md px-2 opacity-70 font-sans">{count}</span>
    </div>
  );
}
