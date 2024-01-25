const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + "/success.html";
});

// const e = document.getElementsByTagName('footer')[0];

// e.innerHTML = 'Last updated Jan 23 2024'

// alert("Last Updated Jan 21 2024")
