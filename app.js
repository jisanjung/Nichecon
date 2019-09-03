function animateElement() {
    var scrolled = window.scrollY;//how much user has scrolled
    
    //different elements will have different functions
    
    //rotate "hello" function
    function flipHello(element, animation) {
        var elementOffset = element.offsetTop;//distance from top of window to top of element
        
        if (scrolled > (elementOffset - scrolled)) {
        element.style.transform = animation;
        }
    }
    var hello = document.getElementById("hello");
    flipHello(hello, "rotateX(0)");//function call
}

window.addEventListener("scroll", animateElement);