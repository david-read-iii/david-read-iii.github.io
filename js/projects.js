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

    // TODO: Add click listener for See Details button.

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

$(document).ready(function () {

    // Get projects array using a GET HTTP request.
    // TODO: DO NOT MERGE THIS TO RELEASE! IT IS POINTING AT THE DEBUG JSON FOR NOW!
    $.getJSON("https://david-read-portfolio-default-rtdb.firebaseio.com/projects-debug.json", function (projects) {

        // Add a card in the card container for each project in the projects array.
        var cardContainerLayout = document.getElementById("card-container");
        for (var i = 0; i < projects.length; i++) {
            console.log
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