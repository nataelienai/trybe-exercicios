const container = document.getElementById("container");
const headerContainer = document.getElementById("header-container");
const emergencyTasks = document.getElementsByClassName("emergency-tasks");
const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
const footerContainer = document.getElementById("footer-container");
const emergencyTitles = document.querySelectorAll(".emergency-tasks h3");
const noEmergencyTitles = document.querySelectorAll(".no-emergency-tasks h3");

container.style.backgroundColor = "#EEEEEE";
headerContainer.style.backgroundColor = "#75bf58";
emergencyTasks[0].style.backgroundColor = "pink";
noEmergencyTasks[0].style.backgroundColor = "#faea66";
footerContainer.style.backgroundColor = "#224031"
emergencyTitles[0].style.backgroundColor = "purple";
emergencyTitles[1].style.backgroundColor = "purple";
noEmergencyTitles[0].style.backgroundColor = "black";
noEmergencyTitles[1].style.backgroundColor = "black";