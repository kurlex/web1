dd();
function fgrey(){
this.style.backgroundColor="#e1e3f0";
}
function fwhite(){
this.style.backgroundColor="#f0f3fa";
}
function fgrey_insta(){
  this.classList.remove("light");
  this.classList.add("light-clicked");
}
function fwhite_insta(){
  this.classList.remove("light-clicked");
  this.classList.add("light");
}
function ll(){
  var y=document.getElementsByClassName("item");
  for(i=0;i<4;i++)
  if(i!=2){
    y[i].addEventListener("mouseover",fgrey)
    y[i].addEventListener("mouseout",fwhite)
    y[i].removeEventListener("mouseover",ldark)
    y[i].removeEventListener("mouseout",ddark)
  }
  y[2].addEventListener("mouseover",fgrey_insta)
  y[2].addEventListener("mouseout",fwhite_insta)
  y[2].removeEventListener("mouseover",ldark_insta)
  y[2].removeEventListener("mouseout",ddark_insta)
y=document.getElementsByClassName("item1");
for(i=0;i<8;i++){
  y[i].addEventListener("mouseover",fgrey);
  y[i].addEventListener("mouseout",fwhite);
  y[i].removeEventListener("mouseover",ldark);
  y[i].removeEventListener("mouseout",ddark);
}
}
function ldark(){
this.style.backgroundColor="#333a56";
}
function ddark(){
this.style.backgroundColor="#252b43";
}
function ldark_insta(){
  this.classList.remove("dark");
  this.classList.add("dark-clicked");
}
function ddark_insta(){
  this.classList.remove("dark-clicked");
  this.classList.add("dark");
}
function dd(){
  var y=document.getElementsByClassName("item");
  for(i=0;i<4;i++)
  if(i!=2){
    y[i].removeEventListener("mouseover",fgrey)
    y[i].removeEventListener("mouseout",fwhite)
    y[i].addEventListener("mouseover",ldark);
    y[i].addEventListener("mouseout",ddark);
  }
  y[2].removeEventListener("mouseover",fgrey_insta)
  y[2].removeEventListener("mouseout",fwhite_insta)
  y[2].addEventListener("mouseover",ldark_insta);
  y[2].addEventListener("mouseout",ddark_insta);
  y=document.getElementsByClassName("item1");
  for(i=0;i<8;i++){
    y[i].addEventListener("mouseover",ldark);
    y[i].addEventListener("mouseout",ddark);
    y[i].removeEventListener("mouseover",fgrey);
    y[i].removeEventListener("mouseout",fwhite);
  }
}
document.getElementsByClassName("slider")[0].addEventListener("click",function(){
  var x=document.getElementById("d-l");
  if(x.innerHTML=="Dark Mode")
  {tolight();
    ll();
  x.innerHTML="Light Mode";
}else{
  todark();
  dd();
  x.innerHTML="Dark Mode";
}})

function tolight(){
document.getElementsByTagName("body")[0].style.backgroundImage="url('images/lightmode.png')";
var x=document.getElementsByClassName("item")
for(i=0;i<4;i++)
  x[i].style.backgroundColor="#f0f3fa";
document.getElementsByClassName("rounded")[0].classList.remove("dark");
document.getElementsByClassName("rounded")[0].classList.add("light");
x=document.getElementsByClassName("item1");
for(i=0;i<8;i++)
  x[i].style.backgroundColor="#f0f3fa";
x=document.getElementsByClassName("fff");
for(i=0;i<=13;i++){
    x[i].classList.add("dar");
  x[i].classList.remove("whi");
}
document.getElementById("tit").style.color="#868fae";
x=document.getElementsByClassName("aaa");
for(i=0;i<4;i++){
    x[i].classList.remove("gri");
  x[i].classList.add("dar");
}
}
function todark(){
  document.getElementsByTagName("body")[0].style.backgroundImage="url('images/darkmode.png')";
  var  x=document.getElementsByClassName("item")
  for(i=0;i<4;i++)
    x[i].style.backgroundColor="#252b43";
    document.getElementsByClassName("rounded")[0].classList.remove("light");
    document.getElementsByClassName("rounded")[0].classList.add("dark");
    x=document.getElementsByClassName("item1")
    for(i=0;i<8;i++)
      x[i].style.backgroundColor="#252b43";
      x=document.getElementsByClassName("fff");
      for(i=0;i<=13;i++){
        x[i].classList.add("whi");
        x[i].classList.remove("dar");
      }
      x=document.getElementsByClassName("aaa");
      for(i=0;i<4;i++){
          x[i].classList.remove("dar");
        x[i].classList.add("gri");
      }
}
