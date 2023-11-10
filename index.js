var text = document.querySelector("h5")

var add = document.querySelector("#add")
var removef = document.querySelector("#remove")

add.addEventListener("click", function(){
    text.innerHTML = "Request accepted"
    text.style.color ="green"
})

removef.addEventListener("click", function(){
    text.innerHTML = "Removed!"
    text.style.color = "skyblue"
})