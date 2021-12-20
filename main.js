 mouseEvvarent="empty";
var lastX,lastY;
canvas = document.getElementById('myCanvas'); 
 ctx = canvas.getContext("2d");
 color = "red";
 width_of_line = 10;
 canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e)
 {
   mouseEvent="mousdown";
 }
 canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e)
 {
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseEvent == "mouseDown")
 { ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); ctx.stroke();
}
lastX = current_position_of_mouse_x; lastY = current_position_of_mouse_y;
 }
 