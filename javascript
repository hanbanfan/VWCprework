// JavaScript to enhance the website interactivity

// Function to show a welcome alert when the page loads
window.onload = function() {
  alert("Welcome to my digital stage! Get ready to dive into the world of Hannah Gray.");
};

// Function to change the background color of sections randomly
function changeBackgroundColor() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300", "#DAF7A6"];
  const sections = document.querySelectorAll(".colorful-section");

  sections.forEach(section => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    section.style.backgroundColor = randomColor;
  });
}

// Adding an event listener to a button to trigger the color change
document.addEventListener('DOMContentLoaded', function() {
  const button = document.createElement('button');
  button.textContent = 'Change Background Colors';
  button.style.cssText = 'margin: 20px; padding: 10px; font-size: 16px; cursor: pointer;';
  button.onclick = changeBackgroundColor;

  document.body.insertBefore(button, document.querySelector('#about'));
});

