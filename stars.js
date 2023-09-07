document.addEventListener("DOMContentLoaded", function () {

    const nightSky = document.querySelector(".night-sky");

    // generate a random star with a random location and set animation delay
    function createRandomStar() {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        return star;
    }

    // function to populate the night sky with stars
    function generateStars() {
        for (let i = 0; i < 300; i++) {
            const star = createRandomStar();
            nightSky.appendChild(star);
        }
    }

    // calling the functions
    generateStars();
    
});
