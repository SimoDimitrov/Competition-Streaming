var pushed1 = 0;
var pushed2 = 0;
var pushed3 = 0;
var pushed4 = 0;
var videoo1 = 0;
var videoo2 = 0;
var videoo3 = 0;
var videoo4 = 0;
var videoo5 = 0;
var videoo6 = 0;
var videoo7 = 0;
var videoo8 = 0;
var videoo9 = 0;
var videoo10 = 0;
var videoo11 = 0;
var videoo12 = 0;
var videoo13 = 0;
var videoo14 = 0;
var videoo15 = 0;
var videoo16 = 0;

function cameras1() 
{
    var boxes1 = document.getElementById("boxes1");
    if(boxes1.style.display === "none" && pushed2 == 0 && pushed3 == 0 && pushed4 == 0)
    {
        boxes1.style.display = "block";
        pushed1 = 1;
    } else{
    if(videoo1==0 && videoo2==0 && videoo3==0 && videoo4==0 && videoo5==0 && videoo6==0
    && videoo7==0 && videoo8==0 && videoo9==0 && videoo10==0 && videoo11==0 && videoo12==0
    && videoo13==0 && videoo14==0 && videoo15==0 && videoo16==0)
        {
            boxes1.style.display = "none";
            pushed1 = 0;
        }
    }
}

function cameras2() 
{
    var boxes2 = document.getElementById("boxes2");
    if(boxes2.style.display === "none" && pushed1 == 0 && pushed3 == 0 && pushed4 == 0)
    {
        boxes2.style.display = "block";
        pushed2 = 1;
    } else{
    if(videoo1==0 && videoo2==0 && videoo3==0 && videoo4==0 && videoo5==0 && videoo6==0
    && videoo7==0 && videoo8==0 && videoo9==0 && videoo10==0 && videoo11==0 && videoo12==0
    && videoo13==0 && videoo14==0 && videoo15==0 && videoo16==0)
        {
            boxes2.style.display = "none";
            pushed2 = 0;
        }
    }
}

function cameras3() 
{
    var boxes3 = document.getElementById("boxes3");
    if(boxes3.style.display === "none" && pushed1 == 0 && pushed2 == 0 && pushed4 == 0)
    {
        boxes3.style.display = "block";
        pushed3 = 1;
    } else{
    if(videoo1==0 && videoo2==0 && videoo3==0 && videoo4==0 && videoo5==0 && videoo6==0
    && videoo7==0 && videoo8==0 && videoo9==0 && videoo10==0 && videoo11==0 && videoo12==0
    && videoo13==0 && videoo14==0 && videoo15==0 && videoo16==0)
        {
            boxes3.style.display = "none";
            pushed3 = 0;
        }
    }
}

function cameras4() 
{
    var boxes4 = document.getElementById("boxes4");
    if(boxes4.style.display === "none" && pushed1 == 0 && pushed2 == 0 && pushed3 == 0)
    {
        boxes4.style.display = "block";
        pushed4 = 1;
    } else{
    if(videoo1==0 && videoo2==0 && videoo3==0 && videoo4==0 && videoo5==0 && videoo6==0
    && videoo7==0 && videoo8==0 && videoo9==0 && videoo10==0 && videoo11==0 && videoo12==0
    && videoo13==0 && videoo14==0 && videoo15==0 && videoo16==0)
        {
            boxes4.style.display = "none";
            pushed4 = 0;
        }
    }
}

function myFunction1() 
{
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
    
    if (box1.checked == true)
    {
        video1.style.display = "block";
        videoo1 = 1;
    } else {
       video1.style.display = "none";
       videoo1 = 0;
    }
    
    if (box2.checked == true)
    {
        video2.style.display = "block";
        videoo2 = 1;
    } else {
       video2.style.display = "none";
       videoo2 = 0;
    }
    
    if (box3.checked == true)
    {
        video3.style.display = "block";
        videoo3 = 1;
    } else {
       video3.style.display = "none";
       videoo3 = 0;
    }
    
    if (box4.checked == true)
    {
        video4.style.display = "block";
        videoo4 = 1;
    } else {
       video4.style.display = "none";
       videoo4 = 0;
    }
}

function myFunction2() 
{
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");
    var box8 = document.getElementById("box8");
    var video5 = document.getElementById("video5");
    var video6 = document.getElementById("video6");
    var video7 = document.getElementById("video7");
    var video8 = document.getElementById("video8");
    
    if (box5.checked == true)
    {
        video5.style.display = "block";
        videoo5 = 1;
    } else {
       video5.style.display = "none";
       videoo5 = 0;
    }
    
    if (box6.checked == true)
    {
        video6.style.display = "block";
        videoo6 = 1;
    } else {
       video6.style.display = "none";
       videoo6 = 0;
    }
    
    if (box7.checked == true)
    {
        video7.style.display = "block";
        videoo7 = 1;
    } else {
       video7.style.display = "none";
       videoo7 = 0;
    }
    
    if (box8.checked == true)
    {
        video8.style.display = "block";
        videoo8 = 1;
    } else {
       video8.style.display = "none";
       videoo8 = 0;
    }
}

function myFunction3() 
{
    var box9 = document.getElementById("box9");
    var box10 = document.getElementById("box10");
    var box11 = document.getElementById("box11");
    var box12 = document.getElementById("box12");
    var video9 = document.getElementById("video9");
    var video10 = document.getElementById("video10");
    var video11 = document.getElementById("video11");
    var video12 = document.getElementById("video12");
    if (box9.checked == true)
    {
        video9.style.display = "block";
        videoo9 = 1;
    } else {
        video9.style.display = "none";
        videoo9 = 0;
    }
    
    if (box10.checked == true)
    {
        video10.style.display = "block";
        videoo10 = 1;
    } else {
        video10.style.display = "none";
        videoo10 = 0;
    }
    
    if (box11.checked == true)
    {
        video11.style.display = "block";
        videoo11 = 1;
    } else {
       video11.style.display = "none";
       videoo11 = 0;
    }
    
    if (box12.checked == true)
    {
        video12.style.display = "block";
        videoo12 = 1;
    } else {
        video12.style.display = "none";
        videoo12 = 0;
    }
}

function myFunction4() 
{
    var box13 = document.getElementById("box13");
    var box14 = document.getElementById("box14");
    var box15 = document.getElementById("box15");
    var box16 = document.getElementById("box16");
    var video13 = document.getElementById("video13");
    var video14 = document.getElementById("video14");
    var video15 = document.getElementById("video15");
    var video16 = document.getElementById("video16");
    if (box13.checked == true)
    {
        video13.style.display = "block";
        videoo13 = 1;
    } else {
       video13.style.display = "none";
       videoo13 = 0;
    }
    
    if (box14.checked == true)
    {
        video14.style.display = "block";
        videoo14 = 1;
    } else {
       video14.style.display = "none";
       videoo14 = 0;
    }
    
    if (box15.checked == true)
    {
        video15.style.display = "block";
        videoo15 = 1;
    } else {
       video15.style.display = "none";
       videoo15 = 0;
    }
    
    if (box16.checked == true)
    {
        video16.style.display = "block";
        videoo16 = 1;
    } else {
        video16.style.display = "none";
        videoo16 = 0;
    }
}