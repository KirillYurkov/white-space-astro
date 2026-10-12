let headerNav = document.querySelector(".header-nav");
let subMenuList = document.querySelectorAll(".header-nav-submenu__list");
let burger=document.querySelector('.header__burger');

headerNav.addEventListener("click", (e) => {
  let btn = e.target.closest(".header-nav__btn");
  subMenuList.forEach((menu) => {
    {
      if (btn.dataset.button === menu.dataset.dropdownMenu) {
        menu.classList.toggle("header-nav-submenu__list--active");
        if (menu.classList.contains("header-nav-submenu__list--active")) {
          btn.setAttribute("aria-expanded", true);
          menu.setAttribute("aria-hidden", false);
        } else {
          btn.setAttribute("aria-expanded", false);
          menu.setAttribute("aria-hidden", true);
        }
      }
    }
  });
});
if(burger){
  burger.addEventListener('click',()=>{
    headerNav.classList.toggle('header-nav--active');
    document.body.classList.toggle('scroll-lock');
  })
}
