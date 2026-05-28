const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

const services = [
  {
    name: "Residential Electrical",
    label: "Homes",
    text: "Panels, dedicated circuits, remodel wiring, safety corrections, lighting, and troubleshooting."
  },
  {
    name: "Commercial / Industrial",
    label: "Facilities",
    text: "Tenant improvements, service upgrades, distribution, controls, equipment feeds, and maintenance."
  },
  {
    name: "Smart Home Automation",
    label: "Controls",
    text: "Smart lighting, networked devices, energy controls, security wiring, and clean device installs."
  },
  {
    name: "EV Charger Installation",
    label: "Charging",
    text: "Residential chargers, fleet charging, load calculations, pedestal installs, and commissioning."
  },
  {
    name: "Solar & Renewable Energy",
    label: "Renewables",
    text: "Solar-ready upgrades, inverter wiring, battery backup coordination, and energy monitoring."
  },
  {
    name: "Generator Installs & Backup Power",
    label: "Resilience",
    text: "Standby generators, transfer switches, critical load planning, and maintenance support."
  },
  {
    name: "Emergency Repairs & 24/7 Service",
    label: "Dispatch",
    text: "Outages, failed breakers, unsafe panels, storm damage, hot circuits, and urgent restoration."
  },
  {
    name: "Lighting Design & Installation",
    label: "Lighting",
    text: "High-output warehouse lighting, architectural fixtures, controls, retrofits, and exterior safety."
  }
];

const catalog = document.querySelector("#serviceCatalog");
if (catalog) {
  catalog.innerHTML = services
    .map(
      (service) => `
        <article class="catalog-card">
          <span>${service.label}</span>
          <h2>${service.name}</h2>
          <p>${service.text}</p>
          <a class="text-link" href="quote.html">Estimate this service</a>
        </article>
      `
    )
    .join("");
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("submitted");
    const button = form.querySelector("button[type='submit']");
    if (button) {
      const originalText = button.dataset.originalText || button.textContent;
      button.dataset.originalText = originalText;
      button.textContent = "Request Received";
      setTimeout(() => {
        button.textContent = originalText;
      }, 2600);
    }
  });
});
