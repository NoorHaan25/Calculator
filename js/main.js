const exit = document.getElementById("close");
const navFixed = document.getElementById("nav-fixed");
const iconsMenu = document.getElementById("icons-menu");
const setting = document.getElementById("setting");
const bodyElement = document.querySelector("body");
const darkMood = document.getElementById("dark-mood");
const lightMood = document.getElementById("light-mood");
let theme = "";
console.log(bodyElement);
exit.addEventListener("click", function () {
  navFixed.classList.replace("display-b", "display-n");
  this.classList.replace("display-b", "display-n");
  this.previousElementSibling.classList.replace("display-n", "display-b");
  iconsMenu.style.cssText = "right: 0;";
});
setting.addEventListener("click", function () {
  navFixed.classList.replace("display-n", "display-b");
  this.nextElementSibling.classList.replace("display-n", "display-b");
  this.classList.replace("display-b", "display-n");
  console.log("nextt", this.nextElementSibling);
  iconsMenu.style.cssText = "right: 0;";
});
darkMood.addEventListener("click", function () {
  bodyElement.classList.add("dark-mood");
  this.style.cssText = "color : #000000";
  lightMood.style.cssText = "color : #777";
  theme = "dark";
  localStorage.setItem("themeCalc", JSON.stringify(theme));
  console.log("theme: " + theme);
});
lightMood.addEventListener("click", function () {
  bodyElement.classList.remove("dark-mood");
  this.style.cssText = "color : #ffffff";
  darkMood.style.cssText = "color : #777";
  theme = "light";
  localStorage.setItem("themeCalc", JSON.stringify(theme));
  console.log("theme: " + theme);
});
const getTheme = JSON.parse(localStorage.getItem("themeCalc"));
console.log('hh' , getTheme);
if(getTheme === 'dark'){
  // console.log('dark');
  bodyElement.classList.add("dark-mood");
}else{
  // console.log('light');
  bodyElement.classList.remove("dark-mood");
}
