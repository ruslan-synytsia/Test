let money, time;

function detectLevel () {
    money = +prompt("Ваш бюджет на месяц?", '');
    if (isNaN(money) || money == '' || money == null) {
        alert("Repeat again!");
        return startProgram();
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
}
//detectLevel();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        detectDayBudget: function() {
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
            appData.moneyPerDay = parseFloat((appData.budget / 30).toFixed(2));
            alert("Your budget per day: " + appData.moneyPerDay + " grn.");
        },
        calcIncomePerMonth: function() {
            if (appData.savings == true) {
                let balance = +prompt("Enter your balance", ''),
                percent = +prompt("Enter your percent", '');
                appData.monthIncome = ((balance * percent) / 12) / 100;
                alert("Your income per month is: " + parseFloat(appData.monthIncome.toFixed(2)) + " grn.");
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i <= 3; i++) {
                optionalExpense = prompt("Статья необязательных расходов?", '');
                if (typeof(optionalExpense) != 'string' || typeof(optionalExpense) == null || optionalExpense == "" || optionalExpense.length > 20) {
                    alert("Repeat again");
                    return chooseOptExpenses();
                }
                appData.optionalExpenses[i] = optionalExpense;
            }
        },
        chooseIncome: function() {
            let items = prompt("What brings additional income? List separated by commas (,)", '');
            if (typeof(items) === 'string' && typeof(items) != null && items != '') {
                appData.income = items.split(", ");
            } else {
                alert("Repeat again");
                return appData.chooseIncome();
            }
            appData.income.forEach(function(items, i) {
                alert("Способы доп. заработка: " + (+(i+1)) + " - " + items);
            });
        }
    };

    for (let items in appData) {
        console.log("Наша программа включает в себя данные: " + items);
    }

// appData.detectDayBudget();
// appData.calcIncomePerMonth();
// appData.chooseOptExpenses();
// appData.chooseIncome();








