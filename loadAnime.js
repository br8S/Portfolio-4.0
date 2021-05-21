window.addEventListener('load', function() {
    gsap.to(".wrapper", {
        duration: 4,
        y: -1000,
        ease: Expo.easeInOut,
        delay: 4.6
    })
})