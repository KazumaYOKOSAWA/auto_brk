import React from "react";

type Props = {
  value: string;
};

const TextOutput: React.FC<Props> = ({ value }) => {
  return (
    <div
      style={{
        whiteSpace: "pre-wrap",
        border: "1px solid #ccc",
        padding: "10px",
        minHeight: "150px",
      }}
    >
      {value}
    </div>
  );
};

export default TextOutput;