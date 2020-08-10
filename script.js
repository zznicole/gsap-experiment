// let heroBg = new TimelineMax({repeat:-1}); 
// gsap.to(".container", {
//     duration: 40, 
//     rotation: 360,
//     ease: "elastic",
//     backgroundPosition: "-2247px 0px" 
// });


// gsap.from(".rubberband", {
//     duration: 6, 
//     opacity: 0,
//     background: "#560563",
//     borderRadius: "20%",
//     border: "5px solid white",
//     padding: ".4",
//     });

gsap.from(".rubberband", {
    duration: 2, 
    opacity: 0,
    stagger: 0.3
    });

gsap.to(".rubberband", {
    duration: 2, 
    // borderBottomStyle:"solid",
    // borderBottomColor:"#F03613",
    backgroundColor: "#EDC02C",
    // opacity: 0.8,
    
    stagger: 0.3,
});
