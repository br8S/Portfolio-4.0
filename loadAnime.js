window.addEventListener('load', function() {
    gsap.to(".wrapper", {
        duration: 4,
        y: -1000,
        ease: Expo.easeInOut,
        delay: 0
    })

    gsap.from("#project_1", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 0.4
    })

    gsap.from("#project_2", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 0.6
    })

    gsap.from("#project_3", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 0.8
    })

    gsap.from("#project_4", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 1
    })

    gsap.from("#project_5", {
        duration: 4.2,
        opacity: 0,
        x: 300,
        ease: Expo.easeInOut,
        delay: 1.2
    })

    gsap.from(".title", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: Expo.easeInOut,
        delay: 1.4
    })

    gsap.from("#logo", {
        duration: 2,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: 1.6
    })
})