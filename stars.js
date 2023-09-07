window.onload = function() {
    document.getElementById("mainStyleSheet").setAttribute("href", localStorage.getItem("storageFile"));

    var styleToggle = document.getElementById("style-toggle-card");
    styleToggle.addEventListener("click", toggleStyleSheet);

    // document.querySelector("style-toggle-card").addEventListener("click", toggleStyleSheet);
    const nightSky = document.querySelector(".night-sky");
    const textContainer = document.querySelector(".text.first-text");

    // generate a random star with a random location and set animation delay
    function createRandomStar() {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 3.0}s`;
        return star;
    }

    // function to populate the night sky with stars
    function generateStars() {
        for (let i = 0; i < 300; i++) {
            const star = createRandomStar();
            nightSky.appendChild(star);
        }
    }

    // storing the various print statments in different languages
    const p = "\"Pranav Civi\"";
    const texts = [`console.log(${p});`, `System.out.println(${p});`, `print(${p})`, `std::cout << ${p};`, `printf(${p});`, `System.Console.WriteLine(${p});`];
    const text = texts[Math.floor(Math.random() * 6)];
    let charIndex = 0;

    // function to type out the print statement
    function type() {
        if (charIndex < text.length) {
            textContainer.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 75);
        }
    }

    // calling the functions
    generateStars();
    type();
    
};

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



