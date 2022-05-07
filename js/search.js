let searchInput = document.querySelector(".g-site-search-term");

searchInput.addEventListener("input", (e)=>{
    let value = e.target.value.toUpperCase()
    console.log(value)

    let li = document.getElementsByClassName("li-results");
    let text1 = document.getElementsByClassName("first-line");
    let text2 = document.getElementsByClassName("second-line");
    let text3 = document.getElementsByClassName("third-line")

    for(let i = 0; i < li.length; i++){
        if(text1[i].innerText.toUpperCase().includes(value) || text2[i].innerText.toUpperCase().includes(value)
         || text3[i].innerText.toUpperCase().includes(value)){
            li[i].style.display = ""}
            else {
                li[i].style.display = "none"
            }
    }
})