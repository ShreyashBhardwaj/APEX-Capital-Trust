// window.addEventListener("load", () => {
//   const loader = document.getElementById("loader");
//   const mainContent = document.getElementById("main-content");
//   const fillRect = document.getElementById("fill-rect");
//   const logoPaths = document.querySelectorAll(".logo-path");

//   // 1️⃣ Stop infinite loop & play final stroke
//   logoPaths.forEach((path) => {
//     path.style.animation = "none"; // Stop loop
//     void path.offsetWidth; // Force reflow
//     path.style.animation = "draw-final 2s ease-in-out forwards"; // Final stroke
//   });

//   // 2️⃣ Play fill animation after stroke
//   setTimeout(() => {
//     fillRect.animate([{ y: "1708" }, { y: "0" }], {
//       duration: 1200,
//       fill: "forwards",
//       easing: "ease-in-out",
//     });
//   }, 2000); // After stroke

//   // 3️⃣ Remove loader, show main, then refresh AOS
//   setTimeout(() => {
//     loader.classList.add("opacity-0", "transition-opacity", "duration-500");
//     setTimeout(() => {
//       loader.remove();
//       document.documentElement.classList.remove("overflow-hidden");
//       mainContent.classList.remove("opacity-0");
//       mainContent.classList.add("opacity-100");

//       // ✅ Finally, refresh AOS for perfect animations
//       if (window.AOS && typeof AOS.refresh === "function") {
//         AOS.refresh();
//         console.log("AOS refreshed after loader finished.");
//       }
//     }, 500); // match fade duration
//   }, 3200); // 2s stroke + 1.2s fill
// });
