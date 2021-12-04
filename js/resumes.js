$(document).ready(function() {

    // Get the resume URL parameter.
    var urlParams = new URLSearchParams(document.location.search);
    var resumeParam = urlParams.get("resume");

    // Get resumes array using a GET HTTP request.
    $.getJSON("https://david-read-portfolio-default-rtdb.firebaseio.com/resumes.json", function(resumes) {

        // Set the appropriate resume dropdown menu item as active and the appropriate embed src according to which resume is selected.
        var htmlEmbedElement = document.getElementById("resume-embed");
        for (var i = 0; i < resumes.length; i++) {
            if (resumes[i].id == resumeParam) {
                htmlAElement = document.getElementById(resumeParam);
                htmlAElement.classList.add("active");
                htmlEmbedElement.setAttribute("src", resumes[i].url);
            }
        }
    });
});