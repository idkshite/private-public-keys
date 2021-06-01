colors = {
  green: [0,255,0],
  red: [255,0,0],
  blue: [0,0,255],
  bold: () => {
    process.stdout.write("\x1b[1m");
  },
  underline: () => {
    process.stdout.write("\x1b[4m");
  },
  reverse: () => {
    process.stdout.write("\x1b[7m");
  },
  fill: (r, g, b) => {
    process.stdout.write(`\x1b[38;2;${r};${g};${b}m`);
  },
  background: (r, g, b) => {
    process.stdout.write(`\x1b[48;2;${r};${g};${b}m`);
  },
  clear: () => {
    console.log("\033[2J");
  },
  end: () => {
    process.stdout.write("\x1b[0m")
  }
};

function prettyLog(title,message, color){
  colors.bold();
  colors.underline();
  colors.fill(...color);
  console.log(title);
  colors.end();
  console.log(message)
  console.log("\n");
}

module.exports = {prettyLog, ...colors}