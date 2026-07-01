// تأثير الضغط مثل تطبيقات iPhone

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousedown", () => {
    card.style.transform = "scale(0.96)";
});

card.addEventListener("mouseup", () => {
    card.style.transform = "";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "";
});

card.addEventListener("touchstart", () => {
    card.style.transform = "scale(0.96)";
});

card.addEventListener("touchend", () => {
    card.style.transform = "";
});

});


// ظهور البطاقات واحدة تلو الأخرى

window.addEventListener("load", () => {

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(30px)";

setTimeout(()=>{

card.style.transition="all .5s ease";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*120);

});

});