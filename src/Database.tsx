import { useState } from "react";
import projectsData from "./projects.json";
import "./styles/ProjectsPage.css";

export default function ProjectsPage() {
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];
  const years = ["All", ...Array.from(new Set(projectsData.map((p) => p.year))).sort((a, b) => b - a)];

  const filteredProjects = projectsData.filter(
    (project) =>
      (category === "All" || project.category === category) &&
      (year === "All" || project.year.toString() === year)
  );

  // Navigate button to first link if exists
  const handleButtonClick = (project: typeof projectsData[0]) => {
    if (project.link && project.link.length > 0) {
      window.open(project.link[0].url, "_blank");
    } else if (project.hasDropdown) {
      // fallback: toggle dropdown if no link
      setOpenProjectId(openProjectId === project.id ? null : project.id);
    }
  };

  return (
    <div className="db-database">
      <div className="db-filters">
        <label htmlFor="db-category-select">Filter by category:</label>
        <select
          id="db-category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label htmlFor="db-year-select" style={{ marginLeft: "1rem" }}>
          Filter by year:
        </label>
        <select
          id="db-year-select"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {years.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      <div className="db-projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`db-project-box ${project.hasDropdown ? "db-has-dropdown" : ""}`}
          >
            <button
              className="db-expandable-title"
              onClick={() => handleButtonClick(project)}
            >
              <span>
                <span className="db-project-title">{project.title}</span> ({project.category} - {project.month}, {project.year})
              </span>

              {/* Inline links displayed
              {project.link && project.link.length > 0 && (
                <span className="db-project-links">
                  {" "}
                  {project.link.map((linkObj, index) => (
                    <span key={index} className="db-link-span">
                      [{linkObj.label}]
                      {index < project.link.length - 1 && " | "}
                    </span>
                  ))}
                </span>
              )} */}

              {project.hasDropdown && <span className="db-dropdown-icon"> ▼</span>}
            </button>

            {/* Dropdown content only if hasDropdown */}
            {project.hasDropdown && openProjectId === project.id && (
              <div className="db-expandable-content">
                {project.details && <p>{project.details}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
