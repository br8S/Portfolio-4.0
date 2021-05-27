/* LOGO ON HOVER EVENT */
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
        opacity: 0.2,
        scaleY: 1,
        scaleX: 1,
        duration: 1
    })
})

/* LOGO ON CLICK EVENT */
document.querySelector("#logo").addEventListener("click", () => {
    gsap.to("#transition_layer", {
        x: 2000,
        duration: 2
    })

    gsap.to("#about_layer", {
        x: 0,
        duration: 1
    })

    gsap.to("#logo", {
        opacity: 0,
        autoAlpha: 0,
    })

    var delayCount = 1;
    document.querySelectorAll(".about-text").forEach( (about) => {
        delayCount += 0.2;
        gsap.to(about, {
            opacity: 1,
            y: -10,
            delay: delayCount
        })
    })

    document.querySelectorAll(".social-link").forEach( (social) => {
        delayCount += 0.2;
        gsap.to(social, {
            opacity: 0.2,
            y: -10,
            delay: delayCount
        })
    })

    gsap.to('#exit_button', {
        opacity: 0.2,
        delay: 1.7
    })
})

/* EXIT BUTTON */
document.querySelector("#exit_button").addEventListener("mouseenter", () => {
    gsap.to("#exit_button", {
        opacity: 1,
    })
})

document.querySelector("#exit_button").addEventListener("mouseleave", () => {
    gsap.to("#exit_button", {
        opacity: 0.2,
    })
})

document.querySelector("#exit_button").addEventListener("click", () => {
    gsap.to('.about-text', {
        opacity: 0, 
    })

    gsap.to('.social-link', {
        opacity: 0, 
    })

    gsap.to("#exit_button", {
        opacity: 0,
    })

    gsap.to("#logo", {
        x: 0,
        opacity: 0.2,
        autoAlpha: 1,
        duration: 1,
        delay: 0.5
    })

    gsap.to("#transition_layer", {
        x: -2500,
        duration: 2
    })

    gsap.to("#about_layer", {
        x: -2000,
        duration: 1,
        delay: 0.5
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
            opacity: 0.2,
        })
    })
})

