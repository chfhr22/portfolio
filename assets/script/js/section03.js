export const section03 = () => {
    const tl = gsap.timeline();
    tl.set('.about__parallax__text__wrap', {
        xPercent: 0,
        opacity: 0.7
    })

    tl.to('.about__box.box01', {
        autoAlpha: 0, duration: 1, y: -100, 
    }, "+=1")
    tl.to('.about__box.box02', {
        autoAlpha: 0, duration: 1, y: -100, 
    }, "+=1")
    tl.to('.about__box.box03', {
        autoAlpha: 0, duration: 1, y: -100, 
    }, "+=1")
    tl.to('.about__box.box04', {
        autoAlpha: 0, duration: 1, y: -100, 
    }, "+=1")
    tl.to('.about__box.box05', {
        autoAlpha: 0, duration: 1, y: -100, 
    }, "+=1")
    tl.to('.about__box.box06', {
        autoAlpha: 0, duration: 1, y: -100, 
    }, "+=1")
    tl.to('.about__box.box07', {
        autoAlpha: 0, duration: 1, y: -100, 
    }, "+=1")
    tl.to('.about__parallax__text__wrap', {
        xPercent: -200,
        duration: 15,
        // onComplete: () => {
        //     tl.to('.about__parallax__text__wrap', {
        //         opacity: 0
        //     })
        // }
    }, "+=2")
    

    ScrollTrigger.create({
        animation: tl,
        trigger: "#section03",
        start: "top top",
        end: "+=6000",
        scrub: 10,
        pin: true
    })
}