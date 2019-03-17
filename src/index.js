// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let array = new Array();
let object = new Object();
 if(currency <=0){
     return {};
 }
if (currency > 10000){
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
}
var arr=[50,25,10,5,1];
var ost = currency;
for (var i=0;i< arr.length;i++){
array[i] = Math.floor(ost/arr[i]);
ost = ost % arr[i];
}
var names=['H','Q','D','N','P'];
for (var j=0;j< names.length;j++){
    if(array[j]!=0){
    object[names[j]] = array[j];
}
}
return object;
}
