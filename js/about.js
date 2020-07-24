gsap.registerPlugin(ScrollTrigger);

const htmlBar = document.querySelector('.bar-html');
const bootstrapBar = document.querySelector('.bar-bootstrap');
const javaBar = document.querySelector('.bar-java');
const sqlBar = document.querySelector('.bar-sql');


var t1 = gsap.timeline({
	scrollTrigger: {
      trigger: ".skills",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1
    }
  }
)


t1.fromTo(htmlBar, 1, {width: '0'}, {width: '75%', ease: Power4.easeOut})
t1.fromTo(bootstrapBar, 1, {width: '0'}, {width: '45%', ease: Power4.easeOut})
t1.fromTo(javaBar, 1, {width: '0'}, {width: '80%', ease: Power4.easeOut})
t1.fromTo(sqlBar, 1, {width: '0'}, {width: '70%', ease: Power4.easeOut})
