function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = roverimage;
}

function uploadBackground() {
    AudioContext.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
    key
}
