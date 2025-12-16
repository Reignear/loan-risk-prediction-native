// Submit handler for Get Started form
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    age: document.getElementById("age").value,
    marital: document.getElementById("marital").value,
    education: document.getElementById("education").value,
    job: document.getElementById("job").value,
    phone: document.getElementById("phone").value,
    balance: document.getElementById("balance").value,
    housing: document.getElementById("housing").value,
    default: document.getElementById("default").value,
    loan: document.getElementById("loan").value,
    day: document.getElementById("day").value,
    duration: document.getElementById("duration").value,
    month: document.getElementById("month").value,
    campaign: document.getElementById("campaign").value,
    pdays: document.getElementById("pdays").value,
    previous: document.getElementById("previous").value,
    previousOutcome: document.getElementById("previous-outcome").value,
  };

  console.log("Form Data Submitted:", formData);
});
