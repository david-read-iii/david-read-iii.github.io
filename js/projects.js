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

document.addEventListener("DOMContentLoaded", function () {

    // Fetch featuredProjectIds and projects in parallel
    Promise.all([
        fetch("https://david-read-portfolio-default-rtdb.firebaseio.com/featuredProjectIds.json").then(r => r.json()),
        fetch("https://david-read-portfolio-default-rtdb.firebaseio.com/projects.json").then(r => r.json())
    ]).then(([featuredProjectIds, projects]) => {
        // Render Featured Projects
        const featuredContainer = document.getElementById("featured-container");
        if (Array.isArray(featuredProjectIds) && featuredContainer) {
            // Map project ids to project objects in the order of featuredProjectIds
            featuredProjectIds.forEach(fid => {
                const project = projects.find(p => p.id === fid);
                if (project) {
                    addProjectToCardContainer(featuredContainer, project);
                }
            });
        }

        // Render All Projects
        const cardContainerLayout = document.getElementById("card-container");
        for (let i = 0; i < projects.length; i++) {
            addProjectToCardContainer(cardContainerLayout, projects[i]);
        }

        // If the URL refers to a particular card, wait for all images to load. Then scroll to it.
        const params = new URLSearchParams(window.location.search);
        const projectParam = params.get("project");
        if (projectParam != null) {
            let imagesLoaded = 0;
            const totalImages = projects.length;

            document.querySelectorAll("img").forEach((img) => {
                const preload = new Image();
                preload.onload = () => {
                    imagesLoaded++;
                    if (imagesLoaded === totalImages) {
                        highlightAndScrollIntoCard(projectParam);
                    }
                };
                preload.src = img.src;
            });
        }
    }).catch(error => console.error("Failed to fetch projects or featuredProjectIds:", error));

    // See More Modal show modal event listener.
    const seeMoreModal = document.getElementById("seeMoreModal");
    seeMoreModal.addEventListener("show.bs.modal", function (event) {
        const button = event.relatedTarget;
        const project = JSON.parse(button.getAttribute("data-project"));

        // Setup Carousel.
        const carousel = seeMoreModal.querySelector("#carousel");
        const carouselInner = seeMoreModal.querySelector("#carouselInner");
        const carouselIndicatorText = seeMoreModal.querySelector("#carouselIndicatorText");
        const carouselPrev = seeMoreModal.querySelector("#carouselPrevBtn");
        const carouselNext = seeMoreModal.querySelector("#carouselNextBtn");

        // Clear carousel content and indicator.
        carouselInner.innerHTML = '';
        carouselIndicatorText.textContent = "";

        if (Array.isArray(project.media) && project.media.length > 0) {
            // Show carousel and arrows.
            carousel.style.display = "";
            if (carouselPrev) carouselPrev.style.display = "";
            if (carouselNext) carouselNext.style.display = "";

            // Also show their parent containers if present
            if (carouselPrev && carouselPrev.parentElement) carouselPrev.parentElement.style.display = "";
            if (carouselNext && carouselNext.parentElement) carouselNext.parentElement.style.display = "";

            project.media.forEach((mediaItem, index) => {
                addCarouselItemToCarouselInner(carouselInner, mediaItem);
            });

            // Set active carousel item.
            if (carouselInner.firstElementChild) {
                carouselInner.firstElementChild.classList.add("active");
            }

            // Disable auto-scrolling of carousel.
            const carouselElement = carousel;
            const carouselInstance = bootstrap.Carousel.getInstance(carouselElement)
                || new bootstrap.Carousel(carouselElement, { interval: false, ride: false });
            carouselInstance.pause();

            // Set indicator text.
            setCarouselIndicatorText(carouselIndicatorText, carouselInner);
        } else {
            // Hide carousel and arrows if no media.
            carousel.style.display = "none";
            if (carouselPrev) {
                carouselPrev.style.display = "none";
                if (carouselPrev.parentElement) carouselPrev.parentElement.style.display = "none";
            }
            if (carouselNext) {
                carouselNext.style.display = "none";
                if (carouselNext.parentElement) carouselNext.parentElement.style.display = "none";
            }
            // Try hiding all .carousel-control-prev and .carousel-control-next in the modal as a fallback
            seeMoreModal.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(el => {
                el.style.display = 'none';
                if (el.parentElement) el.parentElement.style.display = 'none';
            });
            carouselIndicatorText.textContent = "";
        }

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
            addButtonToFooter(footer, project.links.demoUrl, "Demo It");
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

    // Carousel slide event listener.
    const carousel = seeMoreModal.querySelector("#carousel");
    carousel.addEventListener("slid.bs.carousel", function () {
        const carouselIndicatorText = seeMoreModal.querySelector("#carouselIndicatorText");
        const carouselInner = seeMoreModal.querySelector("#carouselInner");
        setCarouselIndicatorText(carouselIndicatorText, carouselInner);
    });
}); x