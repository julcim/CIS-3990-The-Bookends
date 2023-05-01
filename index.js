
window.onload = function onEmojiChange() {
    var e = document.getElementById('reaction');
    var text = e.options[e.selectedIndex].text;
    document.getElementById('emoji').innerHTML = text;
};
function onEmojiChange() {
    var e = document.getElementById('reaction');
    var text = e.options[e.selectedIndex].text;
    document.getElementById('emoji').innerHTML = text;
    if (isEndCoordsSet == false) {
        if (e.selectedIndex == 0) {
            document.getElementById("main_body").style.cursor = "url(heart.png), auto";
            value = true;
            selected = 0;
        } else if (e.selectedIndex == 1) {
            document.getElementById("main_body").style.cursor = "url(like.png), auto";
            value = true;
            selected = 1;
        } else if (e.selectedIndex == 2) {
            document.getElementById("main_body").style.cursor = "url(thumb-down.png), auto";
            value = true;
            selected = 2;
        } else if (e.selectedIndex == 3) {
            document.getElementById("main_body").style.cursor = "url(laugh.png), auto";
            value = true;
            selected = 3;
        } else if (e.selectedIndex == 4) {
            document.getElementById("main_body").style.cursor = "url(warning-sign.png), auto";
            value = true;
            selected = 4;
        } else if (e.selectedIndex == 5) {
            document.getElementById("main_body").style.cursor = "url(question-mark.png), auto";
            value = true;
            selected = 5;
        }
    } else {
        document.getElementById("main_body").style.cursor = "auto";
        isEndCoordsSet = false;
        value = false;
        const newDiv = document.createElement("div");

        // Set the position of the new div to where the click occurred
        newDiv.style.position = "absolute";
        newDiv.style.left = endCoords.x + "px";
        newDiv.style.top = endCoords.y + "px";
        newDiv.addEventListener("click", function () {
            // Remove the new div from the document
            newDiv.remove();
        });

        // Add some content to the new div
        if (selected == 0) {
            newDiv.innerHTML = "&#128155";
        } else if (e.selectedIndex == 1) {
            newDiv.innerHTML = "&#128077";
        } else if (e.selectedIndex == 2) {
            newDiv.innerHTML = "&#128078";
        } else if (e.selectedIndex == 3) {
            newDiv.innerHTML = "&#128514";
        } else if (e.selectedIndex == 4) {
            newDiv.innerHTML = "&#10071";
        } else if (e.selectedIndex == 5) {
            newDiv.innerHTML = "&#10067";
        }

        // Add the new div to the document body
        document.body.appendChild(newDiv);

        selected = -1;
    }
    
};

function allowDrop(ev) {
    ev.preventDefault();
}

var value = false;
var selected = -1;

