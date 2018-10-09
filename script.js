// let btn = document.getElementsByTagName("button")[0];

// btn.addEventListener("click", function(){
// 	console.log("Clink!!!")
// })


let btn = document.querySelector("#enter");
let input = document.querySelector("#user_input");
let ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	// create a new li element
	let li = document.createElement("li");
	// and give it some content, the vlaue of input in this case	
	li.appendChild(document.createTextNode(input.value));
	// add the textnode to the newly created li
	ul.appendChild(li);
	// after entering the value, the input will return to null
	input.value = "";



	let delBtn = document.createElement("button");
	delBtn.setAttribute("id", "delete");
	delBtn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(delBtn);
	delBtn.onclick = deleteLists;
}




function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event) {
	// console.log(event.which);
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteLists(evt) {
	evt.target.parentNode.remove();
}







btn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);