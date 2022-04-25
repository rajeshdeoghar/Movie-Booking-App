// Store the wallet amount to your local storage with key "amount"
let amount=document.getElementById("wallet");

var amt=localStorage.getItem("amount")||[];
function addMoney(){
     let value=document.getElementById("amount").value;
     let totalamount=amt+value;
     
     amount.append(value);
     localStorage.setItem("amount",JSON.stringify(totalamount));
}