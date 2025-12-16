// Populate select options in the Get Started form
import {
  jobData,
  educationData,
  maritalStatusData,
  phoneData,
  loanData,
  housingData,
  defaultData,
  dayData,
  monthData,
  previousOutcomeData,
} from "../data/get-started-data.js";

function populateSelectOptions(
  selectId,
  data,
  placeholder = "Select an option"
) {
  const selectElement = document.getElementById(selectId);

  if (!selectElement) return;

  selectElement.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = placeholder;
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectElement.appendChild(defaultOption);

  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.text = item.label;
    selectElement.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateSelectOptions("job", jobData);
  populateSelectOptions("education", educationData);
  populateSelectOptions("marital", maritalStatusData);
  populateSelectOptions("phone", phoneData);
  populateSelectOptions("loan", loanData);
  populateSelectOptions("housing", housingData);
  populateSelectOptions("default", defaultData);
  populateSelectOptions("day", dayData);
  populateSelectOptions("month", monthData);
  populateSelectOptions("previous-outcome", previousOutcomeData);
});
