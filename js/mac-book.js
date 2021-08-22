function updateMemoryCost(isBaseMemory){
    let extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    let totalMemoryCost = document.getElementById('extra-memory-cost');
   
    
    if(isBaseMemory == '8gb'){
        totalMemoryCost.innerText  = 0;
        

    }
    else if (isBaseMemory=='16gb'){
        totalMemoryCost.innerText  = 180;
       

    }
    return totalMemoryCost;
    
}
//update storage cost funtion 
function updateStorageCost(isStorage){
    let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    let totalStorageCost = document.getElementById('extra-storage-cost');
   
    if(isStorage == '256gb-storage'){
        totalStorageCost.innerText  = 0;

    }
    else if (isStorage=='512gb-storage'){
        totalStorageCost.innerText  = 100;
    }
    else if (isStorage=='1tb-storage'){
        totalStorageCost.innerText  = 180;
    }
    return totalStorageCost;
    
}
//update delivery cost funtion 

function updateDeliveryCost(isDeliveryCharge){
    let deliveryCost = document.getElementById('extra-delivery-cost').innerText;
    let totalDeliveryCost = document.getElementById('extra-delivery-cost');
   
    if(isDeliveryCharge == 'without-charge' ){
        totalDeliveryCost.innerText  = 0;

    }
    else if (isDeliveryCharge== 'with-charge' ){
        totalDeliveryCost.innerText  = 20;
    }
    
    return totalDeliveryCost;
    
}


//calculate total charge
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
    //bonus Part-1(Display Total Cost)
    let displayCost = document.getElementById('display-cost');
     displayCost.innerText= totalBalance.innerText;

    //bonus Part-2(Applying Promo Code)
     code= document.getElementById('promo-code').value;
     if(code=='stevekaku'){
         const reducingAmount = parseFloat(totalBalance.innerText)*.20;
         const afterPromoCost =totalBalance.innerText- parseFloat(reducingAmount);
        displayCost.innerText=afterPromoCost;
         
     }
     


}



//Update memory cost 
document.getElementById('16gb-memory').addEventListener('click',function(){
   
    updateMemoryCost('16gb');

    calculate('16gb');
    

});
document.getElementById('8gb-memory').addEventListener('click',function(){
   
    updateMemoryCost('8gb');
    calculate('8gb');


});

//update Storage Cost 
document.getElementById('256gb-ssd').addEventListener('click',function(){
   
    updateStorageCost('256gb-storage');
    calculate('256gb-storage');


});
document.getElementById('512gb-ssd').addEventListener('click',function(){
   
    updateStorageCost('512gb-storage');
    calculate('512gb-storage');


});
document.getElementById('1tb-ssd').addEventListener('click',function(){
   
    updateStorageCost('1tb-storage');
    calculate('1tb-storage');


});
//update delivery cost
document.getElementById('without-delivery-charge').addEventListener('click',function(){
   
    updateDeliveryCost('without-charge');
    calculate('without-charge');


});
document.getElementById('with-delivery-charge').addEventListener('click',function(){
   
    updateDeliveryCost('with-charge');
    calculate('with-charge');


});

document.getElementById('code-entered').addEventListener('click',function(){
  
   calculate('stevekaku');
   document.getElementById('promo-code').value = '';
});



/* 

// best Price cost
const bestPrice = document.getElementById('best-price');

// memory cost
const memory8 = document.getElementById('memory-8gb');
const memory16 = document.getElementById('memory-16gb');
const extraMemory = document.getElementById('memory-cost');

// storage cost
const storage256GB = document.getElementById('storage-256gb');
const storage512GB = document.getElementById('storage-512gb');
const storage1TB = document.getElementById('storage-1tb');
const extraStorage = document.getElementById('storage-cost');

// delivery charge
const free = document.getElementById('free-charge');
const deliveryCharge = document.getElementById('delivery-charge');
const deliveryCost = document.getElementById('delivery-cost');

// total price
let totalPrice = document.getElementById('total-price');

// promo-code
const promoCode = document.getElementById('promo-code');

// promo code apply button
const applyButton = document.getElementById('apply-btn');

// discount price
const discountPrice = document.getElementById('discount-price');



// Memory Segment
memory8.addEventListener('click', function () {
    extraMemory.innerText = '0';
    calculateTotal();
})
memory16.addEventListener('click', function () {
    extraMemory.innerText = '180';
    calculateTotal();
});
// Memory Segment



// Storage Segment
storage256GB.addEventListener('click', function () {
    extraStorage.innerText = '0';
    calculateTotal();
})
storage512GB.addEventListener('click', function () {
    extraStorage.innerText = '100';
    calculateTotal();
})
storage1TB.addEventListener('click', function () {
    extraStorage.innerText = '180';
    calculateTotal();
});
// Storage Segment



// Delivery Segment
free.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    calculateTotal();
})
deliveryCharge.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    calculateTotal();
});
// Delivery Segment


// Total price calculate
function calculateTotal() {
    total();
    discountPrice.innerText = totalPrice.innerText;
}

// Total price calculate
function total() {
    const best = parseFloat(bestPrice.innerText);
    const memoryCostPrice = parseFloat(extraMemory.innerText);
    const storageCostPrice = parseFloat(extraStorage.innerText);
    const deliveryCostPrice = parseFloat(deliveryCost.innerText);

    totalPrice.innerText = best + memoryCostPrice + storageCostPrice + deliveryCostPrice;
}

applyButton.addEventListener('click', function () {
    if (promoCode.value == 'stevekaku') {
        total();
        const amountInt = parseFloat(totalPrice.innerText)
        const offer = amountInt * (20 / 100);
        discountPrice.innerText = discountPrice.innerText - offer;
        promoCode.value = '';
    }
    else{
        calculateTotal();
    }
}); */