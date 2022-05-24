

var t = document.getElementById('MCimg1');
t.addEventListener('click', function(e){

  document.getElementById("clickme").style.opacity = "0";

    element=document.getElementById("MCimg1");
    element.classList.add("fadeout");

    pocketball=document.getElementById("closeball");
    pocketball.classList.add("takeball");


    setTimeout(function action2() {
      var jbRandom = Math.random();
      var number = Math.floor(jbRandom * 10);
   
     if (number == 0) document.getElementById("a1").style.opacity = "1";
     if (number == 1) document.getElementById("a2").style.opacity = "1";
     if (number == 2) document.getElementById("a3").style.opacity = "1";
     if (number == 3) document.getElementById("a4").style.opacity = "1";
     if (number == 4) document.getElementById("a5").style.opacity = "1";
     if (number == 5) document.getElementById("a6").style.opacity = "1";
     if (number == 6) document.getElementById("a7").style.opacity = "1";
     if (number == 7) document.getElementById("a8").style.opacity = "1";
     if (number == 8) document.getElementById("a9").style.opacity = "1";
     if (number == 9) document.getElementById("a10").style.opacity = "1";
     
   }, 2000);
   
   setTimeout(function action3() {
     document.getElementById("closeball").style.display = "none";
   }, 2000);
   
   setTimeout(function action4() {
     document.getElementById("retry").style.opacity = "1";
   }, 3000);
   
});

