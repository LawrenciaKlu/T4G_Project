// Show/Hide functionality
const toggleButton = document.getElementById("toggleButton");
const paragraph = document.querySelector(".Pp1");

// Initially hide the paragraph even though you set it to display none in your css on line 804
paragraph.style.display = "none";

// Add click event to button
toggleButton.addEventListener("click", () => {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
    toggleButton.textContent = "SHOW LESS";
  } else {
    paragraph.style.display = "none";
    toggleButton.textContent = "SHOW MORE";
  }
});

// Hover effect for "future" text
let future = document.getElementById("future");

future.addEventListener("mouseover", () => {
  future.style.color = "darkblue";
  future.style.fontSize = "30px";
  future.style.backgroundColor = "lemonchiffon";
  future.innerHTML = "WE'VE GOT YOU COVERED";
});

future.addEventListener("mouseout", () => {
  future.style.color = "black";
  future.style.fontSize = "30px";
  future.style.backgroundColor = "white";
  future.innerHTML = "YOUR HOME YOUR FUTURE";
});
