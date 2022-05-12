const darkmode = document.getElementById('darkmode');
const body = document.getElementById('section');

darkmode.addEventListener('change', () => {
       //change the color.
       document.body.classList.toggle('dark');
});
$(document).ready(function(){
       $(window).scroll(function () {
               if ($(this).scrollTop() > 50) {
                   $('#back-to-top').fadeIn();
               } else {
                   $('#back-to-top').fadeOut();
               }
           });
           // scroll body to 0px on click
           $('#back-to-top').click(function () {
               $('body,html').animate({
                   scrollTop: 0
               }, 400);
               return false;
           });
   });