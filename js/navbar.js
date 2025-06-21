/**
 * Appends a single resume link as a dropdown menu item within the resume dropdown.
 *
 * @param {HTMLUListElement} resumeDropdownMenu - The `<ul>` element where the dropdown items will be added.
 * @param {Object} resume - The resume object to represent.
 * @param {string} resume.name - The label to display for this resume in the dropdown.
 * @param {string} resume.url - The URL to link to when the dropdown item is clicked.
 */
function addItemToResumeDropdownMenu(resumeDropdownMenu, resume) {
    const template = document.getElementById("resumeListItemTemplate");
    const listItem = template.content.cloneNode(true).querySelector("li");
    const link = listItem.querySelector("#resume-link");
    link.setAttribute("href", resume.url);
    link.textContent = resume.name;
    resumeDropdownMenu.appendChild(listItem);
}

/**
 * Initializes the resume navigation on page load by fetching resume data from a remote database.
 */
// document.addEventListener("DOMContentLoaded", () => {
//     fetch("https://david-read-portfolio-default-rtdb.firebaseio.com/resumes.json")
//         .then(response => response.json())
//         .then(resumes => {
//             const resumeDropdownMenu = document.querySelector("#resume-dropdown-menu");
//             resumes.forEach(resume => { addItemToResumeDropdownMenu(resumeDropdownMenu, resume) });
//         })
//         .catch(error => {
//             console.error("Failed to fetch resumes:", error);
//         });
// });

document.addEventListener("DOMContentLoaded", async () => {
    // Artificial delay to simulate load time
    await new Promise(resolve => setTimeout(resolve, 5000));

    try {
        const response = await fetch("https://david-read-portfolio-default-rtdb.firebaseio.com/resumes.json");
        const resumes = await response.json();

        const resumeDropdownMenu = document.querySelector("#resume-dropdown-menu");
        resumes.forEach(resume => {
            addItemToResumeDropdownMenu(resumeDropdownMenu, resume);
        });
    } catch (error) {
        console.error("Failed to fetch resumes:", error);
    }
});