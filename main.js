let driveTruck = document.getElementById("drive-truck");
let truckText = document.getElementById("truck-text");
driveTruck.addEventListener("click", driveIntoFrame);
truckText.addEventListener("click", driveIntoFrame);


function driveIntoFrame() {
  driveTruck.style.transition = "transform 2s ease-in-out"
  driveTruck.style.transform = "translate(-850px)";
  truckText.style.display = "inline";
  truckText.style.transition = "display 5s ease-in 2s";
}
