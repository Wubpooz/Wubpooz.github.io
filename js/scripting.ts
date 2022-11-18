// Sticky navbar

window.addEventListener("scroll", ()=> {
    var header = $("navbar");
    header.classList.toggle("sticky",window.scrollY>0);
});