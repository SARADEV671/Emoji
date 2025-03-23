import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreatEntry(emojipedi) {
  return (
    <Entry
      key={emojipedi.id}
      emoji={emojipedi.emoji}
      name={emojipedi.name}
      meaning={emojipedi.meaning}
    />
  );
}
function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreatEntry)}</dl>
    </>
  );
}

export default App;
