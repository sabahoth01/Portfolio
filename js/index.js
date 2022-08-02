

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


function open_modal(){
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("btn-modal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

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