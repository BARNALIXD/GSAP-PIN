gsap.to("#page2 h2",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2",
        scroll:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
    
})