var navMenuAnchorTags = document.querySelectorAll('.nav-menu div a');
var navIconDropdownAnchorTags = document.querySelectorAll('.dropdown-content a');
var interval;
// Scroll to respective sections by navigation
for(var i=0; i<navMenuAnchorTags.length; i++){

    // nav bar list scroll
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSect = document.getElementById(targetSectionID);
        interval= setInterval(scrollVertically, 20, targetSect);
    });

    // Burger DropDOwn scroll 
     navIconDropdownAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSect = document.getElementById(targetSectionID);
        interval= setInterval(scrollVertically, 20, targetSect);
    });
}

function scrollVertically(targetSect){
    var targetSectCoordinates = targetSect.getBoundingClientRect();
    if(targetSectCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,60);
}

// Skills Section - skill animation ######################################################################
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.querySelector('.skills-display');
var animationDone = false;

function initializeBars() {
    for (var bar of progressBars) {
        bar.style.width = '0%';
    }
}
// checking scroll for sill section's position to initiate animation
function checkScroll() {
    var containerTop = skillsContainer.getBoundingClientRect().top;
    var containerBottom = skillsContainer.getBoundingClientRect().bottom;

    if (!animationDone && containerTop < window.innerHeight && containerBottom >= 0) {
        animationDone = true;
        for (var bar of progressBars) {
            var skillLevel = bar.getAttribute('data-skill-level');
            animateProgressBar(bar, skillLevel);
        }
    } else if (containerBottom < 0 || containerTop > window.innerHeight) {
        animationDone = false;
        initializeBars();
    }
}

// perform animation of skill section
function animateProgressBar(bar, targetWidth) {
    var currentWidth = 0;
    var targetWidthInt = parseInt(targetWidth);

    var interval = setInterval(function () {
        if (currentWidth >= targetWidthInt) {
            clearInterval(interval);
        } else {
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }
    }, 10);
}

initializeBars();
window.addEventListener('scroll', checkScroll);



// ************************************************************************
// Burgger icon dropdown click control

document.addEventListener('mouseup', function (e) {
    var dropdown = document.getElementById('nav-dropdown');
    var burgerIcon = document.querySelector('.fa-burger');

    if (!dropdown.contains(e.target) && !burgerIcon.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

function toggleDropdown() {
    var dropdown = document.getElementById('nav-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}


// *************************************************************************
// Profile image popUp

function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// *************************************************************************
// JavaScript for carousel functionality in Portfolio for mobile screen
const projects = document.querySelectorAll('.projects');
let currentIndex = 0;

function showProject(index) {
    projects.forEach((project, i) => {
        if (i === index) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}

// Show the initial project
showProject(currentIndex);

// Previous button functionality
document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
});

// Next button functionality
document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
});

