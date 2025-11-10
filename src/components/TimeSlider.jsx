import React from "react";

const timeLabels = [
  "200 Ma", "170 Ma", "150 Ma", "120 Ma", "105 Ma",
  "90 Ma", "65 Ma", "50 Ma", "35 Ma", "20 Ma"
];

export default function TimeSlider({ progress, setProgress }) {
  const index = Math.floor(progress * (timeLabels.length - 1));

  return (
    <div style={{
      position: "absolute",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80%",
      backgroundColor: "rgba(255,255,255,0.9)",
      padding: "10px",
      borderRadius: "8px",
      textAlign: "center"
    }}>
      <input
        type="range"
        min={0}
        max={1}
        step={0.001}
        value={progress}
        onChange={(e) => setProgress(parseFloat(e.target.value))}
        style={{ width: "100%" }}
      />
      <p style={{ marginTop: "8px" }}>{timeLabels[index]} — {Math.round(progress * 100)}%</p>
    </div>
  );
}
