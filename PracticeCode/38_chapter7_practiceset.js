
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "blue";

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";

document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.color = "blue";
});
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "yellow";
});