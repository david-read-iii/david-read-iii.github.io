/**
 * Adds a card representing the passed project object to the card container.
 * 
 * @param {HTMLDivElement} cardContainer - A reference to the card container.
 * @param {Object} project - The project object to add.
 */
function addProjectToCardContainer(cardContainer, project) {

    // Setup card layout.
    var outerCardLayout = document.createElement("div");
    outerCardLayout.setAttribute("class", "col");
    outerCardLayout.setAttribute("id", project.id);

    var innerCardLayout = document.createElement("div");
    innerCardLayout.setAttribute("class", "card h-100");

    outerCardLayout.appendChild(innerCardLayout);

    // Setup card image.
    var imageLink = document.createElement("a");
    imageLink.setAttribute("href", project.thumbnailUrl);
    imageLink.setAttribute("target", "_blank");
    imageLink.setAttribute("rel", "noreferrer noopener");

    var image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", project.thumbnailUrl);

    innerCardLayout.appendChild(imageLink);
    imageLink.appendChild(image);

    // Setup card body.
    var cardBodyLayout = document.createElement("div");
    cardBodyLayout.setAttribute("class", "card-body p-3");

    var nameText = document.createElement("h5");
    nameText.setAttribute("class", "card-title mb-3");
    nameText.innerHTML = project.name;

    var tagsText = document.createElement("h6");
    tagsText.setAttribute("class", "card-subtitle mb-2 text-muted");
    tagsText.innerHTML = project.tags;

    var dateText = document.createElement("h6");
    dateText.setAttribute("class", "card-subtitle mb-3 text-muted");
    dateText.innerHTML = project.date;

    var descriptionText = document.createElement("p");
    descriptionText.setAttribute("class", "mb-0");
    descriptionText.innerHTML = project.description;

    innerCardLayout.appendChild(cardBodyLayout);
    cardBodyLayout.appendChild(nameText);
    cardBodyLayout.appendChild(tagsText);
    cardBodyLayout.appendChild(dateText);
    cardBodyLayout.appendChild(descriptionText);

    // Setup card footer layout.
    var outerCardFooterLayout = document.createElement("div");
    outerCardFooterLayout.setAttribute("class", "card-footer p-3");

    var innerCardFooterLayout = document.createElement("div");
    innerCardFooterLayout.setAttribute("class", "float-end");

    innerCardLayout.appendChild(outerCardFooterLayout);
    outerCardFooterLayout.appendChild(innerCardFooterLayout);

    // Setup card footer buttons.
    if (project.codeUrl != "") {
        var seeCodeButton = document.createElement("a");
        seeCodeButton.setAttribute("class", "btn btn-primary");
        seeCodeButton.setAttribute("type", "button");
        seeCodeButton.setAttribute("href", project.codeUrl);
        seeCodeButton.setAttribute("target", "_blank");
        seeCodeButton.setAttribute("rel", "noreferrer noopener");
        seeCodeButton.innerHTML = "See Code";

        innerCardFooterLayout.appendChild(seeCodeButton);
    }

    if (project.projectUrl != "") {
        var tryItButton = document.createElement("a");
        tryItButton.setAttribute("class", "btn btn-primary ms-3");
        tryItButton.setAttribute("type", "button");
        tryItButton.setAttribute("href", project.projectUrl);
        tryItButton.setAttribute("target", "_blank");
        tryItButton.setAttribute("rel", "noreferrer noopener");
        tryItButton.innerHTML = "Try It";

        innerCardFooterLayout.appendChild(tryItButton);
    }

    // Add card to the card container.
    cardContainer.appendChild(outerCardLayout);
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
    $.getJSON("https://david-read-portfolio-default-rtdb.firebaseio.com/projects.json", function (projects) {

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