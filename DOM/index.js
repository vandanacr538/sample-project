const mainHeading=document.querySelector("#main-heading");
mainHeading.style.textAlign="right";

const fruits=document.querySelector(".fruits");
fruits.style.backgroundColor="grey";
fruits.style.padding="30px";
fruits.style.margin="30px";
fruits.style.width="50%";
fruits.style.listStyleType="none";
fruits.style.borderRadius="5px";

const basketHeading=document.querySelector("#basket-heading");
basketHeading.style.marginLeft="30px";

const fruit=document.querySelectorAll(".fruit");
for(let i=0;i<fruit.length;i++){
  fruit[i].style.backgroundColor="white";
  fruit[i].style.padding="10px";
  fruit[i].style.margin="10px";
  fruit[i].style.borderRadius="5px";
}

// Write answer to the questions asked below:
basketHeading.style.color="brown";

const evenFruitItems=document.querySelectorAll(".fruit:nth-child(even)");
for(let i=0;i<evenFruitItems.length;i++){
  evenFruitItems[i].style.backgroundColor="brown";
  evenFruitItems[i].style.color="white";
}