console.log("Script Started");

    function changeStyle() {
        console.log("click");
        // Get the p element and store it in a variable
        let p = document.getElementById("text");
        //Set new text
        p.innerText = "The text has been changed";
        p.style.color = "yellow";
        p.style.fontSize = "20px";
        p.style.border = "3px solid white";
    }

    function resetStyle() {
        console.log("click");
        p = document.getElementById("text");
        p.innerText = "This is some sample text";
        p.style.color = "";
        p.style.fontSize = "";
        p.style.border = "";
        p.style.backgroundColor = "";
    }

    function changeStyle2() {
        console.log("click");
        p = document.getElementById("text");
        p.style.backgroundColor = "pink";
        p.innerText = "This is Style 2";
        p.style.color = "black";
        p.style.border = "4px dashed white";
    }