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
    htmlAElement.setAttribute("href", "resumes.html?resume=" + resume.id);
    htmlAElement.setAttribute("id", resume.id);
    htmlAElement.innerHTML = resume.name;

    htmlLiElement.appendChild(htmlAElement);
    dropdownMenu.appendChild(htmlLiElement);
}

$(document).ready(function() {

    // Get resumes array using a GET HTTP request.
    $.getJSON("https://david-read-portfolio-default-rtdb.firebaseio.com/resumes.json", function(resumes) {

        // Add an item in the resume dropdown menu for each resume in the resumes array.
        var resumeDropdownMenu = document.getElementById("resume-dropdown-menu");
        for (var i = 0; i < resumes.length; i++) {
            addItemToResumeDropdownMenu(resumeDropdownMenu, resumes[i]);
        }
    });

});