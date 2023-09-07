document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mainStyleSheet").setAttribute("href", localStorage.getItem("storageFile"));

    var styleToggle = document.getElementById("style-toggle-card");
    styleToggle.addEventListener("click", toggleStyleSheet);

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

function toggleStyleSheet(){
    var element = document.getElementById("mainStyleSheet");
    var currStyle = element.getAttribute("href");
    var newFile;
    if(currStyle == "./stars.css"){
        newFile = "./switched.css";
    }
    else{
        newFile = "./stars.css";
    }
    element.setAttribute("href", newFile);
    // console.log(document.getElementById("mainStyleSheet").getAttribute("href"))
    localStorage.setItem("storageFile", newFile);
    console.log(localStorage.getItem("storageFile"));
}
