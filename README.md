<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Prompt</title>
</head>
<body>

<script>
    // Function to prompt the user for the password
    function promptForPassword() {
        var enteredPassword = prompt("Enter the password:");

        // Check if the entered password is "pookie"
        if (enteredPassword === "pookie") {
            alert("Correct password! Access granted.");
        } else {
            alert("Incorrect password. Try again.");
            // If the password is incorrect, prompt again
            promptForPassword();
        }
    }

    // Call the function to start the password prompt
    promptForPassword();
</script>

</body>
</html>
