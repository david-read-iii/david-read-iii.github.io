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
    cardImgLink.href = project.thumbnail.url;
    const cardImg = card.querySelector("img");
    cardImg.src = project.thumbnail.url;
    cardImg.alt = project.thumbnail.altText;

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
 * Adds highlight styles to a card and its footer, then scrolls it into view.
 *
 * @param {string} id - ID of the card container element.
 */
function highlightAndScrollIntoCard(id) {

    // Highlight card.
    const outerCardLayout = document.getElementById(id);
    const innerCardLayout = outerCardLayout.getElementsByClassName("card")[0];
    const outerCardFooterLayout = outerCardLayout.getElementsByClassName("card-footer")[0];

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

/**
 * Adds a media item (image or video) to a Bootstrap carousel's inner container.
 *
 * This function clones a template element based on the type of media (`IMAGE` or `VIDEO`),
 * sets the appropriate media URL on the cloned element, and appends it to the provided
 * `carouselInner` container.
 *
 * @param {HTMLElement} carouselInner - The `#carouselInner` container element where the new item will be inserted.
 * @param {Object} mediaItem - The media item to add. Must include a `type` property (`"IMAGE"` or `"VIDEO"`) and a `url` property.
 * @param {string} mediaItem.type - The type of media, either `"IMAGE"` or `"VIDEO"`.
 * @param {string} mediaItem.url - The URL of the image or video to embed.
 */
function addCarouselItemToCarouselInner(carouselInner, mediaItem) {
    if (mediaItem.type === "IMAGE") {
        // Get template carouselItem.
        const template = document.getElementById("modalCarouselItemImageTemplate");
        const carouselItem = template.content.cloneNode(true).firstElementChild;

        // Set data on carouselItem.
        carouselItem.querySelector("#carouselItemLink").href = mediaItem.url;
        const carouselItemImg = carouselItem.querySelector("#carouselItemImg");
        carouselItemImg.src = mediaItem.url;
        carouselItemImg.alt = mediaItem.altText;

        // Add carouselItem to carouselInner.
        carouselInner.appendChild(carouselItem);
    } else if (mediaItem.type === "VIDEO") {
        // Get template carouselItem.
        const template = document.getElementById("modalCarouselItemVideoTemplate");
        const carouselItem = template.content.cloneNode(true).firstElementChild;

        // Set data on carouselItem.
        const carouselItemIframe = carouselItem.querySelector("#carouselItemIframe");
        carouselItemIframe.src = mediaItem.url;
        carouselItemIframe.title = mediaItem.altText;

        // Add carouselItem to carouselInner.
        carouselInner.appendChild(carouselItem);
    }
}

/**
 * Updates the text and ARIA label of a carousel indicator element to reflect
 * the current active slide in a Bootstrap carousel.
 *
 * The indicator will show text in the format "1 / N", where N is the total number of
 * carousel items, and the first item is indexed as 1. It also updates the `aria-label`
 * for accessibility to indicate which item is currently selected.
 *
 * @param {HTMLElement} carouselIndicatorText - The DOM element where the indicator text should be displayed.
 * @param {HTMLElement} carouselInner - The `.carousel-inner` container that holds the `.carousel-item` elements.
 */
function setCarouselIndicatorText(carouselIndicatorText, carouselInner) {
    const items = carouselInner.querySelectorAll(".carousel-item");
    const total = items.length;
    const activeIndex = Array.from(items).findIndex(item => item.classList.contains("active"));
    carouselIndicatorText.textContent = `${activeIndex + 1} / ${total}`;
    carouselIndicatorText.setAttribute("aria-label", `Item ${activeIndex + 1} of ${total} selected in carousel.`);
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

        // If the URL refers to a particular card, wait for all images to load. Then, highlight the card and scroll to it.
        const params = new URLSearchParams(window.location.search);
        const projectParam = params.get("project");
        if (projectParam != null) {

            function imageLoaded() {
                imagesLoaded++;
                if (imagesLoaded == totalImages) {
                    highlightAndScrollIntoCard(projectParam);
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

        // Setup Carousel.
        const carouselInner = seeMoreModal.querySelector("#carouselInner");
        project.media.forEach((mediaItem, index) => {
            addCarouselItemToCarouselInner(carouselInner, mediaItem);
        });

        // Set active carousel item.
        carouselInner.firstElementChild.classList.add("active");

        // Disable auto-scrolling of carousel.
        const carouselElement = seeMoreModal.querySelector('#carousel');
        const carouselInstance = bootstrap.Carousel.getInstance(carouselElement)
            || new bootstrap.Carousel(carouselElement, { interval: false, ride: false });
        carouselInstance.pause();

        // Set indicator text.
        const carouselIndicatorText = seeMoreModal.querySelector("#carouselIndicatorText");
        setCarouselIndicatorText(carouselIndicatorText, carouselInner);

        // Set text on modal body.
        seeMoreModal.querySelector("#nameLabel").textContent = project.name;
        seeMoreModal.querySelector("#tagsValue").textContent = project.tags;
        seeMoreModal.querySelector("#dateValue").textContent = project.date;
        seeMoreModal.querySelector("#descriptionValue").textContent = project.description;

        const footer = seeMoreModal.querySelector("#modalFooter");

        // Clear previously added buttons from footer.
        footer.querySelectorAll(".btn-primary").forEach(btn => btn.remove());

        // Add dynamic buttons to footer.
        if (project.links.codeUrl) {
            addButtonToFooter(footer, project.links.codeUrl, "See Code");
        }
        if (project.links.demoUrl) {
            addButtonToFooter(footer, project.links.codeUrl, "Demo It");
        }
    });

    // See More Modal hide modal event listener.
    seeMoreModal.addEventListener("hidden.bs.modal", function () {
        // Clear carousel items after closing.
        const carouselInner = seeMoreModal.querySelector("#carouselInner");
        carouselInner.innerHTML = '';

        // Clear carousel indicator after closing.
        const carouselIndicatorText = seeMoreModal.querySelector("#carouselIndicatorText");
        carouselIndicatorText.textContent = "";
    });

    const carousel = seeMoreModal.querySelector("#carousel");

    // Carousel slide event listener.
    carousel.addEventListener("slid.bs.carousel", function () {
        const carouselIndicatorText = seeMoreModal.querySelector("#carouselIndicatorText");
        const carouselInner = seeMoreModal.querySelector("#carouselInner");
        setCarouselIndicatorText(carouselIndicatorText, carouselInner);
    });
});x