/*
    EDIT THIS FILE TO UPDATE THE SITE
    - Replace assets/profile.jpg to change your profile photo.
    - Replace assets/cv.pdf to change your CV.
    - Change the social links below.
    - Add projects by adding another object to the projects array.
*/
const portfolioData = {
    socials: {
        github: "https://github.com/Osama-Hatem",
        linkedin: "www.linkedin.com/in/osama-hatem-1a20443ab",
        email: "osama.hatem.oh@gmail.com"
    },
    projects: [
        { title:"Research Data Pipeline", category:"SOFTWARE / RESEARCH", description:"A Python research-paper collection pipeline that searches OpenAlex, normalizes papers, stores authors and relationships in SQLite, and exposes the workflow through both a CLI and a Django interface.", technologies:["Python","SQLite","Django","APIs"], image:"assets/projects/research-pipeline.jpg", link:"https://github.com/YOUR_USERNAME/research-data-pipeline" },
        { title:"AI Fire Detector", category:"AI / IOT / CLOUD", description:"A cloud-connected fire detection system designed around live feedback, event clips, and YOLO-based computer vision processing.", technologies:["Python","YOLO","AWS","IoT"], image:"assets/projects/fire-detector.jpg", link:"#" },
        { title:"Energy Blocks", category:"ENGINEERING / ENERGY", description:"An engineering project exploring energy systems and the challenge of making complex physical ideas understandable through experimentation and design.", technologies:["Engineering","Energy","Physics"], image:"assets/projects/energy-blocks.jpg", link:"#" }
    ],
    timeline: [
        { date:"2025 — PRESENT", title:"Independent Engineering & Research", description:"Building software systems, AI projects, research tooling, and engineering projects while developing a deeper understanding of how systems work." },
        { date:"2026", title:"IPhyC Placement", description:"A competitive academic experience that strengthened my interest in physics, problem solving, and rigorous technical thinking." },
        { date:"CURRENT", title:"STEM Education", description:"Developing across mathematics, physics, computer science, engineering, and research." }
    ],
    skills: [
        { name:"Python & Software Development", level:"Advanced", description:"Python applications, automation, APIs, testing, modular architecture, and project development." },
        { name:"Data & SQL", level:"Advanced", description:"Data collection, normalization, SQLite, relational modelling, querying, and research data pipelines." },
        { name:"Backend & Systems Design", level:"Intermediate", description:"Designing services, CLIs, web interfaces, databases, integrations, and maintainable system workflows." },
        { name:"AI & Computer Vision", level:"Intermediate", description:"YOLO-based detection, machine learning concepts, computer vision workflows, and AI system design." },
        { name:"Cloud & DevOps", level:"Intermediate", description:"AWS architecture, Docker, Linux, networking fundamentals, deployment, cost awareness, and observability." },
        { name:"Research & Data Analysis", level:"Advanced", description:"Research questions, literature exploration, data analysis, experimentation, and translating questions into measurable work." },
        { name:"Physics & Engineering", level:"Advanced", description:"Mathematics, physics, energy systems, problem solving, and applying theory to real engineering questions." },
        { name:"Git, Testing & Engineering Practice", level:"Intermediate", description:"Version control, pytest, debugging, documentation, modular code, and iterative engineering workflows." }
    ],
    storySteps: [
        { number:"01", title:"Small Problem", description:"Too lazy to open three apps." },
        { number:"02", title:"First Code", description:"Wrote my first Python script." },
        { number:"03", title:"First Project", description:"Turned an idea into something real." },
        { number:"04", title:"Bigger Systems", description:"Started building tools that solve real problems." },
        { number:"05", title:"Bigger Questions", description:"Exploring AI, energy, research, and engineering." }
    ]
};
