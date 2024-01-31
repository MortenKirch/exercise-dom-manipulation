// document.addEventListener("DOMContentLoaded", function(){
//     // your code goes here
// let userInput = document.getElementById("userInput") 
// let sportsUL = document.getElementById("sportsUL")
// const addActivityBtn = document.getElementById("addActivityBtn")
// const deleteLastActivityBtn = document.getElementById("deleteLastActivityBtn")
    
    
//     addActivityBtn.addEventListener("click", addActivity());
    
//     function addActivity(){
//         let userInputText = userInput.value.trim();
//             if (userInputText !== null || isNaN(userInputText)){
//             let newListItem = document.createElement("li");
//             newListItem.innerText = userInputText;
//             newListItem.className = "menu-item";
//             sportsUL.appendChild(newListItem)
//             userInput.value = "";
//             }
//             else{
//             alert("please enter a sports activity")
//             }
//         }
//     deleteLastActivityBtn.addEventListener("click", deleteLastActivity());
//     function deleteLastActivity(){
//         let lastActivity = sportsUL.lastElementChild;
//         if(lastActivity){
//             sportsUL.removeChild(lastActivity)

//         }else{
//             alert("no activities to delete")
//         }
//     }

// });



document.addEventListener("DOMContentLoaded", function(){
    let userInput = document.getElementById("userInput");
    let sportsUL = document.getElementById("sportsUL"); 
    const addActivityBtn = document.getElementById("addActivityBtn");
    const deleteLastActivityBtn = document.getElementById("deleteLastActivityBtn");

    addActivityBtn.addEventListener("click", addActivity);
    
    function addActivity(){
        let userInputText = userInput.value.trim();
        if (userInputText !== "") { // Fix the condition
            let newListItem = document.createElement("li");
            newListItem.innerText = userInputText;
            newListItem.className = "menu-item";
            sportsUL.appendChild(newListItem);
            userInput.value = "";
        } else {
            alert("Please enter a sports activity");
        }
    }

    deleteLastActivityBtn.addEventListener("click", deleteLastActivity);
    
    function deleteLastActivity(){
        let lastActivity = sportsUL.lastElementChild;
        if(lastActivity){
            sportsUL.removeChild(lastActivity);
        } else {
            alert("No activities to delete");
        }
    }
});