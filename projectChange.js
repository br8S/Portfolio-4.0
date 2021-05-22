document.querySelector('#project_1').addEventListener("mouseenter", () => {
    gsap.to("#project_1", {
        duration: 0.1,
        opacity: 1,
        ease: Expo.easeIn
    })

    gsap.to("#cacti_bg", {
        duration: 0.5,
        autoAlpha: 1,
        ease: Expo.easeInOut
    })
})

document.querySelector('#project_1').addEventListener("mouseleave", () => {
    gsap.to("#project_1", {
        duration: 0.1,
        opacity: 0.1,
        ease: Expo.easeInOut
    })

    gsap.to("#cacti_bg", {
        duration: 0.5,
        autoAlpha: 0,
        ease: Expo.easeInOut
    })
})

document.querySelector('#project_2').addEventListener("mouseenter", () => {
    gsap.to("#project_2", {
        duration: 0.1,
        opacity: 1,
        ease: Expo.easeInOut
    })

    gsap.to("#stussy_bg", {
        duration: 0.5,
        autoAlpha: 1,
        ease: Expo.easeInOut
    })
})

document.querySelector('#project_2').addEventListener("mouseleave", () => {
    gsap.to("#project_2", {
        duration: 0.1,
        opacity: 0.1,
        ease: Expo.easeInOut
    })

    gsap.to("#stussy_bg", {
        duration: 0.5,
        autoAlpha: 0,
        ease: Expo.easeInOut
    })
})

document.querySelector('#project_3').addEventListener("mouseenter", () => {
    gsap.to("#project_3", {
        duration: 0.1,
        opacity: 1,
        ease: Expo.easeInOut
    })

    gsap.to("#ballast_bg", {
        duration: 0.5,
        autoAlpha: 1,
        ease: Expo.easeInOut
    })
})

document.querySelector('#project_3').addEventListener("mouseleave", () => {
    gsap.to("#project_3", {
        duration: 0.1,
        opacity: 0.1,
        ease: Expo.easeInOut
    })

    gsap.to("#ballast_bg", {
        duration: 0.5,
        autoAlpha: 0,
        ease: Expo.easeInOut
    })
})


document.querySelector('#project_4').addEventListener("mouseenter", () => {
    gsap.to("#project_4", {
        duration: 0.1,
        opacity: 1,
        ease: Expo.easeInOut
    })

    gsap.to("#wedding_bg", {
        duration: 0.5,
        autoAlpha: 1,
        ease: Expo.easeInOut
    })
})

document.querySelector('#project_4').addEventListener("mouseleave", () => {
    gsap.to("#project_4", {
        duration: 0.1,
        opacity: 0.1,
        ease: Expo.easeInOut
    })

    gsap.to("#wedding_bg", {
        duration: 0.5,
        autoAlpha: 0,
        ease: Expo.easeInOut
    })
})

document.querySelector('#project_5').addEventListener("mouseenter", () => {
    gsap.to("#project_5", {
        duration: 0.1,
        opacity: 1,
        ease: Expo.easeInOut
    })

    gsap.to("#br8s_bg", {
        duration: 0.5,
        autoAlpha: 1,
        ease: Expo.easeInOut
    })
})

document.querySelector('#project_5').addEventListener("mouseleave", () => {
    gsap.to("#project_5", {
        duration: 0.1,
        opacity: 0.1,
        ease: Expo.easeInOut
    })

    gsap.to("#br8s_bg", {
        duration: 0.5,
        autoAlpha: 0,
        ease: Expo.easeInOut
    })
})

window.addEventListener('load', function() {
    gsap.to(".wrapper", {
        duration: 4,
        y: -1000,
        ease: Expo.easeInOut,
        delay: 4.6
    })

    gsap.from("#project_1", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 5
    })

    gsap.from("#project_2", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 5.2
    })

    gsap.from("#project_3", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 5.4
    })

    gsap.from("#project_4", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 5.6
    })

    gsap.from("#project_5", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 5.8
    })

    gsap.from(".title", {
        duration: 4.8,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut,
        delay: 6
    })
})