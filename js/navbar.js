/**
 * Renders resume navigation links into the resume nav item container.
 * - If there is only one resume, it creates a single "Resume" link.
 * - If there are multiple resumes, it creates a dropdown menu allowing users to select one.
 *
 * @param {Object[]} resumes - An array of resume objects to display.
 * @param {string} resumes[].name - The display name of the resume.
 * @param {string} resumes[].url - The URL pointing to the resume PDF.
 */
function setupResumeNavItemContainer(resumes) {

    const resumeNavItemContainer = document.getElementById("resume-nav-item-container");

    if (resumes.length > 1) {
        const template = document.getElementById("multipleResumesLinkTemplate");
        const outerListItem = template.content.cloneNode(true).querySelector("li");
        resumeNavItemContainer.appendChild(outerListItem);
        const resumeDropdownMenu = outerListItem.querySelector("#resume-dropdown-menu");
        resumes.forEach(resume => { addItemToResumeDropdownMenu(resumeDropdownMenu, resume) });
    } else { // resumes.length == 1
        const template = document.getElementById("singleResumeLinkTemplate");
        const resumeLink = template.content.cloneNode(true).querySelector("a");
        resumeLink.setAttribute("href", resumes[0].url);
        resumeNavItemContainer.appendChild(resumeLink);
    }
}

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
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://david-read-portfolio-default-rtdb.firebaseio.com/resumes.json")
        .then(response => response.json())
        .then(resumes => { setupResumeNavItemContainer(resumes) })
        .catch(error => {
            console.error("Failed to fetch resumes:", error);
        });
});