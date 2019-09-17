function animateElement() {
    var scrolled = window.scrollY;//how much user has scrolled
    
    //global function for transitions on scroll
    function addTransition(element, animation) {
        var elementOffset = element.offsetTop;
        
        if (scrolled > (elementOffset - scrolled / 1.2)) {
        element.style.transform = animation;
        }
    }
    
    //global function for changing opacity on scroll
    function changeOpacity(element, opacity) {
        var elementOffset = element.offsetTop;
        
        if (scrolled > (elementOffset - scrolled / 1.2)) {
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
    
    //animate about section
    var ourTrade = document.querySelector(".our-trade");
    addTransition(ourTrade, "translateX(0)");
    changeOpacity(ourTrade, "1");
    
    var why = document.querySelector(".why");
    addTransition(why, "translateX(0)");
    changeOpacity(why, "1");
    
    var howWeStarted = document.querySelector(".how-we-started");
    addTransition(howWeStarted, "translateX(0)");
    changeOpacity(howWeStarted, "1");
    
    var quote = document.querySelector(".quote");
    addTransition(quote, "translateX(0)");
    changeOpacity(quote, "1");
    
    //enlarge contact section text
    var contactText = document.getElementById("contactText");
    addTransition(contactText, "scale(1, 1)");
    changeOpacity(contactText, "1");
}

window.addEventListener("scroll", animateElement, false);

//smooth scroll
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});
