window.addEventListener('load', function() {
    gsap.to(".wrapper", {
        duration: 4,
        y: -1000,
        ease: Expo.easeInOut,
        delay: 4.6
    })

    gsap.from(".project-item", {
        duration: 4.2,
        opacity: 0,
        y: 1000,
        ease: Expo.easeInOut,
        delay: 5
    })

    gsap.from(".title", {
        duration: 4.8,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut,
        delay: 5.4
    })
})