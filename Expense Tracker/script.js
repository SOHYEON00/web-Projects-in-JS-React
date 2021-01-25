const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -2000 },
  { id: 2, text: "Salary", amount: 212000 },
  { id: 3, text: "Book", amount: -8800 },
  { id: 4, text: "Camera", amount: -17500 },
];

let transactions = dummyTransactions;

// Add transactions to DOM list
const addTransactionDOM = (transaction) => {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // Add class based on value
    item.classList.add((transaction.amount < 0) ? 'minus' : 'plus');

    item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn">X</button>
    `;

    list.appendChild(item);
}

// Init app
function init() {
    list.innerHTML = '';

    transactions.forEach(e => addTransactionDOM(e));
}

init();