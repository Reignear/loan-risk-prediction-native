export const jobData = [
  { value: "Admin", label: "Admin" },
  { value: "Technician", label: "Technician" },
  { value: "Services", label: "Services" },
  { value: "Management", label: "Management" },
  { value: "Retired", label: "Retired" },
  { value: "Blue-collar", label: "Blue-collar" },
  { value: "Unemployed", label: "Unemployed" },
  { value: "Entrepreneur", label: "Entrepreneur" },
  { value: "Housemaid", label: "Housemaid" },
  { value: "Unknown", label: "Unknown" },
  { value: "Self-employed", label: "Self-employed" },
  { value: "Student", label: "Student" },
];

export const educationData = [
  { value: "Primary", label: "Primary" },
  { value: "Secondary", label: "Secondary" },
  { value: "Tertiary", label: "Tertiary" },
  { value: "Unknown", label: "Unknown" },
];

export const maritalStatusData = [
  { value: "Single", label: "Single" },
  { value: "Married", label: "Married" },
  { value: "Divorced", label: "Divorced" },
];

export const phoneData = [
  { value: "Unknown", label: "Unknown" },
  { value: "Cellular", label: "Cellular" },
  { value: "Telephone", label: "Telephone" },
];

export const loanData = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

export const housingData = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

export const defaultData = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

export const dayData = Array.from({ length: 31 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

export const monthData = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

export const previousOutcomeData = [
  { value: "Success", label: "Success" },
  { value: "Failure", label: "Failure" },
  { value: "Other", label: "Other" },
  { value: "Unknown", label: "Unknown" },
];
