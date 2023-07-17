//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages

console.log(allpages);
function hideall(){
	for(let onepage of allpages){
		onepage.style.display="none";
	}
}
hideall();

const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){
	menuItemsList.classList.toggle("menuShow");
	
	//if(menuItemsList.style.display=="block")
		//menuItemsList.style.display="none";
	//else menuItemsList.style.display="block";
}

function show(pgno){
	hideall();
	let onepage=document.querySelector("#page"+pgno);
	onepage.style.display="block";
}
page1btn.addEventListener("click", function() {
	show(1);
});
page2btn.addEventListener("click", function() {
	show(2);
});
page3btn.addEventListener("click", function() {
	show(3);
});