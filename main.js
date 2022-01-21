var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_imagewidth=30;
block_imageheight=30;
var player_objects="";
var block_image_objects="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_objects=Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(150);
        player_objects.set({
           top:player_y,
           left:player_x 
        });
        canvas.add(player_objects);
    });
}

function new_image(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        player_objects=Img;
        player_objects.scaleToWidth();
        player_objects.scaleToHeight(150);
        player_objects.set({
           top:player_y,
           left:player_x 
        });
        canvas.add(player_objects);
    });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e)

{
    keypressed= e.keyCode;
    console.log(keypressed);

    if (e.shiftKey==true&&keypressed=="77")
    {
        block_imageheight= block_imageheight-10;
        block_imagewidth= block_imagewidth-10;
        document.getElementById("currentwidth").innerHTML=block_imagewidth;
        document.getElementById("currentheight").innerHTML=block_imageheight;


    }

    if (e.shiftKey==true&&keypressed=="80")
    {
        block_imageheight= block_imageheight+10;
        block_imagewidth= block_imagewidth+10;
        document.getElementById("currentwidth").innerHTML=block_imagewidth;
        document.getElementById("currentheight").innerHTML=block_imageheight;


    }
    if (keypressed=="87")
    {
        new_image("wall.jpg");
        console.log("w");
    }
    if (keypressed=="84")
    {
        new_image("trunk.jpg");
        console.log("t");
    }
    if (keypressed=="67")
    {
        new_image("cloud.jpg");
        console.log("c");
    }
    if (keypressed=="68")
    {
        new_image("dark_green.png");
        console.log("d");
    }
    if (keypressed=="71")
    {
        new_image("ground.png");
        console.log("g");
    }
    if (keypressed=="82")
    {
        new_image("roof.jpg");
        console.log("r");
    }
    if (keypressed=="89")
    {
        new_image("yellow_wall.png");
        console.log("y");
    }
    if (keypressed=="85")
    {
        new_image("unique.png");
        console.log("u");
    }
    if (keypressed=="76")
    {
        new_image("light_green.png");
        console.log("l");
    }
    if (keypressed=="38")
    {
        up();
        console.log("up");
    }
    if (keypressed=="40")
    {
        down();
        console.log("down");
    } 
    if (keypressed=="37")
    {
        left();
        console.log("left");
    }
    if (keypressed=="39")
    {
        right();
        console.log("right");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_imageheight;
        console.log("block image hight="+block_imageheight);
        console.log("when up key is pressed,x="+player_x+" y="+player_y);
canvas.remove(player_objects);
player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_imageheight;
        console.log("block image hight="+block_imageheight);
        console.log("when down key is pressed,x="+player_x+" y="+player_y);
canvas.remove(player_objects);
player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_imagewidth;
        console.log("block image width="+block_imagewidth);
        console.log("when left key is pressed,x="+player_x+" y="+player_y);
canvas.remove(player_objects);
player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_imagewidth;
        console.log("block image width="+block_imagewidth);
        console.log("when right key is pressed,x="+player_x+" y="+player_y);
canvas.remove(player_objects);
player_update();
    }
}