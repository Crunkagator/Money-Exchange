// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let Exchanger = {};
    if (currency > 10000){
        Exchanger.error = "You are rich, my friend! We don't have so much coins for exchange";
        return Exchanger;
    } 
    else if (currency>0 && currency < 10000){
        if (currency>=50){
            Exchanger.H = Math.floor(currency/50);
            currency = currency % 50;
        }
        if (currency>=25 && currency <50){
            Exchanger.Q = Math.floor(currency/25);
            currency = currency % 25;
        }
        if (currency>=10 && currency <25){
            Exchanger.D = Math.floor(currency/10);
            currency = currency % 10;
            }
        if (currency>=5 && currency <10){
            Exchanger.N = Math.floor(currency/5);
            currency = currency % 5;
            }
        if (currency>0 && currency <5){
            Exchanger.P = currency;
            }    
    }return Exchanger;
}