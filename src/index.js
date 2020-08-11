document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
  let ul = document.getElementById("tasks");
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log("clicked") 
    let task = document.getElementById("new-task-description").value
   
    let li = document.createElement("li");
    
    let colors = document.getElementById("colors")
    li.innerHTML = `${task}  

    <button class="x">x</button>
    `
    ul.appendChild(li)

     if (colors.value == "red-color"){
       li.style.color = "red"
     }else if(colors.value == "yellow-color"){
      li.style.color = "yellow"
     } else {
      li.style.color = "green"
     }

  })
  ul.addEventListener('click', function(e){
    let li = e.target.parentNode 
    li.remove()
  })
});
