/*Dynamic Greeting: 
○ Create a variable with a user’s name and initialize it  
○ Render a dynamic greeting for the user inside an <h1> element. */

function greeting () {
const userName = "Alex";
const element = <h1>Welcome, {userName}!</h1>;
    return element;
}
greeting();

export default greeting;