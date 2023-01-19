
//mainElements
const programShape = document.getElementsByClassName("program-shape");


// button elements
const button1el = document.getElementById('button1-left');
const button2el = document.getElementById('button2-right');
const button3el = document.getElementById('projects-return-button');

// program elements
const programs = document.getElementsByClassName("programs");
const projects =  document.getElementsByClassName("projects");
const iframeView = document.querySelector('.iframe-container');
const iframe = document.getElementById('iframe');
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');

// filters / css
const backdropBlur = document.getElementsByClassName("backdrop-blur");
const buttonLeftStyle = document.querySelector(".buttonLeft");
const buttonRightStyle = document.querySelector(".buttonRight");

// Global Var
let programState = 1;

// Arrays 
const programArray = [programShape[0], programShape[1], programShape[2], programShape[3], programShape[4], programShape[5]];
const programBlurs = [backdropBlur[0], backdropBlur[1], backdropBlur[2], backdropBlur[3], backdropBlur[4], backdropBlur[5]]

const programPageOneIcons = ["url(./Images/Icons/htmlIconWhite.avif)", "url(./Images/Icons/cssIconWhite.avif)", "url(./Images/Icons/javaScriptIconWhite.avif)", "url(./Images/Icons/pythonIconWhite.avif)", "url(./Images/Icons/gitIconWhite.avif)", "url(./Images/Icons/gitHubIconWhite.avif)",]
const programPageTwoIcons = ["url(./Images/Icons/protoolsIconWhite.avif)", "url(./Images/Icons/zbrushIconWhite.avif)", "url(./Images/Icons/illustratorIcon.avif)", "url(./Images/Icons/photoshopIcon.avif)", "url(./Images/Icons/blenderIconWhite.avif)", "url(./Images/Icons/visualStudioCodeIconWhite.avif)",]
const ariaLabelsPageOne = ["Html", "CSS", "JavaScript", "Python", "Git", "GitHub"]
const ariaLabelsPageTwo = ["Protools", "Zbrush", "illustrator", "PhotoShop", "Blender", "Visual Studio Code"]

// Typed h1 title

let typed = new Typed('.auto-type', {
    strings: ['Developer', 'Sound Designer'],
    typeSpeed: 130,
    backSpeed: 120,
    loop: true,
})

// Programs wobble -----

function resetAnimation(){
    this.removeEventListener("mouseover", resetAnimation);
    this.style.animation = 'none';
    this.offsetHeight; /* trigger reflow */
    this.style.animation = null;
    setTimeout(()=>{
        this.addEventListener("mouseover", resetAnimation);
    },1000)
}
// console.log(programs)
Array.from(programs).forEach((el) =>{
    el.addEventListener("mouseover", resetAnimation)
})

//-----------------------------------------------

// Buttons for programs
const alternateLeaves = () =>{
    if(programState === 1){
        button1el.disabled = false;
        button2el.disabled = true;
        changePrograms(programPageTwoIcons, ariaLabelsPageTwo);
        programState = 2;
    }else{
        button1el.disabled = true;
        button2el.disabled = false;
        changePrograms(programPageOneIcons, ariaLabelsPageOne);
        programState = 1;
    }
    
}

function changePrograms(icons, ariaLabels) {
    for (let i = 0; i < programArray.length; i++){
        programBlurs[i].style.opacity = "100%"
        programArray[i].style.transform = "scale(1.1, 1.1)"
        setTimeout(function(){
            programArray[i].style.backgroundImage = icons[i]
            programArray[i].ariaLabel = ariaLabels[i]
            programArray[i].style.transform = "scale(1, 1)"
            programBlurs[i].style.opacity = "0%"
        },260)
    }
}

button1el.addEventListener("click", alternateLeaves)
button2el.addEventListener("click", alternateLeaves)


//-----------------------------------------------
// projects / button

// projects

function openProjectView(el){
    if(el === project1){
        iframe.src = "https://htmlpreview.github.io/?https://github.com/Chris-Wight/Project_Company_Homepage/blob/main/companyHomePage.html"
    }else if(el === project2){
        iframe.src = "https://htmlpreview.github.io/?https://github.com/Chris-Wight/Business_Card/blob/main/index.html"
    }else{
        iframe.src = "http://htmlpreview.github.io/?https://github.com/Chris-Wight/Mixed_Messages/blob/main/index.html"
    }
    iframeView.style.display = 'flex'
}

project1.addEventListener('click', ()=>{
    openProjectView(project1)
})
project2.addEventListener('click', ()=>{
    openProjectView(project2)
})
project3.addEventListener('click', ()=>{
    openProjectView(project3)
})


// button
function closeProjectPreview(){
    iframeView.style.display = 'none'
}

button3el.addEventListener('click', closeProjectPreview)
