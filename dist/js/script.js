// LARGE SCREEN EXTENDED MENU

const moreBtn = document.querySelector(".more-btn-1");
const plusMinus = document.querySelector(".plus-minus");
const extendedMenu = document.querySelector(".extended-menu");

const extendedMenuToggle = () => {
  if(plusMinus.firstElementChild.classList.contains("fa-minus")) {
    extendedMenu.classList.add("open-1");
  } else if (plusMinus.firstElementChild.classList.contains("fa-plus")) {
    extendedMenu.classList.remove("open-1")
  }
};

const plusMinusToggle = () => {
  if(plusMinus.firstElementChild.classList.contains("fa-plus")) {
    plusMinus.firstElementChild.classList.remove("fa-plus");
    plusMinus.firstElementChild.classList.add("fa-minus");
  } else if (plusMinus.firstElementChild.classList.contains("fa-minus")) {
    plusMinus.firstElementChild.classList.remove("fa-minus");
    plusMinus.firstElementChild.classList.add("fa-plus");
  }
};

const openExtendedMenu = () => {
  plusMinusToggle();
  extendedMenuToggle();
};

// SMALL SCREEN MENU
const header = document.querySelector("header");
const mobileMoreBtn = document.querySelector(".mobile-more-btn");
const logo = document.querySelector(".logo");
const caret = document.querySelector(".fa-caret-down");
const mobileMenu = document.querySelector(".mobile-menu");

const caretToggle = () => {
  if (caret.classList.contains("fa-caret-down")) {
    caret.classList.remove("fa-caret-down");
    caret.classList.add("fa-caret-up");
  } else if (caret.classList.contains("fa-caret-up")) {
    caret.classList.remove("fa-caret-up");
    caret.classList.add("fa-caret-down");
  }
}

const mobileMenuToggle = () => {
  if (caret.classList.contains("fa-caret-up")) {
    mobileMenu.classList.remove("mobile-menu-closed");
    animateMobileMenuDown()
    header.style.backgroundColor = "#0000ff"
    header.style.position = "relative"
    header.style.zIndex = "5"
    mobileMoreBtn.style.color = "#FFFFFF";
    logo.style.color = "#FFFFFF";
  } else if (caret.classList.contains("fa-caret-down")) {
    animateMobileMenuUp()
    header.style.backgroundColor = "#FFFFFF"
    header.style.zIndex = "2"
    mobileMoreBtn.style.color = "#000000";
    logo.style.color = "#000000";
    mobileMenu.classList.add("mobile-menu-closed");
  }
}

const openMobileMenu = () => {
  caretToggle()
  mobileMenuToggle()
};

// ANIMATIONS
const animateMobileMenuDown = () => {
  if (caret.classList.contains("fa-caret-up")) {

    const keyframes = [
      {
        transform: "translateY(-800px)"
      },
      {
        transform: "translateY(0px)"
      }
    ];

    const timingOptions = {
      duration: 500,
      easing: "ease-in"
    };

    mobileMenu.animate(keyframes, timingOptions);
  }  
}

const animateMobileMenuUp = () => {
  if (caret.classList.contains("fa-caret-down")) {

    const keyframes = [
      {
        transform: "translateY(0px)"
      },
      {
        transform: "translateY(-800px)"
      }
    ];

    const timingOptions = {
      duration: 500,
      easing: "ease-in"
    };

    mobileMenu.animate(keyframes, timingOptions)
  }

}

// EVENT LISTENERS
moreBtn.addEventListener("click", openExtendedMenu);
mobileMoreBtn.addEventListener("click", openMobileMenu);