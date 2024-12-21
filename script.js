// Sample Projects Data
const projects = [
    {
        name: "Project A",
        description: "An AI-based solution to optimize supply chains.",
        repo: "https://github.com/aditya/project-a",
    },
    {
        name: "Project B",
        description: "A web app to visualize large datasets interactively.",
        repo: "https://github.com/aditya/project-b",
    },
    {
        name: "Project C",
        description: "Automated DevOps pipelines for cloud-native architectures.",
        repo: "https://github.com/aditya/project-c",
    },
];

// Dynamically Populate Projects Section
const projectList = document.getElementById("project-list");
projects.forEach((project) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${project.name}</strong>: ${project.description}
        <a href="${project.repo}" target="_blank">View Repository</a>
    `;
    projectList.appendChild(li);
});
