document.querySelector('#project_1').addEventListener("mouseover", () => {
    document.querySelector('header').style.backgroundImage = "url('images/cacti.gif')";
})

// document.querySelector('#project_1').addEventListener("mouseleave", () => {
//     document.querySelector('header').style.backgroundImage = "";
// })


document.querySelector('#project_2').addEventListener("mouseover", () => {
    document.querySelector('header').style.backgroundImage = "url('images/stussy.gif')";
})

document.querySelector('#project_3').addEventListener("mouseover", () => {
    document.querySelector('header').style.backgroundImage = "url('images/ballastpt.gif')";
})

document.querySelector('#project_4').addEventListener("mouseover", () => {
    document.querySelector('header').style.backgroundImage = "url('images/waves.gif')";
})

document.querySelector('#project_5').addEventListener("mouseover", () => {
    document.querySelector('header').style.backgroundImage = "url('images/br8s.gif')";
})

const projects = document.querySelectorAll('.project-item');

for (const project of projects) {
    project.addEventListener("mouseleave", function(event) {
        document.querySelector('header').style.backgroundImage = "";
    })
}