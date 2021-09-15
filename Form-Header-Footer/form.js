// hiệu ứng khi scroll thanh header
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").style.position = "fixed";
        document.getElementById("navbar").style.paddingTop = "0px";
        document.getElementById("navbar").style.paddingBottom = "0px";
        document.getElementById("navbar").style.backgroundColor = "rgb(255, 255, 255)";
        // document.getElementById("LogoHeader").style.width = "76px";
        // document.getElementById("LogoHeader").style.height = "74px";
    }
    else {
        document.getElementById("header").style.position = "relative";  
        document.getElementById("navbar").style.paddingTop = "1px";
        document.getElementById("navbar").style.paddingBottom = "2px";
        document.getElementById("navbar").style.backgroundColor = "rgb(255, 255, 255)";  
        // document.getElementById("LogoHeader").style.width = "82px";
        // document.getElementById("LogoHeader").style.height = "80px";
    }
}


//hiệu ứng phần buy-medicine footer\
//  var x = function(){
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//       document.getElementById("Minerals").style.display = "block";
//  };
//  if(document.body.scrollTop == 0){
//       setTimeout(x,2000);
//  }


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

