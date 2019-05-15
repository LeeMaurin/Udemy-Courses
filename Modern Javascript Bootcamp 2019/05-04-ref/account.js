// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node account.js.
// Note: you must be in the subdirectory where the JavaScript file is located.

// This code generates output utilizing an object and multiple functions.

let myAccount = {
  name: 'Lee',
  expenses: 0,
  income: 0
};

let addIncome = function(account, amount) {
  account.income = account.income + amount;
  // console.log(`amount:${amount} myAccount.income ${account.income} `);
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
  // console.log(`amount:${amount} myAccount.expense ${account.expenses} `);
};

let resetAccount = function(account) {
  account.income = 0;
  account.expenses = 0;
};

let getAccountSummary = function(account) {
  console.log(
    `Account for ${account.name} has $${account.income - account.expenses}. $${
      account.expenses
    } for expenses. $${account.income} for income.`
  );
};
// Account for Lee has $900.  $100 for expenses. $900 for income.

addIncome(myAccount, 100);
getAccountSummary(myAccount);
addExpense(myAccount, 500);
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);
