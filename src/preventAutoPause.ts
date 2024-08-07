export default function preventAutoPause() {
  let videoElement = document.querySelector("video");
  let userHasInteracted = false;

  if (!videoElement) return;
  console.log("userscript-bilibili-guest: ", videoElement);

  const resetUserInteraction = () => {
    setTimeout(() => {
      userHasInteracted = false;
    }, 500);
  };

  const handleVideoPause = () => {
    console.log("userscript-bilibili-guest: pause");
    if (!userHasInteracted) {
      videoElement && videoElement.play();
      console.log("Trying to prevent auto pause ###", new Date());
      userHasInteracted = false;
    }
  };

  videoElement?.addEventListener("pause", handleVideoPause);

  document.addEventListener("click", () => {
    userHasInteracted = true;
    resetUserInteraction();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      userHasInteracted = true;
      resetUserInteraction();
    }
  });

  setInterval(() => {
    if (videoElement !== document.querySelector("video")) {
      videoElement = document.querySelector("video");
      console.log("userscript-bilibili-guest: ", videoElement);
      videoElement?.addEventListener("pause", handleVideoPause);
    }
  }, 10 * 1000);
}
