document.querySelector('#project_1').addEventListener("mouseenter", () => {
    document.querySelector('#cacti_bg').style.visibility = "visible";
    document.querySelector('#cacti_bg').classList.add("opacity-effect");
    console.log(document.querySelector('#cacti_bg').style.opacity)
})

document.querySelector('#project_1').addEventListener("mouseleave", () => {
    document.querySelector('#cacti_bg').style.visibility = "hidden";
    document.querySelector('#cacti_bg').classList.remove("opacity-effect");
})

document.querySelector('#project_2').addEventListener("mouseover", () => {
    document.querySelector('#stussy_bg').style.visibility = "visible";
    document.querySelector('#stussy_bg').classList.add("opacity-effect");
})

document.querySelector('#project_2').addEventListener("mouseleave", () => {
    document.querySelector('#stussy_bg').style.visibility = "hidden";
    document.querySelector('#stussy_bg').classList.remove("opacity-effect");
})

document.querySelector('#project_3').addEventListener("mouseover", () => {
    document.querySelector('#ballastpt_bg').style.visibility = "visible";
    document.querySelector('#ballastpt_bg').classList.add("opacity-effect");
})

document.querySelector('#project_3').addEventListener("mouseleave", () => {
    document.querySelector('#ballastpt_bg').style.visibility = "hidden";
    document.querySelector('#ballastpt_bg').classList.remove("opacity-effect");
})


document.querySelector('#project_4').addEventListener("mouseover", () => {
    document.querySelector('#wedding_bg').style.visibility = "visible";
    document.querySelector('#wedding_bg').classList.add("opacity-effect");
})

document.querySelector('#project_4').addEventListener("mouseleave", () => {
    document.querySelector('#wedding_bg').style.visibility = "hidden";
    document.querySelector('#wedding_bg').classList.remove("opacity-effect");
})

document.querySelector('#project_5').addEventListener("mouseover", () => {
    document.querySelector('#br8s_bg').style.visibility = "visible";
    document.querySelector('#br8s_bg').classList.add("opacity-effect");
})

document.querySelector('#project_5').addEventListener("mouseleave", () => {
    document.querySelector('#br8s_bg').style.visibility = "hidden";
    document.querySelector('#br8s_bg').classList.remove("opacity-effect");
})