const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); //be sure to notice the name change, it's not 'show' here
    hamButton.classList.toggle("open");
});

document.getElementById("last-modified").innerHTML = document.lastModified;
document.getElementById("current-year").innerHTML = new Date().getFullYear();