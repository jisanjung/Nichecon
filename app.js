function animateElement() {
    var scrolled = window.scrollY;//how much user has scrolled
    
    //global function for transitions on scroll
    function addTransition(element, animation) {
        var elementOffset = element.offsetTop;
        
        if (scrolled > (elementOffset - scrolled / 1.5)) {
        element.style.transform = animation;
        }
    }
    
    //global function for changing opacity on scroll
    function changeOpacity(element, opacity) {
        var elementOffset = element.offsetTop;
        
        if (scrolled > (elementOffset - scrolled / 1.5)) {
        element.style.opacity = opacity;
        }
    }
    
    //flip "hello"
    var hello = document.getElementById("hello");
    addTransition(hello, "rotateX(0)");
    
    //move greeting text
    var greetingText = document.getElementById("greetingText");
    addTransition(greetingText, "translateX(0)");
    
    //slide ideology text -right
    var slideRight = document.getElementsByClassName("slide-right");
    for (var i = 0; i < slideRight.length; i++) {
        addTransition(slideRight[i], "translateX(0)");
    }
    
    //flip ideology icons 
    var ideologyIcons = document.getElementsByClassName("ideology-icon");
    for (var i = 0; i < ideologyIcons.length; i++) {
        addTransition(ideologyIcons[i], "rotateX(0)");
    }
    
    //animate service cards
    var serviceCards = document.getElementsByClassName("services-cards");
    for (var i = 0; i < serviceCards.length; i++) {
        addTransition(serviceCards[i], "scale(1, 1)");
        changeOpacity(serviceCards[i], "1");
    }
}

window.addEventListener("scroll", animateElement);