
document.addEventListener("DOMContentLoaded", function () {
  loadProfile();
});


function showForm() {
  document.getElementById("profile-section").style.display = "none";
  document.getElementById("form-section").style.display = "block";
}


function loadProfile() {
  let profileName = localStorage.getItem("profileName") || "Nama Anda";
  let profileRole = localStorage.getItem("profileRole") || "Front End Designer";
  let profileAvailability = localStorage.getItem("profileAvailability") || "Full Time";
  let profileAge = localStorage.getItem("profileAge") || "19";
  let profileLocation = localStorage.getItem("profileLocation") || "Jakarta";
  let profileExperience = localStorage.getItem("profileExperience") || "2 tahun";
  let profileEmail = localStorage.getItem("profileEmail") || "email@gmail.com";

  
  document.getElementById("profile-name").textContent = profileName;
  document.getElementById("profile-role").textContent = profileRole;
  document.getElementById("profile-availability").textContent = profileAvailability;
  document.getElementById("profile-age").textContent = profileAge;
  document.getElementById("profile-location").textContent = profileLocation;
  document.getElementById("profile-experience").textContent = profileExperience;
  document.getElementById("profile-email").textContent = profileEmail;


  document.getElementById("name").value = profileName;
  document.getElementById("role").value = profileRole;
  document.getElementById("availability").value = profileAvailability;
  document.getElementById("age").value = profileAge;
  document.getElementById("location").value = profileLocation;
  document.getElementById("experience").value = profileExperience;
  document.getElementById("email").value = profileEmail;
}


function saveProfile(event) {
  event.preventDefault();

  let profileName = document.getElementById("name").value;
  let profileRole = document.getElementById("role").value;
  let profileAvailability = document.getElementById("availability").value;
  let profileAge = document.getElementById("age").value;
  let profileLocation = document.getElementById("location").value;
  let profileExperience = document.getElementById("experience").value;
  let profileEmail = document.getElementById("email").value;

  
  localStorage.setItem("profileName", profileName);
  localStorage.setItem("profileRole", profileRole);
  localStorage.setItem("profileAvailability", profileAvailability);
  localStorage.setItem("profileAge", profileAge);
  localStorage.setItem("profileLocation", profileLocation);
  localStorage.setItem("profileExperience", profileExperience);
  localStorage.setItem("profileEmail", profileEmail);

  
  loadProfile();

  document.getElementById("form-section").style.display = "none";
  document.getElementById("profile-section").style.display = "flex"; 
}
