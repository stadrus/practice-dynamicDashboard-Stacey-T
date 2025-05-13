/*Render a Task List: 
○ Create an array of task objects, each with a taskName and completed 
status.  
○ Use the map method to render each task of these in a list. Show the 
task name with: 
■ A ✅ emoji if it’s completed. 
■ A ❌ emoji if it’s not completed.*/
function taskList () {
 const taskObjects = [
    {taskName: "Create greeting", completed : '\u2705'},
    {taskName: "Create content", completed: '\u274C'},
    {taskName: "Render a task", completed: '\u2705'},
]   
const taskList = taskObjects.map((taskObjects) => <li>{taskObjects.taskName}, {taskObjects.completed} </li>);
return <ul>{taskList}</ul>;
}
export default taskList;