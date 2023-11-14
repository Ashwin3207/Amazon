let count=1;
function upban(){
if(count==1)
{document.getElementById('poster').innerHTML='<img src="car1.jpg" width="100%">';}
if(count==2)
{document.getElementById('poster').innerHTML='<img src="car2.jpg" width="100%">';}
if(count==3)
{document.getElementById("poster").innerHTML='<img src="car3.jpg" width="100%">';}
if(count==4)
{document.getElementById("poster").innerHTML='<img src="car4.jpg" width="100%">';}
if(count==5)
{document.getElementById("poster").innerHTML='<img src="car5.jpg" width="100%">';}
if(count==6)
{document.getElementById("poster").innerHTML='<img src="car6.jpg" width="100%">';}
if(count==7)
{
    document.getElementById("poster").innerHTML='<img src="car7.jpg" width="100%">';
}
}

function left()
{   if(count>1)
    {count--;
    console.log("left");
    console.log(count);
    upban();}
    else
    {
        count=7;
        upban();
    }

    
}
function right()
{   if(count<7)
    {count++;
    console.log("right");
    console.log(count);
    upban();
}
else
{
    count=1
    upban();
}

}
