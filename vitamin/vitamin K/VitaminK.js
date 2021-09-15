// hiệu ứng khi scroll thanh header
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    var x = 800;
    if ( (document.body.scrollTop >= 0 && document.body.scrollTop <= 500)  || (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= 500) ) 
    {
        document.getElementById("header").style.position = "none";
        document.getElementById("navbar").style.paddingTop = "0px";
        document.getElementById("navbar").style.paddingBottom = "0px";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    }
    else {
      document.getElementById("header").style.position = "fixed";
      document.getElementById("navbar").style.paddingTop = "0px";
      document.getElementById("navbar").style.paddingBottom = "0px";
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.9)";  
    }
}

// hiệu ứng ảnh đầu
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  // for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";  
  // }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
    // slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
}

// hiệu ứng dưới footer
function BuyMedicine(){
    document.getElementsByClassName("menu-buy").className += " " + "show";
    document.getElementsByClassName("menu-buy-child").className += " " + "show";
    
    // var x = function(){
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    //     document.getElementById("Minerlas").style.display = "block";
    // };
    // if()
    // {

    // }
}

function redirect() {
  var input = document.getElementById('userInput').value.toLowerCase();
   switch(input) {
      case 'covid':
          // alert("hello");
          location.replace("./../../SearchBenh/Covid/Covid.html");
          return false;
          //window.location = '../contact/contact.html';
        break; 
      case 'covid19':
          window.location.replace("./../../SearchBenh/Covid/Covid.html");
          return false;
          break;
      case 'COVID':
          location.replace("./../../SearchBenh/Covid/Covid.html");
          return false;
          break; 
      case 'sốt xuất huyết':
          location.replace("./../../SearchBenh/SotXuatHuyet/SXHuyet.html");
          return false;
          break; 
      case 'SỐT XUẤT HUYẾT':
            location.replace("./../../SearchBenh/SotXuatHuyet/SXHuyet.html");
            return false;
            break; 
      case 'sot xuat huyet':
            location.replace("./../../SearchBenh/SotXuatHuyet/SXHuyet.html");
            return false;
            break; 
      case 'SOT XUAT HUYET':
            location.replace("./../../SearchBenh/SotXuatHuyet/SXHuyet.html");
            return false;
            break; 

      default:
           alert("Không có bệnh này. Mời bạn nhập lại.")
           break;
   }
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             top: document.querySelector(this.getAttribute('href')),
//             behavior: 'smooth',
//             left: 0,
//         });

        
//     });
// });


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -185
        }, 1500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


//button scroll smooth
$(document).ready(function(){
  $("#top").hide();
  $(function toTop() {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 40 || document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
              $('#top').fadeIn();
              document.getElementById("myBtn").style.display = "block";
          } else {
              $('#top').fadeOut();
              document.getElementById("myBtn").style.display = "none";
          }
      });

      $('#top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 1000);
          return false;
      });
  });         
});


// //button scrollTop        
// window.onscroll = function() {scrollFunction()};
        
//         function scrollFunction() {
//             if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//                 document.getElementById("myBtn").style.display = "block";
//             } else {
//                 document.getElementById("myBtn").style.display = "none";
//             }
//         }
        
//         // When the user clicks on the button, scroll to the top of the document
//         function topFunction() {
//             document.body.scrollTop = 0;
//             document.documentElement.scrollTop = 0;
//         }