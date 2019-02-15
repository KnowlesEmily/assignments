axios.get("https://api.vschool.io/emily/todo").then(function (response) {
  todosToDos(response.data)
}).catch(function (error) {
  console.log(error)
})

function todosToDos(arr) {
  for (var i = 0; i < arr.length; i++) {

    var todoContainer = document.createElement("div")
    var input = document.createElement("input")
    var title = document.createElement("h4")
    var description = document.createElement("p")
    var imgUrl = document.createElement("IMG")
    var br = document.createElement("br")
    imgUrl.setAttribute("src", `${arr[i].imgUrl}`)
    var del = document.createElement("button")
    del.innerText = "Delete";
    todoContainer.id = arr[i]._id
    
    input.type = "checkbox"
    
    function deleteToDo(e) {
      axios.delete(`https://api.vschool.io/emily/todo/${e.target.parentElement.id}`).then(function (response) {
        e.target.parentElement.remove()
      }).catch(function (error) {
        console.log(error)
      });
    }
    
    input.addEventListener("click", handleChecked);
    del.addEventListener("click", deleteToDo)

    if (arr[i].completed) {
      todoContainer.classList.toggle("line");
      input.checked = true;
    }

    title.textContent = arr[i].title
    description.textContent = arr[i].description
    //idk if I need the thing below???
    imgUrl.textContent = arr[i].imgUrl
    br.textContent = arr[i].br

    todoContainer.appendChild(input)
    todoContainer.appendChild(title)
    todoContainer.appendChild(description)
    todoContainer.appendChild(imgUrl)
    todoContainer.appendChild(del)

    document.getElementById("name").appendChild(todoContainer)
  }
}

document.list.addEventListener("submit", function(e) {
  var url = "https://api.vschool.io/emily/todo";
  var newToDo = {
    "title": document.getElementById("title").value,
    "description": document.getElementById("description").value,
    "price": document.getElementById("price").value,
    "imgUrl": document.getElementById("image").value,
    "completed": document.getElementById("completed").value
  };
  axios.post(url, newToDo).then(function (response) {
    todosToDos([response.data]);
    list.title.value = "";
    list.description.value = "";
    list.price.value = "";
    list.image.value = "";
    list.completed.value = ""
  }).catch(function (error) {
    console.log(error)
  });
  e.preventDefault()
})

function handleChecked(e) {
  e.target.parentNode.classList.toggle("line");
  if (e.target.parentNode.classList.value === "line"){
    axios.put(`https://api.vschool.io/emily/todo/${e.target.parentElement.id}`, {
      completed: true
    }).then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    } else {
    axios.put(`https://api.vschool.io/emily/todo/${e.target.parentElement.id}`, {
      completed: false
    }).then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
      console.log(error)
    })
  }
}