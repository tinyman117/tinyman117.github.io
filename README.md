<html>
    <body>
        <h1>Javascript and JQuery Chapter 2 Examples</h1>

        <noscript>
            <h2>Please enable Javascript</h2>
        </noscript>
        <script>
            document.write("Javascript Enabled");
            document.write("<br>");

            let name = "Jospeh";
            console.log("name =" + name);
            let age = 50;
            console.log("age =" + age);
            const count = 1;
            // count = count+1; type error
            console.log("count = " + count); 
            
            console.log("Val1 =" + val1);
            var val1 = "value one";

            let val2 = "value two";
            console.log("Val2 =" + val2);
           

            const width = 4.25;
            console.log("width =" + width);
            const lenght = 4.25;
            console.log("lenght =" + lenght);
            const perimeter = 2*width + 2*lenght;
            console.log("perimeter =" + perimeter);

            let number = 25;
            number = number+1;
            number +=1;
            number ++;
            console.log("number =" + number)

            const subtotal = 74.95;
            const salestax = subtotal*.1;
            console.log("salestax =" + salestax)

            //one soulution 
            console.log("salestax =" + parseFloat(salestax.toFixed(14)));

            const first = "Bob";
            const last = "John";
            const fullName = first + ', ' + last;
            console.log("Full Name = " + fullName);

            window.alert("Test of the alert method.");

            let prompt = window.prompt("Whats your favorite color?", "red");
            console.log("Prompt = " + prompt);

            alert(window.location);

            let entryA = window.prompt("Enter Value:", 12345.678);
            entryA = parseInt(entryA);
            alert(entryA);

            const today = new Date();
            document.write(today.toDateString());
            document.write("<br>");
            document.write(today.toTimeString());
            document.write("<br>");



        </script>
    </body>
</html>
