function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/339a895eb98f40be83c09fddbc1a866c/appointmentData",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  document.addEventListener("DOMContentLoaded", ()=>{
    const data=axios
    .get(
      "https://crudcrud.com/api/339a895eb98f40be83c09fddbc1a866c/appointmentData",
    )
    .then((response) => {
        for(let i=0;i<response.data.length;i++){
            displayUserOnScreen(response.data[i]);
        }
    })
    .catch((error) => console.log(error));
 });
 
 function deleteUser(user_id) {
  axios
      .delete(
        `https://crudcrud.com/api/339a895eb98f40be83c09fddbc1a866c/appointmentData/${user_id}`,
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
 }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function(event){
      deleteUser(userDetails._id);
      userList.removeChild(event.target.parentElement);
    });
  
    editBtn.addEventListener("click", function (event) {
      deleteUser(userDetails._id);
      userList.removeChild(event.target.parentElement);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }
  
  