document.querySelector("#logo").addEventListener("mouseenter", () => {
    gsap.to("#logo", {
        opacity: 1,
        rotation: 70, 
        duration: 1
    })
})

document.querySelector("#logo").addEventListener("mouseleave", () => {
    gsap.to("#logo", {
        opacity: 0.1,
        rotation: 0, 
        duration: 1
    })
})

document.querySelector("#logo").addEventListener("click", () => {
    gsap.to("#about_layer", {
        x: 0,
        rotation: 0, 
        duration: 1
    })
})