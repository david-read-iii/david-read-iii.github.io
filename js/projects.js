window.onload = function() {

    // Array of project data.
    var projects = [{
            "id": "the-guardian-news-client-app",
            "name": "The Guardian News Client App",
            "technologies": "Android · XML · Java · REST API",
            "date": "Nov 2021 - Dec 2021",
            "description": "A project completed for a Udacity course. It is an Android app that uses The Guardian API to display a news feed. Each feed item shows that article's title, authors, section name, and date published. Clicking on an item launches the device's browser to view the article online. The order of the news feed items and an optional search query may be specified in a settings screen. Further, the news feed may be refreshed at any time.",
            "imagePath": "img/project_the_guardian_news_client_app.png",
            "codeUrl": "https://github.com/david-read-iii/The-Guardian-News-Client",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.davidread.theguardiannewsclient"
        },
        {
            "id": "book-listings-app",
            "name": "Book Listings App",
            "technologies": "Android · XML · Java · REST API",
            "date": "Oct 2021 - Nov 2021",
            "description": "A project built for a Udacity course. It is an Android app that uses the Google Books API to display listings for volumes searches. The user may use a search box to specify a query term. Search results are displayed in a list, where each listing shows the book's title and author. Clicking on a result directs the user to the browser to view details about that book.",
            "imagePath": "img/project_book_listings_app.png",
            "codeUrl": "https://github.com/david-read-iii/Book-Listings",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.davidread.booklistings"
        },
        {
            "id": "developer-portfolio-website",
            "name": "Developer Portfolio Website",
            "technologies": "Web · HTML · CSS · Bootstrap · JavaScript · jQuery",
            "date": "Oct 2021 - Nov 2021",
            "description": "A website created to serve as a personal developer portfolio. It lists professional information about me, a list of my notable projects, my resume, and my contact information. It utilizes Bootstrap CSS classes to enhance the user interface of the website. It also utilizes jQuery JS to simplify JavaScript code.",
            "imagePath": "img/project_developer_portfolio_website.jpg",
            "codeUrl": "https://github.com/david-read-iii/david-read-iii.github.io",
            "projectUrl": "https://david-read-iii.github.io/"
        },
        {
            "id": "washington-tour-guide-app",
            "name": "Washington Tour Guide App",
            "technologies": "Android · XML · Java",
            "date": "Oct 2021",
            "description": "An Android app developed for a Udacity course. The app lists places of interest around my local city. Clicking on an item shows a dialog containing information about the place. A tabbed interface allows the user to switch between categories.",
            "imagePath": "img/project_washington_tour_guide_app.png",
            "codeUrl": "https://github.com/david-read-iii/Washington-Tour-Guide",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.davidread.washingtontourguide1"
        },
        {
            "id": "who-wants-to-be-a-millionaire-game",
            "name": "Who Wants to Be a Millionaire Game",
            "technologies": "Android · XML · Java",
            "date": "May 2021",
            "description": "An Android app created for a mobile computing college course. The app allows the user to play the famous game, Who Wants to Be a Millionaire. It presents multiple choice questions to the user until the user answers one incorrectly or the user becomes a millionaire.",
            "imagePath": "img/project_who_wants_to_be_a_millionaire_game.png",
            "codeUrl": "https://github.com/david-read-iii/Who-Wants-to-Be-a-Millionaire",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.davidread.gameshow"
        },
        {
            "id": "course-registration-waiting-list-app",
            "name": "Course Registration Waiting List App",
            "technologies": "Android · XML · Java · SQLite",
            "date": "Apr 2021",
            "description": "An Android app created for a mobile computing college course. The app allows the user to manage a course registration waiting list. Each listing shows the entry's student name, course, and priority. Clicking on a listing pops a dialog showing modification options for the entry. Clicking the floating action button in the bottom right corner pops a dialog for adding a new entry. The entries are stored on-device in an SQLite database.",
            "imagePath": "img/project_course_registration_waiting_list_app.png",
            "codeUrl": "https://github.com/david-read-iii/Course-Registration-Waiting-List",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.davidread.courseregistrationwaitinglist"
        },
        {
            "id": "quiz-game",
            "name": "Quiz Game",
            "technologies": "Android · XML · Java · SQLite",
            "date": "Apr 2021",
            "description": "An Android app developed for a mobile computing college course. The app allows the user to log into the app and play a quiz game. Top-level navigation is handled via a navigation drawer. A login screen allows the user to log into the app, a register screen allows the user to register for an account, a rules screen specifies the rules of the game, a quiz screen presents questions, a results screen shows a list of past quiz attempts, and a manage user screen has options for the user's account. Properties of the user's account are stored on-device in an SQLite database.",
            "imagePath": "img/project_quiz_game.png",
            "codeUrl": "https://github.com/david-read-iii/Quiz-Game",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.davidread.quizgame"
        },
        {
            "id": "notes-app",
            "name": "Notes App",
            "technologies": "Android · XML · Java",
            "date": "Nov 2020",
            "description": "An Android app created to present at an MSU Computer Club workshop. It is a simple notes app. Each note has a title and description. Clicking a note shows a screen with modification options for the note. Clicking the add button in the action bar shows a screen for adding a new note. Notes are stored on-device in shared preferences.",
            "imagePath": "img/project_notes_app.png",
            "codeUrl": "https://github.com/david-read-iii/Notes",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.davidread.notes"
        },
        {
            "id": "stopwatch-app",
            "name": "Stopwatch App",
            "technologies": "Android · XML · Java",
            "date": "Oct 2020",
            "description": "An Android app developed to present at an MSU Computer Club workshop. The app is a simple stopwatch with controls to start, stop, and reset the time. Some source code is adapted from Code in Flow’s stopwatch tutorial, which can be found at https://codinginflow.com/tutorials/android/chronometer.",
            "imagePath": "img/project_stopwatch_app.png",
            "codeUrl": "https://github.com/david-read-iii/Stopwatch",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.davidread.stopwatch"
        },
        {
            "id": "restaurant-automation-system-app",
            "name": "Restaurant Automation System App",
            "technologies": "Android · XML · Java · Firebase",
            "date": "Jan 2020 – May 2020",
            "description": "An Android app developed for a software engineering college course. The goal of this project was to build a full-stack system that automates the functions of a restaurant. The app allows employees to log into the system and manage the attributes of the restaurant. Employee permissions dictate what attributes they have access to. All attributes of the restaurant are stored in a Firebase database. The database models several aspects of the restaurant, including the state of the employees, tables, orders, menu, and inventory. Further, the app records all actions an employee takes and saves them in a log visible to any user of the system.",
            "imagePath": "img/project_restaurant_automation_system_app.png",
            "codeUrl": "https://github.com/david-read-iii/Restaurant-Automation-System",
            "projectUrl": "https://play.google.com/store/apps/details?id=com.read.restaurantautomationsystem"
        },
        {
            "id": "tic-tac-toe-game",
            "name": "Tic-Tac-Toe Game",
            "technologies": "Command Line · Java",
            "date": "Mar 2020",
            "description": "A command line Java program created for an artificial intelligence course. It applies Adversarial Search Problem to a game of Tic-Tac-Toe. The program has a user playing a simulated opponent. The user uses the command line to select their moves. The opponent uses the Minimax algorithm to select the best move to counter the user's moves. This results in all games ending in either a draw or a defeat for the user.",
            "imagePath": "img/project_tic_tac_toe_game.jpg",
            "codeUrl": "https://github.com/david-read-iii/Tic-Tac-Toe",
            "projectUrl": "https://github.com/david-read-iii/Tic-Tac-Toe/raw/master/out/artifacts/TicTacToe_jar/TicTacToe.jar"
        },
        {
            "id": "shortest-path-problem-program",
            "name": "Shortest Path Problem Program",
            "technologies": "Command Line · Java",
            "date": "Feb 2020",
            "description": "A command line Java program developed for an artificial intelligence college course. It applies the Shortest Path Problem to a graph of fictitious cities. It uses either Best First Search or Uniform Cost Search to provide the shortest path from one city in the graph to another.",
            "imagePath": "img/project_shortest_path_problem_program.jpg",
            "codeUrl": "https://github.com/david-read-iii/Shortest-Path-Problem",
            "projectUrl": "https://github.com/david-read-iii/Shortest-Path-Problem/raw/master/classes/artifacts/SearchMethods_jar/SearchMethods.jar"
        },
        {
            "id": "course-registration-system-program",
            "name": "Course Registration System Program",
            "technologies": "Command Line · Jupyter Notebook · Python · SQLite",
            "date": "Dec 2019",
            "description": "A command line Jupyter Notebook program created for a database systems college course. The program allows the user to access a course registration system from the role of a student. The user may view available courses, enroll themselves in a course, withdraw themselves from a course, search for a course, and view their current enrollments. Information about students, enrollments, and courses are stored on-device in an SQLite database.",
            "imagePath": "img/project_course_registration_system_program.jpg",
            "codeUrl": "https://github.com/david-read-iii/Course-Registration-System",
            "projectUrl": ""
        }
    ];

    // Reference to the card container layout.
    var cardContainerLayout = document.getElementById("card-container");

    // Create a card for each project.
    for (var i = 0; i < projects.length; i++) {

        // Setup card layout.
        var outerCardLayout = document.createElement("div");
        outerCardLayout.setAttribute("class", "col");
        outerCardLayout.setAttribute("id", projects[i].id);

        var innerCardLayout = document.createElement("div");
        innerCardLayout.setAttribute("class", "card h-100");

        outerCardLayout.appendChild(innerCardLayout);

        // Setup card image.
        var imageLink = document.createElement("a");
        imageLink.setAttribute("href", projects[i].imagePath);
        imageLink.setAttribute("target", "_blank");
        imageLink.setAttribute("rel", "noreferrer noopener");

        var image = document.createElement("img");
        image.setAttribute("class", "card-img-top");
        image.setAttribute("src", projects[i].imagePath);

        innerCardLayout.appendChild(imageLink);
        imageLink.appendChild(image);

        // Setup card body.
        var cardBodyLayout = document.createElement("div");
        cardBodyLayout.setAttribute("class", "card-body p-3");

        var nameText = document.createElement("h5");
        nameText.setAttribute("class", "card-title mb-3");
        nameText.innerHTML = projects[i].name;

        var technologiesText = document.createElement("h6");
        technologiesText.setAttribute("class", "card-subtitle mb-2 text-muted");
        technologiesText.innerHTML = projects[i].technologies;

        var dateText = document.createElement("h6");
        dateText.setAttribute("class", "card-subtitle mb-3 text-muted");
        dateText.innerHTML = projects[i].date;

        var descriptionText = document.createElement("p");
        descriptionText.setAttribute("class", "mb-0");
        descriptionText.innerHTML = projects[i].description;

        innerCardLayout.appendChild(cardBodyLayout);
        cardBodyLayout.appendChild(nameText);
        cardBodyLayout.appendChild(technologiesText);
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
        if (projects[i].codeUrl != "") {
            var seeCodeButton = document.createElement("a");
            seeCodeButton.setAttribute("class", "btn btn-primary");
            seeCodeButton.setAttribute("type", "button");
            seeCodeButton.setAttribute("href", projects[i].codeUrl);
            seeCodeButton.setAttribute("target", "_blank");
            seeCodeButton.setAttribute("rel", "noreferrer noopener");
            seeCodeButton.innerHTML = "See Code";

            innerCardFooterLayout.appendChild(seeCodeButton);
        }

        if (projects[i].projectUrl != "") {
            var tryItButton = document.createElement("a");
            tryItButton.setAttribute("class", "btn btn-primary ms-3");
            tryItButton.setAttribute("type", "button");
            tryItButton.setAttribute("href", projects[i].projectUrl);
            tryItButton.setAttribute("target", "_blank");
            tryItButton.setAttribute("rel", "noreferrer noopener");
            tryItButton.innerHTML = "Try It";

            innerCardFooterLayout.appendChild(tryItButton);
        }

        // Add card to the card container.
        cardContainerLayout.appendChild(outerCardLayout);
    }

    // If the URL points to a particular card in the card container, wait for all images to load. Then, scroll to that card and highlight it.
    if (document.location.hash) {

        function imageLoaded() {
            imagesLoaded++;
            if (imagesLoaded == totalImages) {
                allImagesLoaded();
            }
        }

        function allImagesLoaded() {
            if (document.location.hash) {
                var selectedOuterCardLayout = document.getElementById(document.location.hash.substring(1));
                var selectedInnerCardLayout = selectedOuterCardLayout.getElementsByClassName("card")[0];
                var selectedOuterCardFooterLayout = selectedOuterCardLayout.getElementsByClassName("card-footer")[0];

                selectedOuterCardLayout.scrollIntoView();
                selectedInnerCardLayout.classList.add("card-highlight");
                selectedOuterCardFooterLayout.classList.add("card-footer-highlight");
            }
        }

        var imagesLoaded = 0;
        var totalImages = projects.length;

        $("img").each(function(idx, img) {
            $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
        });

    }
}