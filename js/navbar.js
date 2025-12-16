// Configuration for the navigation bar
const navConfig = {
  website: {
    name: "Loan Risk Prediction",
    url: "home.html",
  },
  links: [
    { name: "Home", url: "home.html" },
    { name: "Features", url: "features.html" },
    { name: "How it works", url: "function.html" },
    { name: "Contact", url: "contact.html" },
  ],
};

// Function to load Lucide icons
function loadLucideIcons(callback) {
  if (window.lucide) {
    callback();
    return;
  }
  const script = document.createElement("script");
  script.src = "https://unpkg.com/lucide@latest";
  script.onload = callback;
  document.head.appendChild(script);
}

function createNavBar() {
  const currentPage = window.location.pathname.split("/").pop();
  console.log("Current Page:", currentPage);

  const navHtml = `
    <nav class="nav-container">
        <div>
          <a href="${navConfig.website.url}" class="nav-logo">   
          <i data-lucide="dollar-sign" class = "nav-logo-icon"></i>  
            ${navConfig.website.name}
          </a>
        </div>
        
        <ul class="nav-menu">
          ${navConfig.links
            .map(
              (link) => `
            <li class="nav-item">
              <a 
                href="${link.url}" 
                class="nav-link ${currentPage === link.url ? "active" : ""}"
              >
                ${link.name}
              </a>
            </li>
          `
            )
            .join("")}
          <li class="nav-item">
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              class="nav-link nav-link-icon"
            >
              <i data-lucide="github"></i>
              Code Repository
            </a>
          </li>
        </ul>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navHtml;

  // Initialize icons after navbar is created
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  loadLucideIcons(() => {
    createNavBar();
  });
});
