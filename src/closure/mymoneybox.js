// function moneybox(coins) {
//     let saveCoins = 0; // el ahorro
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneybox(5);
// moneybox(5);

function moneyBox() {
    let saveCoins = 0;

    function addCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return addCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(10);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(5);
moneyBoxAna(50);