// Add the Edit Button:
const fruit=document.querySelectorAll(".fruit");
const fruits=document.querySelector(".fruits");
const form=document.querySelector("form");

//Adding Edit button
for(let i=0;i<fruit.length;i++){
  const button=document.createElement("button");
  const buttonText=document.createTextNode("Edit");
  button.appendChild(buttonText);
  button.setAttribute("class", "edit-btn");
  fruit[i].appendChild(button);
}

//Adding functionality to delete button
fruits.addEventListener('click', function(event){
  if(event.target.classList.contains("delete-btn")){
    const fruitToDelete=event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});

//Adding to add new fruit 
form.addEventListener("submit", function(event){
  event.preventDefault();
  const fruitToAdd=document.getElementById("fruit-to-add");
  const addLi=document.createElement("li");
  addLi.innerHTML=fruitToAdd.value+
    '<button class="delete-btn">x</button>';
  const editButton=document.createElement("button");
  const editButtonText=document.createTextNode("Edit");
  editButton.appendChild(editButtonText);
  editButton.setAttribute("class", "edit-btn");
  addLi.appendChild(editButton);
  addLi.setAttribute('class','fruit');
  fruits.appendChild(addLi);
})
