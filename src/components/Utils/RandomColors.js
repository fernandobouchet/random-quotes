const colors = [
  "#001219ff",
  "#005f73ff",
  "#0a9396ff",
  "#94d2bdff",
  "#e9d8a6ff",
  "#ee9b00ff",
  "#ca6702ff",
  "#bb3e03ff",
  "#ae2012ff",
  "#9b2226ff",
];

function randomColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

export default randomColor;
