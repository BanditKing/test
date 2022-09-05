import React, {useState} from "react";
function App() {
  const [cnt, setCnt] = useState(0);

  function btn() {
    setCnt(cnt+1);
    console.log('hello world');
  }

  return (
    <div>
      <span>Total Clicks : {cnt}</span>
      <button onClick={ btn }> click me</button>
    </div>
  );
}

export default App;
