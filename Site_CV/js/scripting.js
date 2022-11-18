
/*
window.addEventListener("scroll", function () {
    var header = document.getElementById("navbar");
    //header.classList.toggle("sticky", window.scrollY > 0);
    if (header.style.position == "static" && window.scrollY>0){
        header.style.position = "sticky";
    }
});
*/

// Sticky navbar
window.onscroll = function() {myFunction()};
var header = document.getElementById('navbar');

var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

  

// Toggle sidebar
$('.menubtn').on('click', function() {
    $('.sidebar-content').toggleClass('sideshow');
});
$('.resume').on('click', function() {
    $('.sidebar-content').removeClass('sideshow');
});



//function toggleSide(){
    //console.log("0");
    //$(this).toggleClass('sideshow');
    //document.getElementById("sidebar").style.display = "block";
    //if (document.getElementById("sidebar").style.width = "250px"){console.log("2");document.getElementById("sidebar").style.width = "0";}
    //else {console.log("2");document.getElementById("sidebar").style.width = "250px"}
  //}
