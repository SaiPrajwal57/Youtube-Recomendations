import { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [text, setText] = useState("Sanjith Hegde");
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    const res = await axios.post("https://youtube-recomendations.onrender.com/mood", { text: text });
    setVideo(res.data);
  };
  return (
    <div className="app">
      <h1>Mood Based Video Recomender</h1>
      <div className="search-container">
        <input
          placeholder="How is your Mood Today:"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={getVideo}>Predict</button>
      </div>
      <div className="video">
        {video.map((v) => (
          <iframe
            width="951"
            key={v.id.videoId}
            height="535"
            src={`https://www.youtube.com/embed/${v.id.videoId}`}
            title="video"
          />
        ))}
      </div>
    </div>
  );
}
export default App;
