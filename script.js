//total balance javascript here. will probably comment for every feature to make it easier for myself later.

const balanceEl = document.getElementById('balance');
let balance = localStorage.getItem('balance');
const depositInput = document.getElementById('deposit-amount');

if (balance === null) {
    balance = 0;
} else {
    balance = parseFloat(balance);
    // ^^ converting saved string from past website use to a float so I can access it here
}

balanceEl.textContent = `$${balance.toFixed(2)}`;

//making a function to deposit an amount.

function deposit(amount) {
    balance += amount;
    balanceEl.textContent = `$${balance.toFixed(2)}`;
    localStorage.setItem('balance', balance);
}

const depositButton = document.getElementById('deposit-button');

depositButton.addEventListener('click', () => {
    const amount = parseFloat(depositInput.value);
    if (!isNaN(amount) && amount > 0) {
        deposit(amount);
        depositInput.value = '';
    }
});