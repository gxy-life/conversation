const content = document.querySelector(".content");
const animationTarget = document.querySelectorAll(".textAni");

for (let i = 0; i < data.length; i++) {
  const element = data[i];
  const div = document.createElement("div");
  const img = document.createElement("img");
  const div2 = document.createElement("div");

  div.classList.add("wrapper");
  img.src = element.img;
  if(i%2 == 0){
    div2.classList.add("personA");
  } else{
    div2.classList.add("personB");
  }
  div2.classList.add("textAni")
  content.appendChild(div);
  div.appendChild(img);
  div.appendChild(div2);

  const texts = element.text;

  textsArray = [];

  for (let j = 0; j < texts.split("").length; j++) {
    const textT = texts.split("")[j];
    if (textT === " ") {
      textsArray.push(" ");
    } else {
      textsArray.push(
        '<span><span style="animation-delay:' +
          (j * 0.1 + 0.2) +
          's;">' +
          textT +
          "</span></span>"
      );
    }
  }

  for (let k = 0; k < textsArray.length; k++) {
    div2.innerHTML += textsArray[k];
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelectorAll(".wrapper");
  const img = document.querySelectorAll("img");

  for (let i = 0; i < img.length; i++) {
    const element = img[i];
    element.addEventListener("click", ()=>{
      element.previousElementSibling.style.display = "block";
    })
  }

  window.addEventListener("scroll", function () {
    
    for (let i = 0; i < wrapper.length; i++) {
      const element = wrapper[i];
      const distance = element.getBoundingClientRect().top
	+ window.innerHeight*.2;
      if (window.innerHeight > distance) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  });
  
  
});
