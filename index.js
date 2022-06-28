gsap.from(".move",{
   top:"-120px",
   left:"-430px",
   duration:4,
   // delay:2,
   ease:Expo.easeInOut
}) 
gsap.to(".move",{
   top:"-100px",
   left:"-350px",
   duration:2,
   delay:4,
   ease:Expo.easeInOut
}) 


 
var h1=document.querySelectorAll("#part2>h1")

h1.forEach( function(elem){
   var clutter=""
   var txt = elem.textContent.split("")
   txt.forEach(function(elem){
      clutter +=`<span>${elem}</span>`
   })
   elem.innerHTML = clutter;
});

 

var tl=gsap.timeline();

tl.from("#part2>h1>span",{
   opacity:0,
   duration:2,
   stagger:.1,
  scale:1.4,
  x:"20px",
  color:"red", 
})

.from(".nav", {
   top:"-100px",
   opacity:0,
   scale:1.5,
   duration:2,
   // delay:2,
   ease:Expo.easeInOut,
},4)
.from(".part3",{
   bottom:"-100px",
   opacity:0,
   scale:1.5,
   duration:2,
   // delay:2,
   ease:Expo.easeInOut,
},4)
.from(".part1 h1",{
   opacity:0,
   scale:2,
   duration:2,
   // delay:2,
   ease:Expo.easeInOut,
},4)
   
// tl.from("#part2>h1>span",{
//    opacity:0,
//    duration:2,
//    stagger:.1,
//   scale:1.4,
//   x:"20px",
//   delay:-1,
//   color:"red", 
// })
// document.querySelector()
gsap.to(".b3",{
   width:"100%",
   duration:4,
   delay:6,
   ease:Expo.ease
 })
 gsap.to(".blc1",{
   marginTop:"-1%",
   marginLeft:"150",
   width:"100px",
   height:"102%",
   duration:4,
   delay:6,
   ease:Expo.ease
 })
//  gsap.to(".blc3",{
//    height:"100%",
//     width:"150px",
//    duration:4,
//    delay:6,
//    ease:Expo.ease
 //})
 gsap.to(".move",{
   //  height:"100%",
   //  width:"150px",
   borderLeft:"800",
   duration:4,
   delay:6,
   ease:Expo.ease
 })
 gsap.to(".move",{
   top:"-100px",
   left:"-50px",
   duration:2,
   delay:10,
   ease:Expo.easeInOut
 })
 gsap.to(".move",{
   top:"00px",
   left:"-450px",
   duration:2,
   delay:12,
   ease:Expo.easeInOut
 })
 gsap.to(".b2",{
   width:"100%",
   duration:4,
   delay:15,
   ease:Expo.ease
 })
 gsap.to(".blc1",{
   width:"100",
   marginLeft:"0",
   duration:4,
   delay:15,
   ease:Expo.ease
 })
 gsap.to(".blc3",{
   // width:"100",
   // marginLeft:"0",
   height:"400",
   duration:4,
   delay:15,
   ease:Expo.ease
 })
 gsap.to(".move",{
   borderTop:"101",
   borderBottom:"1400",
   borderRight:"3100",
   duration:4,
   delay:15,
   ease:Expo.ease
 })
 gsap.to(".move",{
   top:"-200",
   left:"-300",
   duration:4,
   delay:19,
   ease:Expo.ease
 })
 gsap.to(".move",{
   top:"0",
   left:"-500",
   duration:4,
   delay:23,
   ease:Expo.ease
 })


  
  