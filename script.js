fetch("nav.html")
  .then((response) => response.text())
  .then((data) => {
    const navElement = document.querySelector("nav");
    navElement.innerHTML = data;
  });

// Make the background dynamic with gradient via mouse position
//document.addEventListener("DOMContentLoaded", function () {
  //const bodyElement = document.body;

  //bodyElement.addEventListener("mousemove", function (event) {
  //  const mouseX = event.clientX / window.innerWidth;
  //  const mouseY = event.clientY / window.innerHeight;

    // Update background image based on mouse position
  //  const backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.glitch.global/f1379416-af2f-438a-9b9b-69cc9d213cb9/IMG_7171.jpeg?v=1702488191598')`;

    // Apply the new background image
  //  bodyElement.style.background = backgroundImage;
 // });
//});