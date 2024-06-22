import inquirer from "inquirer";

let currency: any = {
  "US Dollar": 1, // base currency
  Euro: 0.932267,
  "British Pound": 0.799496,
  "Indian Rupee": 83.327143,
  "Australian Dollar": 1.528524,
  "Canadian Dollar": 1.364733,
  "Singapore Dollar": 1.360279,
  "Swiss Franc": 0.913112,
  "Malaysian Ringgit": 4.776904,
  "Japanese Yen": 156.132322,
  "Chinese Yuan Renminbi": 7.245865,
  "Pakistani Rupee": 300,
};

let questions = await inquirer.prompt([
  {
    type: "list",
    name: "FromCurrency",
    message: "Select Currency From",
    choices: Object.keys(currency),
  },

  {
    type: "list",
    name: "ToCurrency",
    message: "Select Currency To",
    choices: Object.keys(currency),
  },

  {
    message: "Please Enter Amount",
    type: "number",
    name: "amount",
  },
]);

const fromCurrency = currency[questions.FromCurrency];

const toCurrency = currency[questions.ToCurrency];

const amount = questions.amount;

const baseAmount = amount / fromCurrency;
const convertAmount = baseAmount * toCurrency;

console.log(convertAmount);
