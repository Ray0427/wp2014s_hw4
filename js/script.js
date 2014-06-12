
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = '20px "Arial"';
    ctx.fillText("Click here to start fill with Facebook Profile Picture", 40, 270);
    var img = new Image(); // load img
    img.src = "img/overlay.png";
    var img2 = new Image();
    img2.src = "img/overlayback.png"
    var img3 = new Image();
    img3.src = "img/typography.png"

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var canvasOffset = $("#canvas").offset();
	//console.log(canvasOffset);
    var offsetX = canvasOffset.left;
	console.log(offsetX);

    var offsetY = canvasOffset.top;
	console.log(offsetY);

    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var isDragging = false;

    function handleMouseDown(e) {
        canMouseX = parseInt(e.clientX - offsetX);
        canMouseY = parseInt(e.clientY - offsetY);
        // set the drag flag
        isDragging = true;
    }

    function handleMouseUp(e) {
        canMouseX = parseInt(e.clientX - offsetX);
        canMouseY = parseInt(e.clientY - offsetY);
        // clear the drag flag
        isDragging = false;
    }

    function handleMouseOut(e) {
        canMouseX = parseInt(e.clientX - offsetX);
        canMouseY = parseInt(e.clientY - offsetY);
        // user has left the canvas, so clear the drag flag
        //isDragging=false;
    }

    function handleMouseMove(e) {
        canMouseX = parseInt(e.clientX - offsetX);
        canMouseY = parseInt(e.clientY - offsetY);
		console.log(canMouseX);
        // if the drag flag is set, clear the canvas and draw the image
        if (isDragging) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            //var profileIMG = document.getElementById("preview1");
            //canvas.width = profileIMG.width;
            //canvas.height = profileIMG.height;
            //ctx.drawImage(profileIMG,0,0);
            ctx.drawImage(img3, canMouseX - 128 / 2, canMouseY - 120 / 2);
            ctx.drawImage(img2, 0, 0);
            var inputedText = $('#inputed').val();
            ctx.fillStyle = "black";
            ctx.font = '20px "微軟正黑體"';
            ctx.fillText(inputedText, canMouseX - 1 / 2, canMouseY - 30 / 2);
        }
    }

    $("#canvas").mousedown(function (e) {
        handleMouseDown(e);
    });
    $("#canvas").mousemove(function (e) {
        handleMouseMove(e);
    });
    $("#canvas").mouseup(function (e) {
        handleMouseUp(e);
    });
    $("#canvas").mouseout(function (e) {
        handleMouseOut(e);
    });
    