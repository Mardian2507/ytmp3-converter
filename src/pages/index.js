import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { youtube_parser } from "@/utils";
import axios from "axios";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": "d42bff8799msh337e207798a24c3p1f7bebjsnd4fe206c08ba",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeID,
      },
    };

    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-300">
      <Navbar />
      <div className="w-3/4">
        <section>
          <h2 className="text-lg pb-5 font-alkatra">
            Transform YouTube videos into MP3s in just a few clicks!
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row md:justify-between"
          >
            <input
              ref={inputUrlRef}
              placeholder="Paste a Youtube video URL link..."
              className="p-3 rounded-lg md:w-5/6 mb-2 md:mb-0"
              type="text"
            />
            <button
              type="submit"
              className="bg-slate-100 hover:bg-slate-200 py-3 px-10 rounded-lg font-alkatra"
            >
              Search
            </button>
          </form>

          {urlResult ? (
            <Link
              target="_blank"
              rel="noreferrer"
              href={urlResult}
              className="flex justify-center border-2 border-blue-600 bg-slate-200 hover:bg-slate-100 rounded-lg py-3 mt-5 font-alkatra"
            >
              Download MP3
            </Link>
          ) : (
            ""
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
