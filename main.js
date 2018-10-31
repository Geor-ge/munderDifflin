let truck = document.getElementById("truck");
truck.addEventListener("click",driveIntoFrame);

function driveIntoFrame() {
  truck.style.transition = "transform 2s"
  truck.style.transform = "translate(-600px)";
}
