document.addEventListener("DOMContentLoaded", () => {
    const data = portfolioData;

    document.querySelectorAll("[data-social]").forEach((link) => {
        const key = link.dataset.social;
        if (data.socials[key]) link.href = data.socials[key];
    });

    const projectGrid = document.querySelector("#project-grid");
    data.projects.forEach((project, index) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.parentElement.classList.add('image-missing')">
                <span>${String(index + 1).padStart(2, "0")}</span>
            </div>
            <div class="project-card-content">
                <div class="project-meta">${project.category}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-list">${project.technologies.map(tech => `<span>${tech}</span>`).join("")}</div>
                <a href="${project.link}" target="_blank" rel="noopener">VIEW PROJECT ↗</a>
            </div>`;
        projectGrid.appendChild(card);
    });

    const timeline = document.querySelector("#timeline");
    data.timeline.forEach(item => {
        const row = document.createElement("article");
        row.className = "timeline-item";
        row.innerHTML = `<div class="timeline-date">${item.date}</div><div><h3>${item.title}</h3><p>${item.description}</p></div>`;
        timeline.appendChild(row);
    });

    const skillList = document.querySelector("#skill-list");
    data.skills.forEach((skill) => {
        const row = document.createElement("div");
        row.className = "skill-row";
        row.innerHTML = `<div class="skill-label"><span>${skill.name}</span><span>${skill.level}</span></div><p class="skill-description">${skill.description}</p>`;
        skillList.appendChild(row);
    });

    const storySteps = document.querySelector("#story-steps");
    data.storySteps.forEach(step => {
        const card = document.createElement("article");
        card.className = "story-step";
        card.innerHTML = `<span class="step-number">${step.number}</span><h3>${step.title}</h3><p>${step.description}</p>`;
        storySteps.appendChild(card);
    });

    const contactLinks = document.querySelector("#contact-links");
    const links = [
        { key:"github", label:"GitHub", icon:"GH" },
        { key:"linkedin", label:"LinkedIn", icon:"in" },
        { key:"email", label:"Email", icon:"@" }
    ];
    links.forEach(item => {
        const link = document.createElement("a");
        link.className = "contact-link";
        link.href = data.socials[item.key] || "#";
        link.target = item.key === "email" ? "_self" : "_blank";
        link.rel = "noopener";
        link.innerHTML = `<span class="contact-icon">${item.icon}</span><span>${item.label}</span>`;
        contactLinks.appendChild(link);
    });
});
