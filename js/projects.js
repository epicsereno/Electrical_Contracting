const projects = [
  {
    title: "Smith Warehouse Service Expansion",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    summary: "New distribution, equipment feeds, lighting control cleanup, and inspection documentation for an active warehouse."
  },
  {
    title: "Fleet EV Charging Yard",
    category: "ev",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    summary: "Load planning, charger layout, trench coordination, and commissioning support for fleet operations."
  },
  {
    title: "Solar-Ready Panel Upgrade",
    category: "renewable",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    summary: "Service upgrade and clean inverter-ready wiring for renewable generation and future battery storage."
  },
  {
    title: "Kitchen Remodel Rewire",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
    summary: "Dedicated appliance circuits, recessed lighting, GFCI protection, and panel labeling for a finished remodel."
  },
  {
    title: "Exterior Security Lighting",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    summary: "High-efficiency LED lighting and controls to improve visibility around entries, loading, and parking areas."
  },
  {
    title: "Standby Generator Integration",
    category: "residential",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    summary: "Critical load planning, transfer switch installation, and backup power testing for a private residence."
  }
];

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(filter = "all") {
  if (!projectGrid) return;
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card">
          <img src="${project.image}" alt="${project.title}">
          <div>
            <span>${project.category}</span>
            <h2>${project.title}</h2>
            <p>${project.summary}</p>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
