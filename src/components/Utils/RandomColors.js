const colors = [
  "#f94144ff",
  "#f3722cff",
  "#f8961eff",
  "#f9844aff",
  "#f9c74fff",
  "#90be6dff",
  "#43aa8bff",
  "#4d908eff",
  "#577590ff",
  "#277da1ff",
];

function randomColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

export default randomColor;
