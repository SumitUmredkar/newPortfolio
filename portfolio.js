import { Application } from "https://esm.sh/@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app
  .load("https://prod.spline.design/ZMOBjX-ByeSbXJL8/scene.splinecode")
  .then(() => {
    const laptop = app.findObjectByName("macBook");
    gsap.timeline({
        scrollTrigger: {
          trigger: "#arc",
          scroller: "body",
          scrub: true,
          start: "40% 9%",
          end: "80% 12%"
        }
      })
      .to(laptop.position, { x: -650, y: -1870 }, 0)
      .to(laptop.rotation, { y: Math.PI / 1 }, 0)
      .to(laptop.scale, { x: 1.4, y: 1.4, z: 1.4 }, 0);

    gsap.timeline({
        scrollTrigger: {
          trigger: "#arc",
          scroller: "body",
          scrub: true,
          start: "75% 13%",
          end: "80% 2%"
        }
      })
      .to(laptop.rotation, { y: Math.PI /0.8,z: Math.PI /1}, 0)
      .to(laptop.position, { x: 400, y: -2700 }, 0);
  });

// const heading = document.getElementById("heading");

// document.addEventListener("mousemove", (e) => {
//   const { clientX: x, clientY: y } = e;
//   const {
//     offsetWidth: width,
//     offsetHeight: height,
//     offsetLeft: left,
//     offsetTop: top,
//   } = heading;
//   const centerX = left + width / 2;
//   const centerY = top + height / 2;
//   const deltaX = x - centerX;
//   const deltaY = y - centerY;

//   const maxShadowOffset = 20; // maximum shadow offset in px
//   const shadowX = (deltaX / width) * -60;
//   const shadowY = (deltaY / height) * -15;

//   heading.style.textShadow = `${shadowX}px ${shadowY}px 5px rgba(0, 0, 0, 0.3)`;
// });

// gsap.from("header", {
//   left: 0,
//   duration: 0.5,
// });

// gsap.from("header>a", {
//   x: -150,
//   duration: 1.4,
//   stagger: 0.2,
// });

// gsap.from("#navigate a", {
//   x: -150,
//   duration: 1.4,
//   stagger: 0.2,
// });
