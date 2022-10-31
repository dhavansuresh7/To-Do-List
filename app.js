const addBtn = document.querySelector(".add")
const tasks = document.querySelector(".tasks-div")
const taskInput = document.querySelector(".input-task")
const dateInput = document.querySelector(".input-date")
const timeInput = document.querySelector(".input-time")


addBtn.addEventListener('click', function () {
    if (taskInput.value != "" && dateInput.value != "" && timeInput.value != "") {
        const taskDiv = document.createElement("div")
        taskDiv.className = "task"

        const task = document.createElement("input")
        task.type = "text"
        task.value = taskInput.value
        task.disabled = true
        const date = document.createElement("input")
        date.type = "date"
        date.value = dateInput.value
        date.style.fontSize = "10px"
        date.disabled = true
        const time = document.createElement("input")
        time.type = "time"
        time.value = timeInput.value
        time.style.fontSize = "10px"
        time.disabled = true

        const delBtn = document.createElement("button")
        delBtn.textContent = "del"

        const editBtn = document.createElement("button")
        editBtn.textContent = "edit"

        
        taskDiv.append(date, time, task, delBtn, editBtn)
        tasks.append(taskDiv)

        taskInput.value = ""
        dateInput.value = ""
        timeInput.value = ""
        taskInput.focus()

        delBtn.addEventListener('click', function () {
            taskDiv.remove()
        })

        editBtn.addEventListener('click', function () {
            if (editBtn.textContent == "edit") {
                editBtn.textContent = "Ok"
                task.disabled = false
                date.disabled = false
                time.disabled = false
            }
            else {
                task.disabled = true
                date.disabled = true
                time.disabled = true
                editBtn.textContent = "edit"
            }
        })

    }
    else {

        alert("Please enter the data");
    }

})