function changeCursor(event) {
    if (value == true && (event.target !== document.getElementById("Text1") && event.target !== document.getElementById("Text2"))) {
        value = false;
        selected = -1;
        document.getElementById("main_body").style.cursor = "auto";
    }
    if (value == false && event.target === document.getElementById("emoji")) {
        var e = document.getElementById('reaction');
        if (e.selectedIndex == 0) {
            document.getElementById("main_body").style.cursor = "url(heart.png), auto";
            value = true;
            selected = 0;
        } else if (e.selectedIndex == 1) {
            document.getElementById("main_body").style.cursor = "url(like.png), auto";
            value = true;
            selected = 1;
        } else if (e.selectedIndex == 2) {
            document.getElementById("main_body").style.cursor = "url(thumb-down.png), auto";
            value = true;
            selected = 2;
        } else if (e.selectedIndex == 3) {
            document.getElementById("main_body").style.cursor = "url(laugh.png), auto";
            value = true;
            selected = 3;
        } else if (e.selectedIndex == 4) {
            document.getElementById("main_body").style.cursor = "url(warning-sign.png), auto";
            value = true;
            selected = 4;
        } else if (e.selectedIndex == 5) {
            document.getElementById("main_body").style.cursor = "url(question-mark.png), auto";
            value = true;
            selected = 5;
        }

        if (isEndCoordsSet == true) {
            document.getElementById("main_body").style.cursor = "auto";
            isEndCoordsSet = false;
            value = false;
            const newDiv = document.createElement("div");

            // Set the position of the new div to where the click occurred
            newDiv.style.position = "absolute";
            newDiv.style.left = endCoords.x + "px";
            newDiv.style.top = endCoords.y + "px";
            newDiv.addEventListener("click", function () {
                // Remove the new div from the document
                newDiv.remove();
            });

            // Add some content to the new div
            if (selected == 0) {
                newDiv.innerHTML = "&#128155";
            } else if (selected == 1) {
                newDiv.innerHTML = "&#128077";
            } else if (selected == 2) {
                newDiv.innerHTML = "&#128078";
            } else if (selected == 3) {
                newDiv.innerHTML = "&#128514";
            } else if (selected == 4) {
                newDiv.innerHTML = "&#10071";
            } else if (selected == 5) {
                newDiv.innerHTML = "&#10067";
            }

            // Add the new div to the document body
            document.body.appendChild(newDiv);

            selected = -1;
        } else if (isEndCoordsSet) {
            isEndCoordsSet = false;
        }
    } else if (value == true && (event.target === document.getElementById("Text1") || event.target === document.getElementById("Text2"))) {
        document.getElementById("main_body").style.cursor = "auto";
        value = false;
        const newDiv = document.createElement("div");

        // Set the position of the new div to where the click occurred
        newDiv.style.position = "absolute";
        newDiv.style.left = event.pageX + "px";
        newDiv.style.top = event.pageY + "px";
        newDiv.addEventListener("click", function () {
            // Remove the new div from the document
            newDiv.remove();
        });

        // Add some content to the new div
        if (selected == 0) {
            newDiv.innerHTML = "&#128155";
        } else if (selected == 1) {
            newDiv.innerHTML = "&#128077";
        } else if (selected == 2) {
            newDiv.innerHTML = "&#128078";
        } else if (selected == 3) {
            newDiv.innerHTML = "&#128514";
        } else if (selected == 4) {
            newDiv.innerHTML = "&#10071";
        } else if (selected == 5) {
            newDiv.innerHTML = "&#10067";
        }


        // Add the new div to the document body
        document.body.appendChild(newDiv);

        selected = -1;
    }
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
            document.getElementById("freeform").value = "";
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

let endCoords = { x: 0, y: 0 }; // Global variable to store end coordinates
let isEndCoordsSet = false;

function getLocationOfMouseUp(callback) {
    // Add event listener for mouseup event
    document.addEventListener('mouseup', function (event) {
        const highlightedText = window.getSelection().toString(); // Get the highlighted text
        if (highlightedText !== '') {
            const selection = window.getSelection(); // Get the selection object
            const range = selection.getRangeAt(0); // Get the range of the highlighted text
            const rect = range.getBoundingClientRect(); // Get the bounding rect of the range
            const cursorRect = selection.getRangeAt(0).getClientRects()[0]; // Get the rect of the cursor at the end of the range
            endCoords.x = event.clientX - 20; // X coordinate of the cursor at the end of the event
            endCoords.y = event.clientY - 20;
            isEndCoordsSet = true; // Set the global boolean flag to true
            callback(highlightedText); // Call the callback function with highlighted text
        }
    });
}

// Usage
getLocationOfMouseUp(function (highlightedText) {
    console.log('Highlighted text:', highlightedText);
    if (isEndCoordsSet) {
        console.log('End coordinates:', endCoords);
    }
});

document.getElementById("main_body").addEventListener("click", function (event) {
    if (isClick) {
        isEndCoordsSet = false;
    } 
});



// Establish WebSocket connection
const socket = new WebSocket('localhost:8080');

// When WebSocket connection is opened
socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
});

// When WebSocket connection receives a message
socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);

    // Append new message to chatbox
    const newDiv0 = document.createElement("div");
    var newContent = document.createTextNode("Me:");
    newDiv0.style.position = "relative";
    newDiv0.style.marginTop = "20px";
    newDiv0.style.left = "10px";
    newDiv0.style.width = "30px";
    newDiv0.appendChild(newContent);
    document.getElementById("innerChat").appendChild(newDiv0);

    const newDiv = document.createElement("div");
    var newContent = document.createTextNode(data);
    document.getElementById("freeform").value = "";
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
});

// When form is submitted
const form = document.querySelector('.textbox form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get user's message
    const textarea = document.getElementById('freeform');
    const message = textarea.value.trim();

    // If message is not empty
    if (message) {
        print("reached");
        // Send message over WebSocket connection
        const data = {
            name: 'Me',
            message: message
        };
        socket.send(JSON.stringify(data));

        // Clear textarea
        textarea.value = '';
    }
});

