function calculateTip(event) {
 event.preventDefault();
 let bill= document.getElementById('Bill').value;
 let serviceQual = document.getElementById('servicequal').value;
 let num0fPeople = document.getElementById('people').value; 

 if(bill == '' | serviceQual == 0) {
    alert("Por favor, preencha os valores")
    return;
 }

 if(num0fPeople == "" | num0fPeople <= 1) {
   num0fPeople = 1;
   document.getElementById('each').style.display = "none"
 } else{
   document.getElementById('each').style.display = "block"
 }

 let total = (bill * serviceQual) / num0fPeople;
 total = total.toFixed(2);
 document.getElementById('tip').innerHTML = total;
 document.getElementById('totalTip').style.display = "block";

}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);

