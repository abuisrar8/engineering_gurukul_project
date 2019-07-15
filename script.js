/*var s = 1 ;
var a = 0 ; 

            function conferm()
            {
                location.replace("file:///C:/Users/user/Desktop/engineering%20gurukul%20project/index.html")
               a=s;
            }

function check() {
        if (a==s)
            {
                window.location.assign("file:///C:/Users/user/Desktop/engineering%20gurukul%20project/contact.html");
              window.alert("you need to sign in first !!");
                
            }
    
    }*/

var s = false ;

               


function fn()
{
    s = true;
}
//login form


 $(document).ready(function()
                 {
 var arrow = $(".arrowup");
                  var form = $(".login-form"); 
                  var sts = false;
     var a1 =document.getElementById("open");
     var b2 =document.getElementById("lock")
$("#login").click(function(event)
                 {
    event.preventDefault();
    if(sts == false)
        {
             
            arrow.fadeIn();
            form.fadeIn();
            sts = true;
            s = true;
            document.getElementById("login").innerHTML="close";
            

        }
    else
        {
             arrow.fadeOut();
            form.fadeOut();
            sts = false;
            document.getElementById("login").innerHTML="signed in";
           document.getElementById("lock").innerHTML=a1;
        }
   
}) 
                  })



function simplecodebuttoncode()  
  {
      if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {
              
          
document.getElementById("simplecode").src='simplecoderun.png';
          }
      
    
    
}
function simplecodebuttonshow()  
  {
      if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {
              
          
document.getElementById("simplecode").src='simplecode.png';
          }
      
    
    
}

$(document).ready(function()
                 {
 var sts = false;
                  var b = $(".img00"); 
    var c =$(".aimg00")
                  
$("#simplecodebtn").click(function(event)
                 {
   
    
   if(s ==  true){ if(sts == false)
        {
             
            
           b.fadeOut();
            c.fadeIn();
            sts = true;
            
            document.getElementById("btnlabel").innerHTML="show code";
            
       
        }
    else
        {
           c.fadeOut();
          b.fadeIn();
            sts = false;
            document.getElementById("btnlabel").innerHTML="get code";
        }
                 }
    else{
       window.alert("you need to sign in !!!");
    }
   
}) 
                  })


//images


function img1()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var myImg = document.getElementById("img01");
        var currWidth = myImg.clientWidth;
              var curHeight = myImg.clientHeight;
              myImg.style.width = (currWidth + (800*currWidth)/100) + "px";
              myImg.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img01.png';
               size = false;
           }

          }
     
}
function img2()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var myimg = document.getElementById("img02");
        var currWidth = myimg.clientWidth;
              var curHeight = myimg.clientHeight;
              myimg.style.width = (currWidth + (800*currWidth)/100) + "px";
              myimg.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img02.png';
               size = false;
           }

          }
     
}
function img3()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg = document.getElementById("img03");
        var currWidth = MyImg.clientWidth;
              var curHeight = MyImg.curHeight;
              MyImg.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img03.png';
               size = false;
           }

          }
     
}
function img04()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg04 = document.getElementById("img04");
        var currWidth = MyImg04.clientWidth;
              var curHeight = MyImg04.curHeight;
              MyImg04.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg04.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img04.png';
               size = false;
           }

          }
     
}
function img05()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg05 = document.getElementById("img05");
        var currWidth = MyImg05.clientWidth;
              var curHeight = MyImg05.curHeight;
              MyImg05.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg05.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img05.png';
               size = false;
           }

          }
     
}function img06()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg06 = document.getElementById("img06");
        var currWidth = MyImg06.clientWidth;
              var curHeight = MyImg06.curHeight;
              MyImg06.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg06.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img06.png';
               size = false;
           }

          }
     
}function img07()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg07 = document.getElementById("img07");
        var currWidth = MyImg07.clientWidth;
              var curHeight = MyImg07.curHeight;
              MyImg07.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg07.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img07.png';
               size = false;
           }

          }
     
}function img08()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg08 = document.getElementById("img08");
        var currWidth = MyImg08.clientWidth;
              var curHeight = MyImg08.curHeight;
              MyImg08.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg08.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img08.png';
               size = false;
           }

          }
     
}function img09()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg09 = document.getElementById("img09");
        var currWidth = MyImg09.clientWidth;
              var curHeight = MyImg09.curHeight;
              MyImg09.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg09.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img09.png';
               size = false;
           }

          }
     
}function img10()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg10 = document.getElementById("img10");
        var currWidth = MyImg10.clientWidth;
              var curHeight = MyImg10.curHeight;
              MyImg10.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg10.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img10.png';
               size = false;
           }

          }
     
}function img11()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!")
          }
      else
          {if (size == false){
              
              var MyImg11 = document.getElementById("img11");
        var currWidth = MyImg11.clientWidth;
              var curHeight = MyImg11.curHeight;
              MyImg11.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg11.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img11.png';
               size = false;
           }

          }
     
}function img12()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!");
          }
      else
          {if (size == false){
              
              var MyImg12 = document.getElementById("img12");
        var currWidth = MyImg12.clientWidth;
              var curHeight = MyImg12.curHeight;
              MyImg12.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg12.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img12.png';
               size = false;
           }

          }
     
}function img13()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!");
          }
      else
          {if (size == false){
              
              var MyImg13 = document.getElementById("img13");
        var currWidth = MyImg13.clientWidth;
              var curHeight = MyImg13.curHeight;
              MyImg13.style.width = (currWidth + (800*currWidth)/100) + "px";
              MyImg13.style.height = (curHeight + (800*currWidth)/100) + "px";
              size = true;
          }
           else{
               document.getElementById("simplecode").src='img13.png';
               size = false;
           }

          }
     
}
function img14()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!");
              
          }
      else
          {if (size == false){
              
                window.open("CSS%20List.pdf");

              size = true;
          }
           else{
               document.getElementById("simplecode").src='img14.png';
               size = false;
           }

          }
     
}
function img15()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!");
              
          }
      else
          {if (size == false){
              
                window.open("JS%20Intro.pdf");

              size = true;
          }
           else{
               document.getElementById("simplecode").src='img14.png';
               size = false;
           }

          }
     
}

$(document).ready(function()
                 {
 var a = $(".table02");
                  var b = $(".imga"); 
                  
$("#img15").click(function(event)
                 {
    
    if(s == true)
        {
             
        a.fadeIn();
           
            
            b.fadeOut();
       
        }
    else
        {
             window.alert("you need to sign in !!!");

        }
   
}) 
                  })


function img16()
{
    var size = false;
    if(s == false)
          {
              window.alert("you need to sign in !!!");
              
          }
      else
          {if (size == false){
              
                window.open("Js%20Variable%20and%20output.pdf");

              size = true;
          }
           else{
               document.getElementById("simplecode").src='img14.png';
               size = false;
           }

          }
     
}
function validateform(){  
var name=document.myForm.fname.value;  
var password=document.getElementById("password").value;  
    var arrow = $(".arrowup");
                  var form = $(".login-form"); 

   
  
if (name == null || name == "" )
{  
  window.alert("Name can't be blank");  
  s = false;  
}
    else if(password.length<8)
    {  
 alert("Password must be at least 8 characters long.");  
  s = false;  
  } 
    else{
        window.alert("sucessfully signed in !!!");
        s= true; 
 arrow.fadeOut();
            form.fadeOut();
        document.getElementById("login").innerHTML="signed in";
    }
}