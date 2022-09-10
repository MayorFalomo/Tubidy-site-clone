const dropBar = document.querySelector('.dropBar')
const mainLink = document.querySelector(".mainLink")
const searchMenu = document.querySelector(".searchMenu")

dropBar.addEventListener("click", () => {
    dropBar.classList.toggle("active")
    mainLink.classList.toggle("active")
    document.getElementById("searchBar").style.display = "none"
})

document.querySelectorAll(".navItems").forEach(n => n.addEventListener("click", () => {
    dropBar.classList.remove("active");
    mainLink.classList.remove("active");
    document.getElementById("searchBar").style.display = "none";
}))