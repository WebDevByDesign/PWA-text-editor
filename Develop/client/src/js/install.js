const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA

let deferredPrompt;
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    try {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted installation");
      } else {
        console.log("User dismissed installation");
      }
      deferredPrompt = null;
    } catch (error) {
      console.error("Error prompting installation:", error);
    }
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("Installed successfully");
});
