
function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // Create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");

    // Parents and child set their respective class
    parent.classList.add("parent");
    child.classList.add("child");

    // Span parent gets child and child gets elem functions
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    // elem replaces its value with the parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  })
  var x = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    timeStyle: "medium",
    hourCycle: "h24",
  });
  var y = new Date().toLocaleString("en-US", {
    timeZone: "Europe/London",
    timeStyle: "medium",
    hourCycle: "h24",
  });
  document.getElementById("time").textContent = x;
  document.getElementById("gmt_time").textContent = y;





}

function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });

  document.querySelectorAll("#Visual>g").forEach(function (e) {
    var character = e.childNodes[1].childNodes[1];

    character.style.strokeDasharray = character.getTotalLength() + "px";

    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });
}


function loaderAnimation(){

    var tl = gsap.timeline();

    tl.from("#loader .child span", {
      x: 100,
      duration: 1.4,
      stagger: 0.2,
      ease: Power3.easeInOut,
    })
      .to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut,
      })
      .to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut,
      })
      .to("#green", {
        height: "100%",
        top: 0,
        duration: 1.8,
        delay: -0.8,
        ease: Circ.easeInOut,
      })
      .to("#green", {
        height: "0%",
        top: 0,
        duration: 1,
        delay: -0.6,
        ease: Circ.easeInOut,
      });
}


function animateSvg() {
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
}

function animateHomePage() {
  var tl = gsap.timeline();

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home span.child", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to("#home .row img", {
      opacity: 1,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateSvg();
      },
    });
}

revealToSpan();
loaderAnimation();


animateHomePage();

valueSetters();








