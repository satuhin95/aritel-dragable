
let logo = document.querySelector('.logo')
let element_1 = document.querySelector('.element_1')
let element_2 = document.querySelector('.element_2')
let element_3 = document.querySelector('.element_3')
let drag = document.querySelector('.element_4')
let tab = document.querySelector('.tab')
let arrow = document.querySelector('.arrow')
let slide_1 = document.querySelector('.slide_1')
let slide_2 = document.querySelector('.slide_2')


if (typeof window.orientation !== 'undefined'){dragElementMobile(drag);}else{dragElement(drag);}

function dragElement(elmnt) {
  var pos1 = 0, pos3 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    tab.classList.add("hidden");
    arrow.classList.add("hidden");

    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;

    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    leftSpace = elmnt.offsetLeft - pos1;

    draggedResult(elmnt,leftSpace);
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function dragElementMobile(elmnt) {
  var pos1 = 0, pos3 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
  } else {
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    tab.classList.add("hidden");
    arrow.classList.add("hidden");

    e.preventDefault();

    e = e.touches[0] || window.event;
    pos3 = e.clientX;

    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e.touches[0] || window.event;
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    leftSpace = elmnt.offsetLeft - pos1;

    draggedResult(elmnt,leftSpace);
  }
  function closeDragElement() {
    document.ontouchend = null;
    document.touchmove = null;
  }
}

function draggedResult(elmnt, leftSpace){
  if(leftSpace<50){
        element_1.classList.add('hideZoomOut')
        element_2.classList.add('hideZoomOut')
        element_3.classList.add('hideZoomOut')
        logo.classList.add('hideZoomOut')
        drag.classList.add('hideZoomOut')
        setTimeout(function(){
            slide_1.classList.add("hidden");
            slide_2.classList.remove("hidden");
            
        },500)
    }
    if (leftSpace<20) {leftSpace=20}
    if (leftSpace>230) {leftSpace=230}

    elmnt.style.top = "95px";
    elmnt.style.bottom = "35px";
    elmnt.style.left = leftSpace + "px";
}
slide_2.addEventListener('click',function(){
  window.open("{CLICK_MACRO}")
})