dd();
function ll(){
  var y=document.getElementsByClassName("item");
  for(i=0;i<4;i++){
    y[i].addEventListener("mouseover",function(){
    this.style.backgroundColor="#e1e3f0";
  })
    y[i].addEventListener("mouseout",function(){
    this.style.backgroundColor="#f0f3fa";
  })
  }
  y[3].addEventListener("mouseover",function(){

    this.classList.remove("light");
    this.classList.add("light-clicked");
  })
    y[3].addEventListener("mouseout",function(){

      this.classList.add("light");
      this.classList.remove("light-clicked");
    })
}
function dd(){
  var y=document.getElementsByClassName("item");
  for(i=0;i<4;i++)
  if(i!=3){
    y[i].addEventListener("mouseover",function(){
    this.style.backgroundColor="#333a56";
  })
    y[i].addEventListener("mouseout",function(){
    this.style.backgroundColor="#252b43";
  })
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
