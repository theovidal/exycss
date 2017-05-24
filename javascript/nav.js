window.onload=function(){
  var mobileBtn = document.querySelector("a.exy-header__mobile-btn");
  mobileBtn.addEventListener("click", function () {
    var mobileNav = document.querySelector("ul.exy-header__mobile-nav");
    mobileNav.style.display = "flex";
  });
}

function mobile_desactivate() {
  var mobileNav = document.querySelector("ul.exy-header__mobile-nav");
  mobileNav.style.display = "none";
}
