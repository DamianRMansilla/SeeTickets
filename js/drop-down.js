
window.addEventListener("load", function(){
    let flag = document.querySelector(".country");
    let dropdown = document.querySelector(".drop-down");

    flag.addEventListener("mouseover", function(){
        dropdown.style.display = "block"
    })

    dropdown.addEventListener("mouseover", function(){
        dropdown.style.display = "block"
    })

    flag.addEventListener("mouseout", function(){
        dropdown.style.display = "none"
    })

    dropdown.addEventListener("mouseout", function(){
        dropdown.style.display = "none"
    })

})