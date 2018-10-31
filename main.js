let driveTruck = document.getElementById("drive-truck");
driveTruck.addEventListener("click", driveIntoFrame);


function driveIntoFrame() {
  driveTruck.style.transition = "transform 1.5s ease-in";
  driveTruck.style.transform = "rotate(20deg) translate(-850px)";
}
