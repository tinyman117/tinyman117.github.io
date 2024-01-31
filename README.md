

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valentine's Day Proposal</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
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

        #textContainer p {
            font-size: 24px; /* Adjust the font size */
            font-weight: bold; /* Add bold style */
        }

        #buttonContainer {
            display: flex;
            justify-content: center; /* Center the buttons */
        }

        #yesButton, #noButton {
            margin: 0 10px; /* Add margin between buttons */
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        #yesButton {
            position: relative;
            left: -100px; /* Move 'Yes' button 100 pixels to the left */
        }

        #noButton {
            position: absolute;
            left: 350px; /* Move 'No' button 200 pixels to the right */
        }
    </style>
</head>
<body>

<img id="background" src="image1.jpg" alt="Background Image">

<img id="centeredImage" src="image2.jpeg" alt="Center Image">

<div id="textContainer">
    <p>Hello pookie, I love you so much. Will you be my valentine?</p>
    <div id="buttonContainer">
        <button id="yesButton" onclick="handleYesClick()">Yes</button>
        <button id="noButton" onclick="handleNoClick()">No</button>
    </div>
</div>

<script>
    function handleYesClick() {
        // Change image, text, and remove buttons
        document.getElementById('centeredImage').src = 'image3.gif';
        document.getElementById('textContainer').innerHTML = '<p></p>';
        document.getElementById('buttonContainer').style.display = 'none';
    }

    function handleNoClick() {
        var randomSign1 = Math.random() < 0.5 ? -1 : 1;
        var randomSign2 = Math.random() < 0.5 ? -1 : 1;

        // Move 'No' button to a random position and change size
        var noButton = document.getElementById('noButton');
        var randomX = randomSign1 * Math.random() * 70; // Random position between 0% and 100% of the width
        var randomY = randomSign2 * Math.random() * 70; // Random position between 0% and 100% of the height
        var randomSizeChange = (Math.random() - 0.5) * 100; // Random size change between -50% and 50%

        noButton.style.left = randomX + '%';
        noButton.style.top = randomY + '%';
        noButton.style.transform = 'scale(' + (1 + randomSizeChange / 100) + ')';
    }
</script>

</body>
</html>
