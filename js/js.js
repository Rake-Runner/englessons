var openMenu = function openMenu() {
    document.getElementById("menu_item").style.display = "block";
    document.getElementById("About_author").style.display = "none";
    document.getElementById("menu_link").style.display = "none";
  };
  
  var closeMenu = function closeMenu() {
    document.getElementById("menu_item").style.display = "none";
    document.getElementById("About_author").style.display = "block";
    document.getElementById("menu_link").style.display = "block";
  };
  
  var chapterOne = function chapterOne() {
    closeMenu();
    document.getElementById("chapter_why").style.display = "none";
    document.getElementById("chapter_one").style.display = "block";
  };
  
  var chapterWhy = function chapterWhy() {
    closeMenu();
    document.getElementById("chapter_why").style.display = "block";
    document.getElementById("chapter_one").style.display = "none";
  };
  var chapterTwo = function chapterTwo(){
    closeMenu();
    document.getElementById("chapter_why").style.display = "none";
    document.getElementById("chapter_one").style.display = "none";
    document.getElementById("chapter_two").style.display = "block";

  }
  var myApp = function myApp(){
    closeMenu();
    document.getElementById("chapter_why").style.display = "none";
    document.getElementById("chapter_one").style.display = "none";
    document.getElementById("chapter_two").style.display = "none";

  }
  
  var menuIcon = document.getElementById("menu_link");
  var menuBack = document.getElementById("back_menu");
  var chWhy = document.getElementById("why");
  var chOne = document.getElementById("ch1");
  var chTwo = document.getElementById("ch2");
  var myAppLink = document.getElementById("app1");
  menuIcon.addEventListener("click", openMenu);
  menuBack.addEventListener("click", closeMenu);
  chWhy.addEventListener("click", chapterWhy);
  chOne.addEventListener("click", chapterOne);
  chTwo.addEventListener("click", chapterTwo);
  myAppLink.addEventListener("click", myApp);