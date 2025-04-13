/**
 * Sets up the content within the resume nav item container. If only one resume is given, will display a
 * single Resume link. If more than one resume is given, will display a dropdown where a specific resume
 * may be selected.
 * 
 * @param {Object[]} resumes - The resumes to display.
 */
function setupResumeNavItemContainer(resumes) {

    var resumeNavItemContainer = document.getElementById("resume-nav-item-container");

    if (resumes.length > 1) {
        // Setup outer li tag.
        var outerListItem = document.createElement("li");
        outerListItem.setAttribute("class", "nav-item dropdown");

        resumeNavItemContainer.appendChild(outerListItem);

        // Setup resume button.
        var resumesLink = document.createElement("a");
        resumesLink.setAttribute("class", "nav-link dropdown-toggle");
        resumesLink.setAttribute("href", "#");
        resumesLink.setAttribute("id", "resume-dropdown");
        resumesLink.setAttribute("role", "button");
        resumesLink.setAttribute("data-bs-toggle", "dropdown");
        resumesLink.setAttribute("aria-expanded", "false");
        resumesLink.textContent = "Resumes";

        outerListItem.appendChild(resumesLink);

        // Setup ul tag.
        var resumeDropdownMenu = document.createElement("ul");
        resumeDropdownMenu.setAttribute("class", "dropdown-menu");
        resumeDropdownMenu.setAttribute("id", "resume-dropdown-menu");
        resumeDropdownMenu.setAttribute("aria-labelledby", "resume-dropdown");

        outerListItem.appendChild(resumeDropdownMenu);

        // Add an item in the resume dropdown menu for each resume in the resumes array.
        for (var i = 0; i < resumes.length; i++) {
            addItemToResumeDropdownMenu(resumeDropdownMenu, resumes[i]);
        }
    } else { // resumes.length == 1
        var resumeLink = document.createElement("a");
        resumeLink.setAttribute("class", "nav-item nav-link");
        resumeLink.setAttribute("href", resumes[0].url);
        resumeLink.setAttribute("target", "_blank");
        resumeLink.setAttribute("rel", "noreferrer noopener");
        resumeLink.textContent = "Resume";

        resumeNavItemContainer.appendChild(resumeLink);
    }
}

/**
 * Adds a dropdown item representing the passed resume object to the resume dropdown menu.
 * 
 * @param {HTMLUListElement} dropdownMenu - A reference to the resume dropdown menu.
 * @param {Object} resume - The resume object to add.
 */
function addItemToResumeDropdownMenu(dropdownMenu, resume) {
    var htmlLiElement = document.createElement("li");

    var htmlAElement = document.createElement("a");
    htmlAElement.setAttribute("class", "dropdown-item");
    htmlAElement.setAttribute("href", resume.url);
    htmlAElement.setAttribute("target", "_blank");
    htmlAElement.setAttribute("rel", "noreferrer noopener");
    htmlAElement.textContent = resume.name;

    htmlLiElement.appendChild(htmlAElement);
    dropdownMenu.appendChild(htmlLiElement);
}

$(document).ready(function () {
    // Get resumes array using a GET HTTP request.
    $.getJSON("https://david-read-portfolio-default-rtdb.firebaseio.com/resumes.json", function (resumes) {
        setupResumeNavItemContainer(resumes)
    });
});