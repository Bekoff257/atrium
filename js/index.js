





$(document).ready(function () {
  toggleFullpageSliderMode();
  handleSlick();
  handleScrollThrottle();
  handleKeyboardArrows();
  onClickFunc();
  onClickContactPage();
  onClickProjectPage();
});
// function changeAboutPage() {
//   toggleFullpageSliderMode()
//   onClickFunc()
// }
//--
function toggleFullpageSliderMode() {
  if ($(".fullpage-slider").length) {
    $("body").css("overflow", "hidden");
  }
}
//--------------------
var fullpageSliderSelector = ".fullpage-slider";
var url = "";
function handleSlick() {
  $(fullpageSliderSelector).slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}
function handleKeyboardArrows() {
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        $(fullpageSliderSelector).slick("slickPrev");
        break;

      case 38: // up
        $(fullpageSliderSelector).slick("slickPrev");
        break;

      case 39: // right
        $(fullpageSliderSelector).slick("slickNext");
        break;

      case 40: // down
        $(fullpageSliderSelector).slick("slickNext");
        break;

      default:
        return;
    }
    e.preventDefault();
  });
}

function handleScrollThrottle() {
  var scrollDirection = "";
  var callbackTimeOut = 500;

  window.addEventListener("wheel", function (e) {
    if (e.deltaY < 0) {
      scrollDirection = "up";
    }
    if (e.deltaY > 0) {
      scrollDirection = "down";
    }
    if (e.deltaX < 0) {
      scrollDirection = "left";
    }
    if (e.deltaX > 0) {
      scrollDirection = "right";
    }
  });
  window.addEventListener("wheel", throttle(callback, callbackTimeOut));

  function throttle(fn, wait) {
    console.log(url, "URL");

    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  function callback() {
    //capture ONE scroll event
    if (scrollDirection == "down" || scrollDirection == "right") {
      $(fullpageSliderSelector).slick("slickNext");
      if (url === "") {
        url = "about";
      }
      if (url === "about") {
        url = "contact";
      }
    }
    if (scrollDirection == "up" || scrollDirection == "left") {
      $(fullpageSliderSelector).slick("slickPrev");
      if (url === "contact") {
        url = "about";
      }
      if (url === "about") {
        url = "";
      }
    }
  }
}
function onClickFunc() {
  var callbackTimeOut = 500;
  const el = document.getElementById("aboutPage");
  el.addEventListener("click", throttle(callback, callbackTimeOut));

  function throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }
  function callback() {
    const inputcheck = document.getElementById("humburger_input");
    if (url === "") {
      $(fullpageSliderSelector).slick("slickNext");
      url = "about";
      if (inputcheck.checked === true) {
        inputcheck.checked = false;
        isChecked();
      }
    }
    if (url === "contact") {
      $(fullpageSliderSelector).slick("slickPrev");
      url = "about";
    }
    if (url === "about") {
      if (inputcheck.checked === true) {
        inputcheck.checked = false;
        isChecked();
      }
    }
  }
}
function onClickContactPage() {
  var callbackTimeOut = 500;
  const el = document.getElementById("contactPage");
  el.addEventListener("click", throttle(callback, callbackTimeOut));

  function throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }
  function callback() {
    const inputcheck = document.getElementById("humburger_input");
    if (url === "") {
      $(fullpageSliderSelector).slick("slickNext");
      setTimeout(() => {
        $(fullpageSliderSelector).slick("slickNext");
      }, 500);
      url = "contact";
      if (inputcheck.checked === true) {
        inputcheck.checked = false;
        isChecked();
      }
    }
    if (url === "about") {
      $(fullpageSliderSelector).slick("slickNext");
      url = "contact";
    }
    if (url === "contact") {
      if (inputcheck.checked === true) {
        inputcheck.checked = false;
        isChecked();
      }
    }
  }
}
function onClickProjectPage() {
  var callbackTimeOut = 500;
  const el = document.getElementById("projectPage");
  el.addEventListener("click", throttle(callback, callbackTimeOut));

  function throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }
  function callback() {
    const inputcheck = document.getElementById("humburger_input");
    if (url === "contact") {
      $(fullpageSliderSelector).slick("slickPrev");
      setTimeout(() => {
        $(fullpageSliderSelector).slick("slickPrev");
      }, 500);
      url = "";
      if (inputcheck.checked === true) {
        inputcheck.checked = false;
        isChecked();
      }
    }
    if (url === "about") {
      $(fullpageSliderSelector).slick("slickPrev");
      url = "";
    }
    if (url === "") {
      if (inputcheck.checked === true) {
        inputcheck.checked = false;
        isChecked();
      }
    }
  }
}
const changeIndexHtml = () =>{
  const inputcheck = document.getElementById("humburger_input");
  inputcheck.checked = false;
}







const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  Infinity: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  // And if we need scrollbar
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper1 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper2,
  },
});

const isChecked = () => {
  const inputcheck = document.getElementById("humburger_input");
  if (inputcheck.checked === true) {
    console.log("true boldi");
    document.getElementById("bg_1_text").style.display = "none";
  } else {
    console.log("false bo'ldi");
    document.getElementById("bg_1_text").style.display = "block";
  }
};
isChecked(false);


const nextpage = () => {
  return "slick-active";
};





