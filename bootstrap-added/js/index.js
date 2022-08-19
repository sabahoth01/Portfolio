//responsive nav-container bar
function icon_reveal() {
    let x = document.getElementById("navbar");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}

//content fade on scrolling
function fade() {
    let fadeInOut = document.querySelectorAll(".about-me__text");

    for (let i = 0; i < fadeInOut.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = fadeInOut[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            fadeInOut[i].classList.add("active");
        } else {
            fadeInOut[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", fade);

//modal
function open_modal(){
        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the button that opens the modal
        let btn = document.getElementById("btn-modal");

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
                if (event.target === modal) {
                modal.style.display = "none";
            }
        }
}