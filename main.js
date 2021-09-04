var mouseEvent="empty";
var last_x, last_y;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="black";
width="1";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)

{
    color= document.getElementById ("color").value;
    width_of_the_line= document.getElementById ("width_of_the_line");

    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseUP", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mosueUP"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)

{
    current_postion_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y= e.cilentY - canvas.offsetTop;

    if (mouseEvent=="mouseDown") 
{
        ctx.beginPath()
        ctx.strokeStyle= color;
        ctx.lineWidth = width_of_the_line;
   
    console.log("Last postion of x and y coordinates= ");
    console.log("x = " + last_x + "y ="+ last_y);
    ctx.moveTo(last_x, last_y);

    console.log("Current postion of x and y coordiantes");
    console.log("x= "+ current_postion_of_mouse_x + "y =" + current_postion_of_mouse_y);
    ctx.lineTo(current_postion_of_mouse_x, current_postion_of_mouse_y);
    ctx.stroke();
}

last_x= current_postion_of_mouse_x;
last_y= current_postion_of_mouse_y;
}

