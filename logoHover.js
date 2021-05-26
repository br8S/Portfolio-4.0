document.querySelector("#logo").addEventListener("mouseenter", () => {
    gsap.to("#logo", {
        opacity: 1,
        scaleY: 1.05,
        scaleX: 1.05,
        duration: 1
    })
})

document.querySelector("#logo").addEventListener("mouseleave", () => {
    gsap.to("#logo", {
        opacity: 0.1,
        scaleY: 1,
        scaleX: 1,
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

    gsap.to("#logo", {
        x: 400,
        rotation: 0, 
        duration: 1
    })

    gsap.from('.about-text', {
        opacity: 0, 
        duration: 2,
        delay: 1
    })

    gsap.from('.social-link', {
        opacity: 0, 
        duration: 2,
        delay: 1.2
    })
})

document.querySelectorAll(".social-link").forEach( (link) => {
    link.addEventListener("mouseenter", () => {
        gsap.to(link, {
            opacity: 1,
        })
    })

    link.addEventListener("mouseleave", () => {
        gsap.to(link, {
            opacity: 0.1,
        })
    })
})