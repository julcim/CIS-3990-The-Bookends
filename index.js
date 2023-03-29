
window.onload = function onEmojiChange() {
    var e = document.getElementById('reaction');
    var text = e.options[e.selectedIndex].text;
    document.getElementById('emoji').innerHTML = text;
};
function onEmojiChange() {
    var e = document.getElementById('reaction');
    var text = e.options[e.selectedIndex].text;
    document.getElementById('emoji').innerHTML = text;
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag1(ev) {
    ev.target.innerHTML = "";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    ev.target.innerHTML = nodeCopy.innerHTML;
}

function toggleDiv(id) {
    var div = document.getElementById(id);
    // console.log(div.style);
    div.style.display = div.style.display == "none" ? "block" : "none";
}

function init() {
    var chatEnter = document.getElementById("freeform");
    // Execute a function when the user presses a key on the keyboard
    chatEnter.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            console.log("Hit enter");
            event.preventDefault();
            // Trigger the button element with a click
            const newDiv0 = document.createElement("div");
            var newContent = document.createTextNode("Me:");
            newDiv0.style.position = "relative";
            newDiv0.style.marginTop = "20px";
            newDiv0.style.left = "10px";
            newDiv0.style.width = "30px";
            newDiv0.appendChild(newContent);
            document.getElementById("innerChat").appendChild(newDiv0);

            const newDiv = document.createElement("div");
            var newContent = document.createTextNode(document.getElementById("freeform").value);
            document.getElementById("freeform").value="";
            newDiv.style.position = "relative";
            newDiv.style.top = "0px";
            newDiv.style.padding = "10px";
            newDiv.style.left = "100px";
            newDiv.style.width = "330px";
            newDiv.style.fontSize = "20px";
            newDiv.style.borderStyle = "solid";
            newDiv.style.borderWidth = "1px";
            newDiv.style.borderColor = "black";
            newDiv.style.borderRadius = "15px";
            newDiv.style.marginTop = "-30px";
            newDiv.appendChild(newContent);
            document.getElementById("innerChat").appendChild(newDiv);
            var objDiv = document.getElementById("chatbox");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    });
}

document.addEventListener('readystatechange', function () {
    if (document.readyState === "complete") {
        init();
    }
});



