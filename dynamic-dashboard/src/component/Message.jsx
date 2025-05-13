/*Conditional Content: 
○ Create a boolean variable to determine whether a user is a premium 
user or not. 
○ If the user is a premium member, display a message: "Thank you for 
being a premium member!". 
○ If not, display: "Upgrade to premium to enjoy exclusive 
features!". */
function message () {
const isPremium = true;
if(isPremium) {
    message = <h3>Thank you for being a premium member! </h3>
} else {
    message = <h3>Upgrade to premium to enjoy exclusive features!</h3>
}
return message;
}
export default message