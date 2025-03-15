const input = document.querySelector("textarea");
const select = document.querySelector("select");

window.addEventListener("load", (e)=>{
    if(localStorage.getItem("data")){
        input.value = localStorage.getItem("data");
    }
});

input.addEventListener("focusout", (e)=>{
    localStorage.setItem("data", input.value);
});

select.addEventListener("change", (e)=>{
    console.log(select.value);
    input.className = select.value;
    console.log(input);
})




