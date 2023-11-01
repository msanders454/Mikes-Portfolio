//Keeps pages hidden until button is clicked
$(hideProjectPages);

function hideProjectPages(){
    $('.js-project-container').hide();
    $('.js-contact-container').hide();
}

//   function activates hamburger page

function myHamburger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//When user clicks the Projects button, page rerendors with project information

$('.projects').on('click', function() {
    $('.home-wrapper').hide();
    $('.js-contact-container').hide();
    renderProjects();
    $('.js-project-container').show();
    $('html,body').scrollTop(0);
});

function renderProjects(){
    let projects = 
    `<div class="project-div">
        <h1 class="project-page">Projects</h1>

        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <div class="tech"><i class="fab fa-css3-alt"></i></div>
                <div class="tech"><i class="fab fa-react"></i></div>
                <div class="tech"><i class="fab fa-node-js"></i></div>
            </div>
        </section>



        <h2 class="project-title">Pong</h2>
            
        <div class="project-image-wrapper">
            <img src="images/pong.PNG" alt="Pong SCreen" class="project-image">
        </div>
        <p class="description">
            This is the recreation of the famous video game pong. This application uses only JavaScript 
            to create the game. Users can change the difficulty with the help of event listeners.

        </p>
        <div class = "box">
        <div class="project-links">
            <a href="https://pong-umber.vercel.app/" target="_blank">Visit Site</a>
            <span>|</span>
            <a href="https://github.com/msanders454/pong" target="_blank">Source Code</a>
        </div>
        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <div class="tech"><i class="fab fa-html5"></i></div>
                <div class="tech"><i class="fab fa-css3-alt"></i></div>
                <div class="tech"><i class="fab fa-js-square"></i></div>
                <div class="tech"><img src="images/jQuery.png" class="tech-logo"></div>
            </div>
        </section>
        </div>




        <h2 class="project-title">Time Capsule</h2>
            
        <div class="project-image-wrapper">
            <img src="images/Capsules.png" alt="Time Capsule Main Screen" class="project-image">
        </div>
        <p class="description">
            Time Capsule is a full-stack application that allows users to create an account and 
            save memories in a time capsule. Users can save notes or pictures inside a capsules. The app
            uses GET, POST and DELETE commands to interact with the Time-Capsule server. The server uses
            moment.js in order to keep the time periods local.
        </p>
        <div class = "box">
        <div class="project-links">
            <a href="https://time-capsule-client.now.sh/" target="_blank">Visit Site</a>
            <span>|</span>
            <a href="https://github.com/msanders454/TimeCapsule-Client" target="_blank">Source Code</a>
        </div>
        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <div class="tech"><i class="fab fa-css3-alt"></i></div>
                <div class="tech"><i class="fab fa-react"></i></div>
                <div class="tech"><i class="fab fa-node-js"></i></div>
                <div class="tech"><img src="images/postgres.png" class="tech-logo"></div>
            </div>
        </section>
        </div>

        <h2 class="project-title">The RedZone</h2>
            
        <div class="project-image-wrapper">
            <img src="images/RedZone.png" alt="Red-Zone Main Screen" class="project-image">
        </div>
        <p class="description">
            RedZone is a full-stack application that allows users to create an account and 
            record thier daily expenses. Users must watch out how much they spend in order to avoid the 
            redzone. The app uses GET, POST, DELETE and PATCH commands to interact with the RedZone server. 
            The app React Context and order to avoid prop drilling information travels between 
            components.
        </p>
        <div class = "box">
        <div class="project-links">
            <a href="https://red-zone-client.now.sh/" target="_blank">Visit Site</a>
            <span>|</span>
            <a href="https://github.com/msanders454/Red-Zone-Client" target="_blank">Source Code</a>
        </div>
        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <div class="tech"><i class="fab fa-css3-alt"></i></div>
                <div class="tech"><i class="fab fa-react"></i></div>
                <div class="tech"><i class="fab fa-node-js"></i></div>
                <div class="tech"><img src="images/postgres.png" class="tech-logo"></div>
            </div>
        </section>
        </div>
    
        <h2 class="project-title">Marvel-Dex</h2>
            
        <div class="project-image-wrapper">
            <img src="images/Marvel.png" alt="Marvel-Dex Spider-Man page" class="project-image">
        </div>
        <p class="description">
            Marvel-Dex is a Pokedex like app the displays information on your favorite
            Marvel characters. Users type and a Marvel character and connects to Marvel's
            API. Using AJAX, the character's information is displayed.
        </p>
        <div class = "box">
        <div class="project-links">
            <a href="https://msanders454.github.io/Marvel-API/" target="_blank">Visit Site</a>
            <span>|</span>
            <a href="https://github.com/msanders454/Marvel-API" target="_blank">Source Code</a>
        </div>
        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <div class="tech"><i class="fab fa-html5"></i></div>
                <div class="tech"><i class="fab fa-css3-alt"></i></div>
                <div class="tech"><i class="fab fa-js-square"></i></div>
                <div class="tech"><img src="images/jQuery.png" class="tech-logo"></div>
            </div>
        </section>
        </div>

        <h2 class="project-title">Smash Bros. Quiz App</h2>
            
        <div class="project-image-wrapper">
            <img src="images/smashquiz.png" alt="Smash Bros. Quiz App" class="project-image">
        </div>
        <p class="description">
            This is a fun quiz app used to test the knowledge on Smash bros 
            characters. There are 10 multiple choice questions. At the end, 
            viewers will see their results and the option to try again.
            I built this app for Smash Bros. fans to test their knowledge 
            on the game.
        </p>
        <div class = "box">
        <div class="project-links">
            <a href=https://msanders454.github.io/Thinkful-Quiz-App/" target="_blank">Visit Site</a>
            <span>|</span>
            <a href="https://github.com/msanders454/Thinkful-Quiz-App/tree/master" target="_blank">Source Code</a>
        </div>
        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <div class="tech"><i class="fab fa-html5"></i></div>
                <div class="tech"><i class="fab fa-css3-alt"></i></div>
                <div class="tech"><i class="fab fa-js-square"></i></div>
                <div class="tech"><img src="images/jQuery.png" class="tech-logo"></div>
            </div>
        </section>
        </div>
    
    </div>
    <br>
    <br>
    <footer class="copyright">
        <h1>Website by Mike Sanders</h1>
        <p>&copy; 2023</p>
    </footer>`;

    $('.js-project-container').html(projects);
}

