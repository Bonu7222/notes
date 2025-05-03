function myFunction() {
   
    const input = document.getElementById("note-input");
    const noteText = input.value.trim(); 
  
 
    if (noteText === "") return;

    const ul = document.querySelector(".notes ul");
  
    const li = document.createElement("li");
    li.className = "note-item";
    li.textContent = noteText;
  
    
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
  

    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation(); 
      li.remove();
    });
  
   
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    input.value = "";
  }
  