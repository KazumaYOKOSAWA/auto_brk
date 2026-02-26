import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const TextInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={10}
      style={{ width: "100%", padding: "10px" }}
      placeholder="テキストを入力..."
    />
  );
};

export default TextInput;