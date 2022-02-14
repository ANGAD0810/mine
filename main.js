var canvas = new fabric.Canvas("my_canvas");

block_img_wid = 30;
block_img_hei = 30;

player_x = 10;
player_y = 10;

var pla_obj = "";
var blc_img_obj = "";


function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        pla_obj = Img;

        pla_obj.scaleToWidth(150);
        pla_obj.scaleToHeight(140);
        pla_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(pla_obj);
    });

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        blc_img_obj = Img;

        blc_img_obj.scaleToWidth(block_img_wid);
        blc_img_obj.scaleToHeight(block_img_hei);
        blc_img_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(blc_img_obj);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log('p and shift pressed together');
        block_img_wid = block_img_wid + 10;
        block_img_hei = block_img_hei + 10;
        document.getElementById("current_width").innerHTML = block_img_wid;
        document.getElementById("current_height").innerHTML = block_img_hei;

    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log('m and shift pressed together');
        block_img_wid = block_img_wid - 10;
        block_img_hei = block_img_hei - 10;
        document.getElementById("current_width").innerHTML = block_img_wid;
        document.getElementById("current_height").innerHTML = block_img_hei;

    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '87') {
        new_image('wall.jpg');
        console.log("w");
    }

    if (keyPressed == '71') {
        new_image('ground.png');
        console.log("g");
    }

    if (keyPressed == '76') {
        new_image('light_green.png');
        console.log("l");
    }
    if (keyPressed == '84') {
        new_image('trunk.jpg');
        console.log("t");
    }

    if (keyPressed == '82') {
        new_image('roof.jpg');
        console.log("r");
    }
    if (keyPressed == '89') {
        new_image('yellow_wall.png');
        console.log("y");
    }

    if (keyPressed == '68') {
        new_image('dark_green.png');
        console.log("d");
    }

    if (keyPressed == '85') {
        new_image('unique.png');
        console.log("u");
    }

    if (keyPressed == '67') {
        new_image('cloud.jpg');
        console.log("c");
    }

}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_img_hei;
        console.log("block img hei = " + block_img_hei);
        console.log("When up arrow is pressed  X =  " + player_x + " ,  Y = " + player_y);
        canvas.remove(pla_obj);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_img_hei;
        console.log("block img hei  =  " + block_img_hei);
        console.log("When down arrow is pressed  X  = " + player_x + "  , Y = " + player_y);
        canvas.remove(pla_obj);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_img_wid;
        console.log("block img wid = " + block_img_wid);
        console.log("When left arrow is pressed  X =  " + player_x + " ,  Y = " + player_y);
        canvas.remove(pla_obj);
        player_update();
    }
}
function right() {
    if (player_x <= 850) {
        player_x = player_x + block_img_wid;
        console.log("block img wid  =  " + block_img_wid);
        console.log("When right arrow is pressed  X  = " + player_x + "  , Y = " + player_y);
        canvas.remove(pla_obj);
        player_update();
    }
}