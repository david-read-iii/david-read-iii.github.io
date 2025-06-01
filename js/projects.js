/**
 * Adds a card representing the passed project object to the card container.
 * 
 * @param {HTMLDivElement} cardContainer - A reference to the card container.
 * @param {Object} project - The project object to add.
 */
function addProjectToCardContainer(cardContainer, project) {

    // Get template card.
    const template = document.getElementById("card-template");
    const card = template.content.cloneNode(true);

    // Set id.
    const cardCol = card.querySelector(".col");
    cardCol.id = project.id;

    // Setup image link.
    const cardImgLink = card.querySelector(".card-img-link");
    const cardImg = card.querySelector("img");
    cardImg.src = project.thumbnailUrl;
    cardImgLink.href = project.thumbnailUrl;

    // Add text content.
    card.querySelector(".card-title").textContent = project.name;
    card.querySelector(".tags").textContent = project.tags;
    card.querySelector(".date").textContent = project.date;

    // Pass project JSON as a param when See More is clicked.
    const seeMoreBtn = card.querySelector("#seeMoreButton");
    seeMoreBtn.setAttribute("data-project", JSON.stringify(project));

    cardContainer.appendChild(card);
}

/**
 * Highlights and scrolls into the card with the provided id.
 * 
 * @param {string} id - An id of a card.
 */
function highlightAndScrollIntoCard(id) {

    // Highlight card.
    var outerCardLayout = document.getElementById(document.location.hash.substring(1));
    var innerCardLayout = outerCardLayout.getElementsByClassName("card")[0];
    var outerCardFooterLayout = outerCardLayout.getElementsByClassName("card-footer")[0];

    innerCardLayout.classList.add("card-highlight");
    outerCardFooterLayout.classList.add("card-footer-highlight");

    // Scroll into card.
    outerCardLayout.scrollIntoView();
}

/**
 * Creates a new button element from a template, sets its link and text, and appends it to the given footer element.
 * 
 * @param {HTMLElement} footer - The container element (e.g., a div) where the button will be appended.
 * @param {string} href - The URL string to set as the button's link (assuming you want it to behave like a link).
 * @param {string} textContent - The text to display inside the button.
 */
function addButtonToFooter(footer, href, textContent) {
    // Get template button.
    const template = document.getElementById("modalButtonTemplate");
    const button = template.content.cloneNode(true).firstElementChild;

    // Set data on button.
    button.href = href
    button.textContent = textContent

    // Add button to footer.
    footer.appendChild(button)
}

$(document).ready(function () {

    // Get projects array using a GET HTTP request.
    // TODO: DO NOT MERGE THIS TO RELEASE! IT IS POINTING AT THE DEBUG JSON FOR NOW!
    $.getJSON("https://david-read-portfolio-default-rtdb.firebaseio.com/projects-debug.json", function (projects) {

        // Add a card in the card container for each project in the projects array.
        var cardContainerLayout = document.getElementById("card-container");
        for (var i = 0; i < projects.length; i++) {
            addProjectToCardContainer(cardContainerLayout, projects[i]);
        }

        /* If the URL refers to a particular card in the card container, wait for all images to load. Then, highlight the referred to
         * card and scroll into it. */
        if (document.location.hash) {

            function imageLoaded() {
                imagesLoaded++;
                if (imagesLoaded == totalImages) {
                    highlightAndScrollIntoCard(document.location.hash.substring(1));
                }
            }

            var imagesLoaded = 0;
            var totalImages = projects.length;

            $("img").each(function (idx, img) {
                $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const seeMoreModal = document.getElementById("seeMoreModal");

    // See More Modal show modal event listener.
    seeMoreModal.addEventListener("show.bs.modal", function (event) {
        const button = event.relatedTarget;
        const project = JSON.parse(button.getAttribute("data-project"));

        // Set text on modal body.
        seeMoreModal.querySelector("#nameLabel").textContent = project.name;
        seeMoreModal.querySelector("#tagsValue").textContent = project.tags;
        seeMoreModal.querySelector("#dateValue").textContent = project.date;
        seeMoreModal.querySelector("#descriptionValue").textContent = project.description;

        const footer = seeMoreModal.querySelector("#modalFooter");

        // Clear previously added buttons from footer.
        footer.querySelectorAll(".btn-primary").forEach(btn => btn.remove());

        // Add dynamic buttons to footer.
        if (project.links.code) {
            addButtonToFooter(footer, project.links.code, "See Code");
        }
        if (project.links.demo) {
            addButtonToFooter(footer, project.links.demo, "Demo It");
        }
    });
});