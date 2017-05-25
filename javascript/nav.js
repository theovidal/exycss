window.onload=function(){
  var mobileBtn = document.querySelector("header.exy-header__container div.exy-header__mobile-menu a.exy-header__mobile-btn");
  mobileBtn.addEventListener("click", function () {
    var mobileNav = document.querySelector("ul.exy-header__mobile-nav");
    mobileNav.style.display = "block";
    var mobileNavFlex = document.querySelector("ul.exy-header__mobile-nav.exy-header__oneline-mobile");
    mobileNavFlex.style.display = "flex";
  });
  var mobileClose = document.querySelector("ul.exy-header__mobile-nav a.exy-header__close-mobile");
  mobileClose.addEventListener("click", function () {
    var mobileNav = document.querySelector("ul.exy-header__mobile-nav");
    mobileNav.style.display = "none";
  });
}
