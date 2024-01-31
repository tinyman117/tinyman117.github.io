<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valentine's Day Proposal</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }

        #background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        #centeredImage {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
        }

        #textContainer {
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            z-index: 1;
        }

        #yesButton, #noButton {
            display: block;
            margin: 10px auto;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        #noButton {
            position: absolute;
        }
    </style>
</head>
<body>

<img id="background" src="image1.jpg" alt="Background Image">

<img id="centeredImage" src="image2.jpg" alt="Center Image">

<div id="textContainer">
    <p>Hello pookie, I love you so much. Will you be my valentine?</p>
    <button id="yesButton" onclick="handleYesClick()">Yes</button>
    <button id="noButton" onclick="handleNoClick()">No</button>
</div>

<script>
    function handleYesClick() {
        // Change image, text, and remove buttons
        document.getElementById('centeredImage').src = 'image3.jpg';
        document.getElementById('textContainer').innerHTML = '<p>YIPEEEEEEEEEEEEEEEE</p>';
        document.getElementById('yesButton').style.display = 'none';
        document.getElementById('noButton').style.display = 'none';
    }

    function handleNoClick() {
        // Move 'No' button to a random position
        var noButton = document.getElementById('noButton');
        var randomX = Math.random() * 70 + 15; // Random position between 15% and 85% of the width
        var randomY = Math.random() * 70 + 15; // Random position between 15% and 85% of the height

        noButton.style.left = randomX + '%';
        noButton.style.top = randomY + '%';
    }
</script>

</body>
</html>
