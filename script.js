gsap.to(".circle", {
  rotate: 0,
  duration: 1.4,
  ease: "power1.inOut",
});

const circles = document.querySelectorAll(".pannelcir");
let second= document.querySelectorAll(".second");
let active = 3;

gsap.to(circles[active - 1], {
  opacity: 1,
});


gsap.to(second[active - 1], {
  opacity: 1,
});
function changecolor() {
  gsap.to(circles, {
    opacity: 0.2,
  });
  gsap.to(second, {
    opacity: 0.2,
  });
}

circles.forEach((val, index) => {
  val.addEventListener("click", () => {
    console.log(index);
    gsap.to(".circle", {
      rotate: (2 - index) * 13,
    //   ease: Expo.easeInOut,
    ease: "power1.inOut",
    duration:1,
    });
    changecolor();
    gsap.to(val, {
      opacity: 1,
    });
    
    gsap.to(second[index], {
      opacity: 1,
    });
  });
});
