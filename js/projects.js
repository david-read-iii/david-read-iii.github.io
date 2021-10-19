window.onload = function() {

    // Array of project data.
    var projects = [{
            "name": "Developer Portfolio Website",
            "technologies": "HTML · CSS · Bootstrap · JavaScript",
            "date": "Oct 2021",
            "description": "A website created to serve as a developer portfolio. It lists professional information about me, a list of my notable projects, my resume, and my contact information. It utilizes Bootstrap CSS classes to enhance the user interface of the website.",
            "imagePath": "img/project_developer_portfolio_website.jpg",
            "codeUrl": "https://github.com/david-read-iii/david-read-iii.github.io",
            "projectUrl": ""
        },
        {
            "name": "Washington Tour Guide App",
            "technologies": "Android · XML · Java",
            "date": "Oct 2021",
            "description": "An Android app developed for a Udacity course. The app lists places of interest around my local city. The ListView, ArrayAdapter, and ArrayList objects are used to display a list of places of interest to the user. The TabLayout, ViewPager, FragmentPagerAdapter objects are used to separate the places of interest by category.",
            "imagePath": "img/project_washington_tour_guide_app.png",
            "codeUrl": "https://github.com/david-read-iii/Washington-Tour-Guide",
            "projectUrl": ""
        },
        {
            "name": "Who Wants to Be a Millionaire Game",
            "technologies": "Android · XML · Java",
            "date": "May 2021",
            "description": "An Android app created for a mobile computing college course. The app allows the user to play the famous game, Who Wants to Be a Millionaire. It presents multiple choice questions to the user until the user answers one incorrectly or the user becomes a millionaire.",
            "imagePath": "img/project_who_wants_to_be_a_millionaire_game.png",
            "codeUrl": "https://github.com/david-read-iii/Who-Wants-to-Be-a-Millionaire",
            "projectUrl": ""
        },
        {
            "name": "Course Registration Waiting List App",
            "technologies": "Android · XML · Java · SQLite",
            "date": "Apr 2021",
            "description": "An Android app created for a mobile computing college course. The app allows the user to manage a course registration waiting list. Entries are stored on-device in an SQLite database. The app allows the user to perform the typical CRUD operations on the database. Entries are displayed using a RecyclerView object. Entries are created and updated using AlertDialog objects. A FloatingActionButton object allows the user to summon the create entry AlertDialog object.",
            "imagePath": "img/project_course_registration_waiting_list_app.png",
            "codeUrl": "https://github.com/david-read-iii/Course-Registration-Waiting-List",
            "projectUrl": ""
        },
        {
            "name": "Quiz Game",
            "technologies": "Android · XML · Java · SQLite",
            "date": "Apr 2021",
            "description": "An Android app developed for a mobile computing college course. The app allows the user to log into the app and play a quiz game. The app allows top-level navigation using a NavigationDrawer object. The RulesFragment specifies the rules of the game, the QuizFragment presents multiple choice and multiple answer questions, the ResultsFragment maintains a list of past quiz attempts, and the ManageUserFragment allows the user to delete past quiz attempts or the user itself.",
            "imagePath": "img/project_quiz_game.png",
            "codeUrl": "https://github.com/david-read-iii/Quiz-Game",
            "projectUrl": ""
        },
        {
            "name": "Notes App",
            "technologies": "Android · XML · Java",
            "date": "Nov 2020",
            "description": "An Android app created to present at an MSU Computer Club workshop. It is a simple notes app. Each note has a title and description. The app allows the user to create a note, read notes, update a note, and delete a note. Notes are stored on the user's device using the SharedPreferences object.",
            "imagePath": "img/project_notes_app.png",
            "codeUrl": "https://github.com/david-read-iii/Notes",
            "projectUrl": ""
        },
        {
            "name": "Stopwatch App",
            "technologies": "Android · XML · Java",
            "date": "Oct 2020",
            "description": "An Android app developed to present at an MSU Computer Club workshop. The app is a simple stopwatch with controls to start, stop, and reset the time. It also has some basic styles applied to make the user interface look more appealing. Some source code is adapted from Code in Flow’s stopwatch tutorial, which can be found at https://codinginflow.com/tutorials/android/chronometer.",
            "imagePath": "img/project_stopwatch_app.png",
            "codeUrl": "https://github.com/david-read-iii/Stopwatch",
            "projectUrl": ""
        },
        {
            "name": "Restaurant Automation System App",
            "technologies": "Android · XML · Java · Firebase",
            "date": "Jan 2020 – May 2020",
            "description": "An Android app developed for a software engineering college course. The goal of this project was to build a full-stack system that automates the functions of a restaurant. The app allows employees to log into the system and manage the attributes of the restaurant. These attributes are stored in a Firebase database. The database models several aspects of the restaurant, such as the state of the employees, tables, orders, menu, and inventory. Further, the app records all actions an employee takes and saves them in a global log, visible to any user of the app.",
            "imagePath": "img/project_restaurant_automation_system_app.png",
            "codeUrl": "https://github.com/david-read-iii/Restaurant-Automation-System",
            "projectUrl": ""
        },
        {
            "name": "Tic-Tac-Toe Game",
            "technologies": "Java",
            "date": "Mar 2020",
            "description": "A command line Java program created for an artificial intelligence course. It applies Adversarial Search Problem to a game of Tic-Tac-Toe. The program has a user playing a simulated opponent. The user uses the command line to select their moves. The opponent uses the Minimax algorithm to select the best move to counter the user's moves. This results in all games ending in either a draw or a defeat for the user.",
            "imagePath": "img/project_tic_tac_toe_game.jpg",
            "codeUrl": "https://github.com/david-read-iii/Tic-Tac-Toe",
            "projectUrl": "https://github.com/david-read-iii/Tic-Tac-Toe/raw/master/out/artifacts/TicTacToe_jar/TicTacToe.jar"
        },
        {
            "name": "Shortest Path Problem Program",
            "technologies": "Java",
            "date": "Feb 2020",
            "description": "A command line Java program developed for an artificial intelligence college course. It applies the Shortest Path Problem to a graph of fictitious cities. It uses either Best First Search or Uniform Cost Search to provide the shortest path from one city in the graph to another.",
            "imagePath": "img/project_shortest_path_problem_program.jpg",
            "codeUrl": "https://github.com/david-read-iii/Shortest-Path-Problem",
            "projectUrl": "https://github.com/david-read-iii/Shortest-Path-Problem/raw/master/classes/artifacts/SearchMethods_jar/SearchMethods.jar"
        },
        {
            "name": "Course Registration System Program",
            "technologies": "Python · SQLite",
            "date": "Dec 2019",
            "description": "A command line Jupyter Notebook program created for a database systems college course. The program utilizes an SQLite database to represent a course registration system for students of some university. There are three main components of this program. Firstly, there is the database itself. It consists of a courses, an enrolled, and a students table. All tables appropriately use key constraints. For example, the courses and students table use primary keys to uniquely identify their entries. Also, the enrolled table uses foreign keys to associate each of their entries with exactly one course entry and exactly one student entry. Secondly, there are the typical CRUD functions found in every database manipulating program. Since this program is created with only the student role in mind, some of these functions are excluded. Thirdly, there are the functions that control the command line interface. Such functions allow the user to view their enrollments, view a list of courses, and enroll or withdraw themselves from a course.",
            "imagePath": "img/project_course_registration_system_program.jpg",
            "codeUrl": "https://github.com/david-read-iii/Course-Registration-System",
            "projectUrl": ""
        }
    ];

    // Construct inner HTML string for the card container.
    var cardContainerInnerHTML = "";
    for (var i = 0; i < projects.length; i++) {
        cardContainerInnerHTML += "<div class=\"col\">";
        cardContainerInnerHTML += "<div class=\"card h-100\">";
        cardContainerInnerHTML += "<a href=\"" + projects[i].imagePath + "\" target=\"_blank\" rel=\"noreferrer noopener\">";
        cardContainerInnerHTML += "<img class=\"card-img-top\" src=\"" + projects[i].imagePath + "\">";
        cardContainerInnerHTML += "</a>";
        cardContainerInnerHTML += "<div class=\"card-body p-3\">";
        cardContainerInnerHTML += "<h5 class=\"card-title mb-3\">" + projects[i].name + "</h5>";
        cardContainerInnerHTML += "<h6 class=\"card-subtitle mb-2 text-muted\">" + projects[i].technologies + "</h6>";
        cardContainerInnerHTML += "<h6 class=\"card-subtitle mb-3 text-muted\">" + projects[i].date + "</h6>";
        cardContainerInnerHTML += "<p class=\"mb-0\">" + projects[i].description + "</p>";
        cardContainerInnerHTML += "</div>";
        cardContainerInnerHTML += "<div class=\"card-footer p-3\">";
        cardContainerInnerHTML += "<div class=\"float-end\">";
        if (projects[i].codeUrl != "") {
            cardContainerInnerHTML += "<a class=\"btn btn-primary\" type=\"button\" href=\"" + projects[i].codeUrl + "\" target=\"_blank\" rel=\"noreferrer noopener\">See Code</a>";
        }
        if (projects[i].projectUrl != "") {
            cardContainerInnerHTML += "<a class=\"btn btn-primary ms-3\" type=\"button\" href=\"" + projects[i].projectUrl + "\" target=\"_blank\" rel=\"noreferrer noopener\">See Project</a>";
        }
        cardContainerInnerHTML += "</div>";
        cardContainerInnerHTML += "</div>";
        cardContainerInnerHTML += "</div>";
        cardContainerInnerHTML += "</div>";
    }

    // Set inner HTML for the card container.
    var cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = cardContainerInnerHTML;
}