$(document).ready(function(){
   //  sticky menu
   $(".js-service-section").waypoint(function(direction){
      if(direction=="down"){
         $("nav").addClass("sticky");
      } else{
         $("nav").removeClass("sticky");
      }
   });

   // mixitup
   var mix = mixitup('.container');

   // smooth scroll
   $("a").on('click', function(event){
      
      if(this.hash !== ""){
         event.preventDefault();
         var hash = this.hash;

         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function(){

            window.location.hash = hash;
         });
      }

   });
});

function openNav(){
   document.getElementById("myNav").style.width="100%";
}
function closenav(){
   document.getElementById("myNav").style.width="0";
}