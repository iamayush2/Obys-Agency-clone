function loadinganimate() {
  let counter = document.querySelector(".countercont h5");
  let now = document.querySelector("#now");
  let count = 0;

  let int = setInterval(() => {
    if (count < 100) {
      count++;
      counter.textContent = count;
      if (
        (count >= 10 && count <= 25) ||
        (count >= 40 && count <= 60) ||
        (count >= 80 && count <= 95)
      ) {
        now.style.opacity = 0;
        now.classList = "nowstyle";
        now.style.opacity = 1;
      } else {
        now.classList = "";
      }
    } else {
      counter.textContent = 100;
      clearInterval(int);
    }
  }, 35);

  var tl = gsap.timeline();

  tl.from(".linecont h1 , .linecont h2", {
    y: 1000,
    stagger: 0.2,
    duration: 0.4,
    //   delay: 0.1,
    onstart: function () {},
  });
  tl.to("f", {
    opacity: 0,

    duration: 0.3,
    stagger: 0.1,
  });
  tl.to(".linecont h1 , .linecont h2", {
    opacity: 0,
    delay: 2.5,
    duration: 0.3,
    stagger: 0.1,
  });
  tl.to(".lowload", {
    opacity: 0,
    display: "none",
    postion: "relative",
  });
  tl.to("#loader", {
    opacity: 0,
    //   delay: 1,
    duration: 0.2,
  });
  tl.from(".page1", {
    y: 1000,
    opacity: 0,
    duration: 0.5,
  });
  tl.to("#loader", {
    display: "none",
  });
}

loadinganimate();
