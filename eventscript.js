var button = document.getElementsByTagName("button")[0];
var input = document.getElementById("item");
var ul = document.querySelector("ul");

function createElementAfterClick() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.innerHTML = li.innerHTML + " " + '<i class="fa fa-trash"> </i>';
        ul.appendChild(li);
        console.log(li);
        deleteItems();
        input.value = "";
    }
}

function createElementAfterKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        button.click();
    }
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}


ul.onclick = function(event) {
    var target = getEventTarget(event);
    target.classList.toggle("done");
}


//remove item on clicking delete button
function deleteItems() {
    trash = document.querySelectorAll('i');
    for (var i = 0; i < trash.length; i++) {
        trash[i].addEventListener("click", removeParent, false);
    }
}

//from StackOverflow:
function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
}


button.addEventListener("click", createElementAfterClick);
input.addEventListener("keydown", createElementAfterKeyPress);