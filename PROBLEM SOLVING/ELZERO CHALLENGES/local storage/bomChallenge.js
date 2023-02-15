let userInput = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
// empty array to store data
let myTaskArray = [];


// get old data and store it in myTaskArray to make sure you don't push new data in empty array 
if (localStorage.getItem("tasks")) 
    myTaskArray = JSON.parse(localStorage.getItem("tasks"))
    
//check local storage if there is any data  to show ?
function checkLocalStorage() {
    if (window.localStorage.getItem("tasks")) {
        let tasks = JSON.parse(window.localStorage.getItem("tasks"));
        viewTasks(tasks);
    } 
}
//trigger checkLocalStorage
checkLocalStorage();

// when submit with valid value  trigger myTaskArray 
submit.addEventListener('click', function () {
    // handel user inputs if valid store it in array and trigger createTaskDiv function
    if (userInput.value !== "") {
        addToArray(userInput.value)
        userInput.value = "";
    }
});

// store user input in myTaskArray 
function addToArray(taskValue) {
    const task = {
        id: Date.now(),
        title: taskValue,
    };
    myTaskArray.push(task);
    //trigger view tasks
    viewTasks(myTaskArray);
    // store in local storage 
    storeInLocalStorage(myTaskArray);
};
 
function viewTasks(myTaskArray) {
    // empty tasks div  to avoid repeat whole data every time
    tasks.innerHTML = "";
    // iterate over array by forEach and create div with delete button 
    myTaskArray.forEach((task) => {
        let tasksDiv = document.createElement("div");
        tasksDiv.setAttribute("data-id", task.id)// important use it to specify task div
        tasksDiv.appendChild(document.createTextNode(task.title));
        // create the delete button 
        let span = document.createElement("span");
        span.className = "delete";
        span.appendChild(document.createTextNode("Delete"));
        tasksDiv.appendChild(span);
        tasks.appendChild(tasksDiv);

        getStyle(tasksDiv,span)// style the tasksDiv
    });
}

function storeInLocalStorage(myTaskArray) {
    window.localStorage.setItem("tasks",JSON.stringify(myTaskArray));
}
// deal with delete process . 
tasks.addEventListener("click", (e) => {
    // when i click on div . i have 2 elements task and span so first i need to know which one is clicked 
    if (e.target.classList.contains("delete")) {
   
        //now i need to remove that task from local storage i use benefit of id 
        deleteFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
        
        // now i don't need parent element so  i can delete it now
        e.target.parentElement.remove()
    }
});

// remove task name from array and store it with new data  using filter 
function deleteFromLocalStorage(target) {
    myTaskArray = myTaskArray.filter((task) => task.id != target);
    // store new array after delete 
    storeInLocalStorage(myTaskArray)
}

function getStyle(div, span) {
    div.style.cssText =
        `
        background-color:#eee;
        margin:10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 10px 8px 30px ;
        font-size:1rem;
        border-radius:10px;
        text-transform:capitalize
    ` ;
    span.style.cssText = 
    `
        background-color:#e1306c;
        padding:3px 10px;
        color:#fff; 
         border-radius:10px;
        cursor:pointer
    `
}