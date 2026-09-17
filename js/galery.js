        /* --- KÉPGALÉRIA LOGIKA --- */
        let slideIndex = 1;
        function changeSlide(n) { showSlides(slideIndex += n); }
        function showSlides(n) {
            let slides = document.getElementsByClassName("gallery-slides");
            if (n > slides.length) { slideIndex = 1 }    
            if (n < 1) { slideIndex = slides.length }
            for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
            if (slides.length > 0) { slides[slideIndex-1].style.display = "block"; }
        }
        document.addEventListener("DOMContentLoaded", function() { showSlides(slideIndex); });