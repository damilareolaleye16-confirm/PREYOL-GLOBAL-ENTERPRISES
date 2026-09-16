window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    loader.style.visibility = "hidden";
  }, 1800);
});

const floating = document.querySelector(".floating");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.clientX) / 40;

  let y = (window.innerHeight / 2 - e.clientY) / 40;

  floating.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.top = "10px";

    header.querySelector(".navbar").style.padding = "14px 35px";

    header.querySelector(".navbar").style.background = "rgba(5,8,22,.85)";
  } else {
    header.style.top = "20px";

    header.querySelector(".navbar").style.padding = "18px 40px";

    header.querySelector(".navbar").style.background = "rgba(255,255,255,.05)";
  }
});

const lenis = new Lenis({
  duration: 1.3,

  smoothWheel: true,

  wheelMultiplier: 0.8,

  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.to(".reveal", {
  y: 0,

  opacity: 1,

  duration: 1,

  stagger: 0.18,

  ease: "power4.out",

  delay: 1.4,
});

gsap.from(".hero-info div", {
  y: 40,

  opacity: 0,

  duration: 0.8,

  stagger: 0.15,

  delay: 2.1,
});

gsap.from(".scroll-down", {
  opacity: 0,

  y: 30,

  duration: 1,

  delay: 2.4,
});

const light = document.querySelector(".cursor-light");

window.addEventListener("mousemove", (e) => {
  gsap.to(light, {
    x: e.clientX,

    y: e.clientY,

    duration: 0.35,

    ease: "power2.out",
  });
});

gsap.utils.toArray(".transition-text h2").forEach((title) => {
  gsap.to(title, {
    color: "#ffffff",

    scale: 1.08,

    scrollTrigger: {
      trigger: title,

      start: "top center",

      end: "bottom center",

      scrub: true,
    },
  });
});

gsap.from(".about-left", {
  x: -120,

  opacity: 0,

  duration: 1.2,

  scrollTrigger: {
    trigger: ".about",

    start: "top 70%",
  },
});

gsap.from(".about-right", {
  x: 120,

  opacity: 0,

  duration: 1.2,

  scrollTrigger: {
    trigger: ".about",

    start: "top 70%",
  },
});

gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),

  ease: "none",

  scrollTrigger: {
    trigger: ".horizontal",

    pin: true,

    scrub: 1,

    snap: 1 / (panels.length - 1),

    end: () => "+=" + document.querySelector(".pin-wrap").offsetWidth,
  },
});

gsap.utils.toArray(".panel img").forEach((img) => {
  gsap.to(img, {
    y: -80,

    ease: "none",

    scrollTrigger: {
      trigger: img,

      scrub: true,
    },
  });
});

gsap.utils.toArray(".panel").forEach(panel=>{

    gsap.from(panel.querySelector("h2"),{

        x:-120,

        opacity:0,

        duration:1,

        scrollTrigger:{

            trigger:panel,

            containerAnimation:ScrollTrigger.getAll()[0],

            start:"left center"

        }

    });

    gsap.from(panel.querySelector("p"),{

        y:80,

        opacity:0,

        duration:1,

        delay:.2,

        scrollTrigger:{

            trigger:panel,

            containerAnimation:ScrollTrigger.getAll()[0],

            start:"left center"

        }

    });

});

gsap.to(".progress-fill",{

    width:"100%",

    ease:"none",

    scrollTrigger:{

        scrub:true

    }

});

gsap.from(".portfolio-heading",{

    y:100,

    opacity:0,

    duration:1,

    scrollTrigger:{

        trigger:".portfolio",

        start:"top 75%"

    }

});

gsap.utils.toArray(".card").forEach(card=>{

    gsap.from(card,{

        y:120,

        opacity:0,

        duration:.8,

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});

const counters = document.querySelectorAll(".count");

counters.forEach(counter=>{

    ScrollTrigger.create({

        trigger:counter,

        start:"top 80%",

        once:true,

        onEnter:()=>{

            let target = +counter.dataset.count;

            let value = 0;

            let speed = target / 70;

            const update = ()=>{

                value += speed;

                if(value < target){

                    counter.innerText = Math.ceil(value);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            }

            update();

        }

    });

});

gsap.utils.toArray(".testimonial-card").forEach((card,index)=>{

    gsap.from(card,{

        y:100,

        opacity:0,

        duration:1,

        delay:index*0.15,

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});

const storyPanels = gsap.utils.toArray(".story-panel");

gsap.to(storyPanels,{

    xPercent:-100*(storyPanels.length-1),

    ease:"none",

    scrollTrigger:{

        trigger:".story-section",

        pin:true,

        scrub:1,

        snap:1/(storyPanels.length-1),

        end:()=>"+="+document.querySelector(".story-track").offsetWidth

    }

});

gsap.utils.toArray(".story-panel").forEach(panel=>{

    gsap.to(panel.querySelector("h2"),{

        y:0,

        opacity:1,

        duration:1,

        scrollTrigger:{

            trigger:panel,

            containerAnimation:ScrollTrigger.getAll()[1],

            start:"left center"

        }

    });

});

const spotlight = document.querySelector(".spotlight");

window.addEventListener("mousemove",(e)=>{

    gsap.to(spotlight,{

        x:e.clientX,

        y:e.clientY,

        duration:.6,

        ease:"power2.out"

    });

});

gsap.utils.toArray(".light-line").forEach(line=>{

    gsap.to(line,{

        x:1800,

        duration:2.5,

        ease:"power2.inOut",

        repeat:-1,

        repeatDelay:1

    });

});

const introTimeline = gsap.timeline({

    scrollTrigger:{

        trigger:".cinematic-intro",

        start:"top top",

        end:"+=200%",

        pin:true,

        scrub:1

    }

});

introTimeline

.to(".intro-line",{

    y:0,

    opacity:1,

    stagger:0.4

})

.to(".intro-line",{

    scale:1.4,

    ease:"none"

})

.to(".cinematic-intro",{

    background:"#0b1120"

});