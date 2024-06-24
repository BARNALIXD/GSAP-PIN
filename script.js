var tl = gsap.timeline()

tl.to("#page1 img",{
      width:"100%",
      scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
      }
})

tl.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      markers:true,
      start:"top 0",
      end:"top -100%",
      scrub:2,
      pin:true
    }
})

tl.to("#page3 img",{
    width:"100%",
    scrollTrigger:{
      trigger:"#page3",
      scroller:"body",
      markers:true,
      start:"top 0",
      end:"top -100%",
      scrub:2,
      pin:true
    }
})