let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется?", '');

appData.expenses[a] = b;

alert(money / 30);