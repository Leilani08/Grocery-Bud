let  groceryB=document.getElementById('groceryBud');
let addI=document.getElementById('addedItems');
let alerts=document.getElementById('alertHere');

function add(){
    addI.innerText =groceryB.value;
    
    alerts.innerText="Item added to the list";
    alerts.style.backgroundColor="#88ee28";
    alerts.style.textAlign="center";
   
}
function remove(){
    addI.innerText ="";

    alerts.innerText="Item removed to the list";
    alerts.style.backgroundColor="red";
    alerts.style.textAlign="center";
   
}

