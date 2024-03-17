const wrapper = document.querySelector(".DragBox01, .DragBox02, .DragBox03"),
header = wrapper.querySelector("header");

let isDragging = false; // Track Drag
let initialX, initialY; // Record initial pos of MouseClick
let initialLeft, initialTop; // Element initial pos

function onDrag(e){
    if (!isDragging) return;
    const dx = e.clientX - initialX;
    const dy = e.clientY - initialY;
    wrapper.style.left = `${initialLeft + dx}px`;
    wrapper.style.top = `${initialTop + dy}px`;
}

document.addEventListener("mouseup", ()=>{
    isDragging = false;
    header.classList.remove("active");
});

header.addEventListener("mousedown", (e)=>{
    isDragging = true;
    initialX = e.clientX;
    initialY = e.clientY;
    let style = window.getComputedStyle(wrapper);
    initialLeft = parseInt(style.left, 10);
    initialTop = parseInt(style.top, 10);
    header.classList.add("active");
    document.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", ()=>{
    document.removeEventListener("mousemove", onDrag);
});

//--------------------------------------------------------//

document.addEventListener('DOMContentLoaded', function() {
    const middleDiv = document.getElementById('SectionM');
    middleDiv.classList.add('SectionDown');
});
//Loading Website MiddleSection DropDown

document.querySelectorAll('.WeekButton').forEach(button => {
    button.addEventListener('click', function() {
        const middleDiv = document.getElementById('SectionM');
        middleDiv.classList.remove('SectionDown'); //Remove MiddleSection DropDown Animation while Loading Website
        middleDiv.classList.add('SectionUp'); //Add New Animation

        document.getElementById('ReturnButton').style.display = 'flex';
        //Display ReturnButton

        const targetId = this.getAttribute('data-target');
        const targetProject = document.getElementById(targetId);
        targetProject.classList.add('show');
        //Then Show Targeted WeekContentBox

    });
});

//Return Button Function
document.getElementById('ReturnButton').addEventListener('click', function() {
    document.querySelectorAll('.WeekContentBox').forEach(project => {
        project.classList.remove('show');
    });

    const middleDiv = document.getElementById('SectionM');
    middleDiv.classList.add('SectionDown');
    this.style.display = 'none';
});