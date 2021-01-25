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

// Add transaction 
const addTransaction = (e) => {
    e.preventDefault();

    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert('Please add a text and amount');
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: parseInt(amount.value),
        };
        transactions.push(transaction);

        addTransactionDOM(transaction);

        updateValues();

        text.value = '';
        amount.value = '';
    }
}

const generateID = () => {
    return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
const addTransactionDOM = (transaction) => {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // Add class based on value
    item.classList.add((transaction.amount < 0) ? 'minus' : 'plus');

    item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
    `;

    list.appendChild(item);
    
}
// Update the balance, income and expense
const updateValues = () => {
    const amounts = transactions.map(e => e.amount);
    console.log(amounts);
    const totalAmount = numToString(amounts.reduce((acc, item) => (acc += item), 0)); 
    const income = numToString(amounts
      .filter((e) => e > 0)
      .reduce((acc, item) => (acc += item), 0))
      ;
    const expense = numToString(amounts
        .filter((e) => e < 0)
        .reduce((acc, item) => (acc += item), 0) * -1);

    
    balance.innerText = `${totalAmount}원`;
    moneyPlus.innerText = `${income}원`;
    moneyMinus.innerText = `${expense}원`;
}

const numToString = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Remove transaction by ID
const removeTransaction = (id) => {
    transactions = transactions.filter(e => e.id !== id);

    init();
}

// Init app
function init() {
    list.innerHTML = '';

    transactions.forEach(e => addTransactionDOM(e));
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);