
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