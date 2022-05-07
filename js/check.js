let checkbox = document.querySelectorAll(".event-checkbox");
let li = document.getElementsByClassName("li-results");



for(let i = 0; i < checkbox.length; i++){
    checkbox[i].addEventListener("input", ()=>{
        if(checkbox[i].checked == true){
            for(let j = 0; j < li.length; j++){
                if((li[j].classList.contains(checkbox[i].name))){
                    li[j].style.display = ""}
                    else {
                        li[j].style.display = "none"
                    }}
        } else {
            for(let j = 0; j < li.length; j++){
                li[j].style.display = ""
            }}   
    })
}

