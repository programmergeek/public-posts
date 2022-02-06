import React from "react";
import "./App.css";
import { FullNavBarMobile, PostCard } from "./Components";
function App() {
  return (
    <div className="App">
      <PostCard
        author="Will Joseph"
        postSnippet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis obcaecati ut esse odit. Deserunt beatae libero laudantium incidunt iure facilis provident, voluptatem tempore perspiciatis debitis..."
        publishDate="22 January 2022"
        title="Open Sesame"
      />
      <FullNavBarMobile />
    </div>
  );
}

export default App;
