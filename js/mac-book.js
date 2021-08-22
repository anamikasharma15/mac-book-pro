
// update memory cost function
function updateMemoryCost(isSelectMemory){
    let extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    let totalMemoryCost = document.getElementById('extra-memory-cost');
   
    
    if(isSelectMemory == '8gb-cost'){
        totalMemoryCost.innerText  = 0;
        

    }
    else if (isSelectMemory=='16gb-cost'){
        totalMemoryCost.innerText  = 180;
       

    }
    return totalMemoryCost;
    
}
//update storage cost function 
function updateStorageCost(isSelectStorage){
    let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    let totalStorageCost = document.getElementById('extra-storage-cost');
   
    if(isSelectStorage == '256gb-storage'){
        totalStorageCost.innerText  = 0;

    }
    else if (isSelectStorage=='512gb-storage'){
        totalStorageCost.innerText  = 100;
    }
    else if (isSelectStorage=='1tb-storage'){
        totalStorageCost.innerText  = 180;
    }
    return totalStorageCost;
    
}
//update delivery cost function 

function updateDeliveryCost(isSelectDeliveryCharge){
    let deliveryCost = document.getElementById('extra-delivery-cost').innerText;
    let totalDeliveryCost = document.getElementById('extra-delivery-cost');
   
    if(isSelectDeliveryCharge == 'free-charge-cost' ){
        totalDeliveryCost.innerText  = 0;

    }
    else if (isSelectDeliveryCharge== 'delivery-charge-cost' ){
        totalDeliveryCost.innerText  = 20;
    }
    
    return totalDeliveryCost;
    
}


//calculate total charge cost
function calculate(memory,storage,deliverycharge,code){

    let memoryCost= updateMemoryCost(memory).innerText;
    const finalMemoryCost= parseInt(memoryCost);
    let storageCost= updateStorageCost(storage).innerText;
    const finalStorageCost= parseInt(storageCost);
    let deliveryCost= updateDeliveryCost(deliverycharge).innerText;
    const finaldeliveryCost= parseInt(deliveryCost);
    




    let currentBalance = document.getElementById('best-cost').innerText;
    let totalBalance = document.getElementById('total-cost');
    totalBalance.innerText= finalMemoryCost+finalStorageCost+finaldeliveryCost+parseInt(currentBalance);

    //bonus section-1(Discount Total price Cost)
    let displayCost = document.getElementById('discount-price');
     displayCost.innerText= totalBalance.innerText;

    //bonus section-2(Applying Promo Code)
     code= document.getElementById('promo-code').value;
     if(code=='stevekaku'){
         const reducingAmount = parseFloat(totalBalance.innerText)*.20;
         const afterPromoCost =totalBalance.innerText- parseFloat(reducingAmount);
        displayCost.innerText=afterPromoCost;
         
     }
     


}



//Update extra memory cost 
document.getElementById('memory-16gb').addEventListener('click',function(){
   
    updateMemoryCost('16gb-cost');

    calculate('16gb-cost');
    

});
document.getElementById('memory-8gb').addEventListener('click',function(){
   
    updateMemoryCost('8gb-cost');
    calculate('8gb-cost');


});

//update extra Storage Cost 
document.getElementById('storage-256gbssd').addEventListener('click',function(){
   
    updateStorageCost('256gb-storage');
    calculate('256gb-storage');


});
document.getElementById('storage-512gbssd').addEventListener('click',function(){
   
    updateStorageCost('512gb-storage');
    calculate('512gb-storage');


});
document.getElementById('storage-1tbssd').addEventListener('click',function(){
   
    updateStorageCost('1tb-storage');
    calculate('1tb-storage');


});
//update delivery charge cost
document.getElementById('free-charge').addEventListener('click',function(){
   
    updateDeliveryCost('free-charge-cost');
    calculate('free-charge-cost');


});
document.getElementById('delivery-charge').addEventListener('click',function(){
   
    updateDeliveryCost('delivery-charge-cost');
    calculate('delivery-charge-cost');


});

document.getElementById('apply-entered').addEventListener('click',function(){
  
   calculate('stevekaku');
   document.getElementById('promo-code').value = '';
});




