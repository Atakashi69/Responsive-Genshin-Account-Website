function difficultyClick(element) {
    var activeButton = document.querySelector(".buttons").querySelector(".active");

    activeButton.classList.toggle("active");
    element.classList.toggle("active");

    var mapImage = document.querySelector(".main").querySelector("img");
    mapImage.src = "images/maps/" + element.innerText + ".png";
}