const input = document.querySelector("textarea");
const select = document.querySelector("select");

window.addEventListener("load", (e)=>{
    if(localStorage.getItem("data")){
        input.value = localStorage.getItem("data");
    }
    // set theme color from local storage
    input.className  = localStorage.getItem("theme");
});

input.addEventListener("focusout", (e)=>{
    localStorage.setItem("data", input.value);
});

select.addEventListener("change", (e)=>{
    input.className = select.value;
    // save theme value to local storage
    localStorage.setItem("theme", select.value)
})




