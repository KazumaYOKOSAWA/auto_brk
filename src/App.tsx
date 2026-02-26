import React, { useState } from "react";
import TextInput from "./components/TextInput.tsx"
import TextOutput from "./components/TextOutput.tsx";
import CopyButton from "./components/CopyButton.tsx";
import { formatText } from "./utils/formatText.ts";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleFormat = () => {
    setOutput(formatText(input));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>文頭キーワード改行アプリ</h2>

      <TextInput value={input} onChange={setInput} />

      <button onClick={handleFormat} style={{ margin: "10px 0" }}>
        改行する
      </button>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CopyButton text={output} />
        <span>文字数: {output.length}</span>
      </div>

      <TextOutput value={output} />
    </div>
  );
}

export default App;