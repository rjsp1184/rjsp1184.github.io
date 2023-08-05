//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const basicSvc=document.querySelector("#basicSvc");
const cityDirectSvc=document.querySelector("#cityDirectSvc");
const expressSvc=document.querySelector("#expressSvc");
const premiumSvc=document.querySelector("#premiumSvc");
var allpages=document.querySelectorAll(".page");
var allservices=document.querySelectorAll(".Svcs");
var allbuses=document.querySelectorAll(".Buses");
const singleBus=document.querySelector("#singleBus");
const bendyBus=document.querySelector("#bendyBus");
const doubleBus=document.querySelector("#doubleBus");
var alllines=document.querySelectorAll(".Lines");
const NSLine=document.querySelector("#NSLine");
const EWLine=document.querySelector("#EWLine");
const NELine=document.querySelector("#NELine");
const CCLine=document.querySelector("#CCLine");
const DTLine=document.querySelector("#DTLine");
const TELine=document.querySelector("#TELine");
//select all subtopic pages

console.log(allpages);
function hideall(){
	for(let onepage of allpages){
		onepage.style.display="none";
	}
}
hideall();

console.log(allservices);
function hidesvc()
{
	for(let onepage of allservices){
		onepage.style.display="none";
	}
}
hidesvc();

console.log(allbuses);
function hidebuses()
{
	for(let onepage of allbuses){
		onepage.style.display="none";
	}
}
hidebuses();

console.log(alllines);
function hidelines()
{
	for(let onepage of alllines){
		onepage.style.display="none";
	}
}
hidelines();

const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){
	menuItemsList.classList.toggle("menuShow");
	
	if(menuItemsList.style.display=="block")
		menuItemsList.style.display="none";
	else menuItemsList.style.display="block";
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
/*page3btn.addEventListener("click", function() {
	show(3);
});*/



function display(svcType)
{
	hidesvc();
	let onepage=document.querySelector("#"+svcType+"Pg");
	
	onepage.style.display="block";
}

basicSvc.addEventListener("click", function() {
	display("basic");
});
cityDirectSvc.addEventListener("click", function() {
	display("city");
});
expressSvc.addEventListener("click", function() {
	display("express");
});
premiumSvc.addEventListener("click", function() {
	display("premium");
});

function showbus(busType)
{
	hidebuses();
	let onepage=document.querySelector("#"+busType+"Pg");
	
	onepage.style.display="block";
}

singleBus.addEventListener("click", function(){
	showbus("single");
});
bendyBus.addEventListener("click", function(){
	showbus("bendy");
});
doubleBus.addEventListener("click", function(){
	showbus("double");
});

function showline(line)
{
	hidelines();
	let onepage=document.querySelector("#"+line+"Pg");
	
	onepage.style.display="block";
}

NSLine.addEventListener("click", function(){
	showline("NS");
});
EWLine.addEventListener("click", function(){
	showline("EW");
});
NELine.addEventListener("click", function(){
	showline("NE");
});
CCLine.addEventListener("click", function(){
	showline("CC");
});
DTLine.addEventListener("click", function(){
	showline("DT");
});
TELine.addEventListener("click", function(){
	showline("TE");
});

//MRT gallery
let MRTslideIndex = 1;
showMRTSlides(MRTslideIndex);

function plusMRTSlides(n) {
	showMRTSlides(MRTslideIndex += n);
}

function currentMRTSlide(n) {
	showMRTSlides(MRTslideIndex = n);
}

function showMRTSlides(n){
	let MRTslides = document.getElementsByClassName("MRTSlides");
	let dots = document.getElementsByClassName("dot");
	if(n > MRTslides.length) {MRTslideIndex = 1}
	if (n < 1) {MRTslideIndex = MRTslides.length}
	for (i=0; i < MRTslides.length; i++){
		MRTslides[i].style.display = "none";
	}
	for (i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}
	MRTslides[MRTslideIndex-1].style.display="block";
	dots[MRTslideIndex-1].className += " active";
}

//Bus gallery
let BusslideIndex = 1;
showBusSlides(BusslideIndex);

function plusBusSlides(r){
	showBusSlides(BusslideIndex += r)
}

function currentBusSlide(r){
	showBusSlides(BusslideIndex = r)
}

function showBusSlides(r){
	let Busslides = document.getElementsByClassName("BusSlides");
	let dots1 = document.getElementsByClassName("dot1");
	if(r > Busslides.length) {BusslideIndex = 1}
	if (r < 1) {BusslideIndex = Busslides.length}
	for (i=0; i < Busslides.length; i++){
		Busslides[i].style.display = "none";
	}
	for (i=0; i < dots1.length; i++){
		dots1[i].className = dots1[i].className.replace(" active", "");
	}
	Busslides[BusslideIndex-1].style.display="block";
	dots1[BusslideIndex-1].className += " active";
}
