let toDoList = document.getElementById("ToDoList")
let submit = document.getElementById("submit")


submit.addEventListener("click", () => {
    let content = document.getElementById("content")
    var name = document.getElementById("name")

    let box = document.createElement("div");
    box.className = "form-control";

    let item = document.createElement("div")
    item.className = "row"

    let text = document.createElement("div")
    text.textContent = name.value + "  :  " + content.value
    text.className = "col-10"

    let rmBtn = document.createElement("button");
    rmBtn.className = "col-2 btn btn-primary";
    rmBtn.textContent = "🗑️";
    rmBtn.style.backgroundColor = "white"

    rmBtn.style.borderColor = "white"



    item.appendChild(text)
    item.appendChild(rmBtn)
    box.appendChild(item)

    toDoList.appendChild(box)

    name.value = content.value = ""


    rmBtn.addEventListener("click", () => {
        box.parentNode.removeChild(box)


    })

})