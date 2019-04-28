var inp = document.getElementById('userinput');
var but = document.getElementById('enter');
var ul =  document.querySelector('ul');


function createListElement(){

	var li = document.createElement("li");
	var del = document.createElement('button');
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(inp.value));
	ul.appendChild(li);
	ul.appendChild(del);
	inp.value='';
}


inp.addEventListener("keypress",function(event){
	console.log(event);

if (inp.value.length > 0 && event.keyCode===13){
	createListElement();
}
});

but.addEventListener("click",function(event){
	console.log(event);

if (inp.value.length >0){
	createListElement();
}
});

