import React from "react";

type Props = {
  text: string;
};

const CopyButton: React.FC<Props> = ({ text }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    alert("コピーしました！");
  };

  return (
    <button onClick={handleCopy}>
      コピー
    </button>
  );
};

export default CopyButton;