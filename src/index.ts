import blockElements from "./blockElements";
import preventAutoPause from "./preventAutoPause";

async function main() {
  blockElements();
  window.onload = () => {
    setTimeout(() => {
      preventAutoPause();
    }, 10 * 1000);
  };
}

main();
