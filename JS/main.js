//==============get elements====================
let taskInput = document.getElementById('task');
let taskButton = document.getElementById('btn');
let listofTodo55 = document.getElementById('listofTodo55')
let notasks = document.getElementById('notasks')



/* let allTasks = document.getElementById('allTasks');
let noTasks = document.getElementById('noTasks'); */


togglefordiv()
/* ============ toggle dix now tasks */

 function togglefordiv(){
    if(listofTodo55.childElementCount == 0){
        notasks.style.display = "block";
        console.log("block");
    }else{
        notasks.style.display = "none";
    }
 }



/* ============= validation not less than 3 Chrac. */
taskButton.addEventListener("click", addNewTask)



function addNewTask() {
    let newTask = taskInput.value
    
    let space = 0
    let stringWithoutSpaces = newTask.split("")
/* 
    for (let i = 0; i < stringWithoutSpaces.length; i++) {
       
        if (stringWithoutSpaces[i] = " ") {
            space += 1;
        }  

    }
 */

    if (newTask.trim().length <3 ){
       window.alert("Task Must Be At Least 3 Chrachters")
    }else{ var newDix = ` <li> <h3 class="Task"> ${newTask} </h3> </li>  `
    listofTodo55.innerHTML += newDix;
    togglefordiv()
    taskInput.value = ""
    }

  

/*     console.log("Count Spaces: " +space);
    console.log(space - stringWithoutSpaces.length );
    console.log(newTask.trim()); */



    /* 
    document.getElementById("myInput").value.length */



}
/*     if (countNewData <= 3){
        window.alert("Your Task Must be More Than 3 Charters")
    }else
    console.log(newData);
    console.log(countNewData);
    console.log(task.value);
}
) */

document.addEventListener('click',(e)=>{
   if( e.target.classList.contains('Task')){
    e.target.classList.toggle('done')
    togglefordiv()
   }
}) 
document.addEventListener('dblclick',(e)=>{
    if( e.target.classList.contains('Task')){
     e.target.parentElement.remove()
     togglefordiv()
    }
 }) 