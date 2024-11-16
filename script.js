// Динамическое добавление навыков
const skills = [
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "API Testing",
    "Defect Tracking",
    "SQL",
    "Postman",
    "Jira",
    "Jenkins",
    "Agile (Scrum, Kanban)"
];

const skillsContainer = document.getElementById('skills');

skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.textContent = skill;
    skillsContainer.appendChild(skillDiv);
});
