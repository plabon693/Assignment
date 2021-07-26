// Kilometer to Meter Convert 
function kilometerToMeter(kilometer){
    let meter = kilometer*1000;
    let result = Math.round(meter);
    return result;
}
let KiloToMeter = kilometerToMeter(50);
console.log(KiloToMeter);

//Budget Calculator
function budgetCalculator(watch,phone,laptop){
    let priceOfWatch = watch * 50;
    let priceOfPhone = phone * 100;
    let priceOfLaptop = laptop * 500;
    let totalPrice = priceOfWatch + priceOfPhone + priceOfLaptop;

    return totalPrice;
}

let totalBudget = budgetCalculator(2,3,7);
console.log(totalBudget);

// Hotel Cost Calculator
function hotelCost(numberOfDays){
    let rent = 0;
    if(numberOfDays<=10){
        rent = numberOfDays*100;
    }
    else if(numberOfDays<=20){
        let firstRent = 10 * 100;
        let ramainDays1 = numberOfDays - 10;
        let secondRent = ramainDays1 * 80;

        rent = firstRent + secondRent;
    }
    else{
        firstRent = 10 * 100;
        secondRent = 10 * 80;
        let remainDays2 = numberOfDays -20;
        let thirdRent = remainDays2 * 50;

        rent = firstRent + secondRent + thirdRent;
    }
    

    return rent;
}
let totalRent = hotelCost(100);
console.log(totalRent);

// largest name of friend.
function megaFriend(friendsName){
    let element = 0;
    let largest;
    for(let i = 0; i<friendsName.length; i++){
        if(friendsName[i].length>element){
            element = friendsName[i].length;
            largest = friendsName[i];
        }
    }
    return largest;
}
let name = ["Rakib","Sabbir","Shahriar","Sowrov","Akash"];
let largestName = megaFriend(name);
console.log(largestName);
