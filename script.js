let tl = gsap.timeline();

tl.to(".rubberband", {
    duration: 1, 
    backgroundColor: "#EDC02C",
    stagger: 0.2,
})

//   .to(".glasswater", {
//     duration: 2,
//     y: -20,
//     opacity: 0,
//     ease: "bounce",
// })
  
  .from(".waterdrop1", {
    duration: 4, 
    x: 150,
    y: -150,
    rotation: 90,
    
})
  .to(".waterdrop1", {
    duration: 4, 
    x: 150,
    y: -150,
    rotation: 90,
    opacity:0,
})

  .to(".waterdrop2", {
    duration: 3, 
    x: -150,
    y: -150,
    rotation: -90,
    opacity:0,
})

  .to(".waterdrop3", {
    duration: 3, 
    y: 300,
    rotation: 360,
    opacity:0,
})
  
  .to(".watersplash,.topU,.topO,.topN", {
    duration: 2,
    opacity: 0.5,
}, "-=.5")




