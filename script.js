let money, time;

function startProgram () {
    money = +prompt("Ваш бюджет на месяц?", '');
    if (isNaN(money) || money == '' || money == null) {
        alert("Repeat again!");
        return startProgram();
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
}

startProgram();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function showMessage () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            alert("Repeat again!");
            return showMessage();
        }
    }
}

showMessage();

appData.moneyPerDay = parseFloat((appData.budget / 30).toFixed(2));

alert("Your budget per day: " + appData.moneyPerDay + " grn.");