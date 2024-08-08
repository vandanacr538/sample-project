const divs=document.querySelectorAll("div");
const fruits=document.querySelector(".fruits");

const subHeading=document.createElement("h3");
const subHeadingText=document.createTextNode("Buy high quality organic fruits online");
subHeading.appendChild(subHeadingText);
divs[0].appendChild(subHeading);

subHeading.style.fontStyle="italic";

const para=document.createElement("p");
const paraText=document.createTextNode("Total fruits: 4");
para.appendChild(paraText);
divs[1].insertBefore(para,fruits);

para.setAttribute("id", "fruits-total");