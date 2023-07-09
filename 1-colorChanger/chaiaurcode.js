console.log("Hello")
const button = document.querySelectorAll(".button")
const body = document.querySelector("body")
const tag = document.getElementsByClassName("button")

  for(i=0;i<tag.length;i++) {
    tag[i].addEventListener("click",function (e){
      body.style.backgroundColor = e.target.id
      alert(e.target.id," is clicked ")
      
    })
  }