import blockElements from "./blockElements";
import preventAutoPause from "./preventAutoPause";

async function main() {
  blockElements();
  window.onload = preventAutoPause;
}

main();