//When user clicks on contact, page rerendors with contact information

$('.contact').on('click', function(){
    $('.home-wrapper').hide();
    $('.js-project-container').hide();
    renderContact();
    $('.js-contact-container').show();
    $('.js-contact-container').toggleClass('height-100');
    $('html,body').scrollTop(0);
});

function renderContact(){
    let contactDiv = `<div class="contact-div">
    <h1 class="contact-page">Contact</h1>
    <p class="c-description">Let's work together. If you would like to get in contact with me. You can reach me 
    in any of the contacts below</p>


    <div class= "contact-row">
    <div class="row"><i class="far fa-envelope"></i><p><a href="mailto:mikesanderspsu@gmail.com" target="_blank" class="contact-info">mikesanderspsu@gmail.com</a></p></div>
    <div class="row"><i class="fas fa-mobile-alt"></i><p class="contact-info">(215)-290-7164</p></div>
    <div class="row"><i class="fab fa-linkedin"></i><p><a href="https://www.linkedin.com/in/michael-s-sanders-ii/" target="_blank" class="contact-info">LinkedIn: michael-s-sanders-ii </a></p></div>
    <div class="row"><i class="fab fa-github-square"></i><p><a href="https://github.com/msanders454" target="_blank" class="contact-info">GitHub: msanders454</a></p></div>
    <div class="row"><i class="fab fa-twitter-square"></i><p><a href="https://twitter.com/DA_MuffinMan_" target="_blank" class="contact-info">Twitter: DA_MuffinMan</a></p></div>
    </div>
    </div>`

    $('.js-contact-container').html(contactDiv);
}

//When user clicks on About Me link, returns to main page. Projects and Contacts become hidden

$('.about-me').on('click', function(){
    $('.js-project-container').hide();
    $('.js-contact-container').hide();
    $('.home-wrapper').show();
});
