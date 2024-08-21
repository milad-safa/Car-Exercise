let search_box = document.querySelector(".search-box")
let search_input = document.querySelector(".search-input")

let flag = true

search_input.addEventListener("focus", () => {
    search_box.style.backgroundColor = "#cfd7ff"
})
search_input.addEventListener("blur", () => {
    search_box.style.backgroundColor = "#e9ecff"
})