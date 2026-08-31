// App State
let balance = 100.00;
let timeRemaining = 30;
let baseBetUnit = 10;
let currentMultiplier = 1;
let activeBet = null;
let currentPeriod = 20260831100050754;
let gameActive = true;
let currentGameMode = 30;
let gameHistory = [];
let userStats = {
    totalBets: 0,
    totalWins: 0,
    totalLosses: 0,
    winnings: 0
};

// DOM Elements
const balanceEl = document.getElementById('balance-display');
const periodEl = document.getElementById('period-display');
const timerMinEl = document.getElementById('timer-min');
const sec1El = document.getElementById('timer-sec-1');
const sec2El = document.getElementById('timer-sec-2');
const statusEl = document.getElementById('status-msg');
const historyBodyEl = document.getElementById('history-body');
const submitBtnEl = document.getElementById('submit-btn');
const gameModeNameEl = document.getElementById('game-mode-name');

// Load saved data from localStorage
function loadGameData() {
    const saved = localStorage.getItem('wingoGameData');
    if (saved) {
        const data = JSON.parse(saved);
        balance = data.balance || 100.00;
        gameHistory = data.gameHistory || [];
        userStats = data.userStats || userStats;
        balanceEl.textContent = balance.toFixed(2);
        renderHistory();
    }
}

// Save data to localStorage
function saveGameData() {
    const data = {
        balance,
        gameHistory,
        userStats
    };
    localStorage.setItem('wingoGameData', JSON.stringify(data));
}

// Timer Loop
let timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    timeRemaining--;

    // Update timer display
    const minutes = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    const s1 = Math.floor(secs / 10);
    const s2 = secs % 10;
    
    timerMinEl.textContent = minutes;
    sec1El.textContent = s1;
    sec2El.textContent = s2;

    // Lock betting when time is running out
    if (timeRemaining <= 5 && gameActive) {
        if (!activeBet) {
            statusEl.textContent = "⏱️ Bidding locked! Wait for next round...";
            statusEl.classList.add('error');
        }
        disableBettingButtons();
    } else if (timeRemaining > 5) {
        enableBettingButtons();
        statusEl.classList.remove('error');
    }

    // End round
    if (timeRemaining === 0) {
        gameActive = false;
        evaluateRound();
        resetRound();
    }
}

function disableBettingButtons() {
    document.querySelectorAll('.color-btn, .num-ball, .bs-btn, .mult-btn').forEach(btn => {
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
    });
}

function enableBettingButtons() {
    document.querySelectorAll('.color-btn, .num-ball, .bs-btn, .mult-btn').forEach(btn => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    });
}

function switchMode(element, seconds) {
    document.querySelectorAll('.mode-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
    
    currentGameMode = seconds;
    const modes = {
        30: 'WinGo 30sec',
        60: 'WinGo 1 Min',
        180: 'WinGo 3 Min',
        300: 'WinGo 5 Min'
    };
    
    gameModeNameEl.textContent = modes[seconds];
    
    // Reset current round
    timeRemaining = seconds;
    activeBet = null;
    gameActive = true;
    statusEl.textContent = 'Select a color, number, or size to bet!';
    statusEl.classList.remove('error', 'success');
    submitBtnEl.disabled = true;
    updateTimer();
}

function setMultiplier(val, btn) {
    currentMultiplier = val;
    document.querySelectorAll('.mult-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update submit button
    const betAmount = baseBetUnit * val;
    submitBtnEl.disabled = activeBet === null;
}

function placeBet(type, selection) {
    if (timeRemaining <= 5) {
        updateStatus("⏱️ Round is closing! Wait for next period.", 'error');
        return;
    }

    if (activeBet) {
        updateStatus("Already placed a bet for this round!", 'error');
        return;
    }

    const totalBetAmount = baseBetUnit * currentMultiplier;

    if (totalBetAmount > balance) {
        updateStatus("❌ Insufficient balance!", 'error');
        return;
    }

    activeBet = { type, selection, amount: totalBetAmount };
    submitBtnEl.disabled = false;
    
    updateStatus(`Selected: [${selection}] with ${currentMultiplier}x multiplier = ₹${totalBetAmount}`, 'success');
}

function submitBet() {
    if (!activeBet) {
        updateStatus("No bet selected!", 'error');
        return;
    }

    if (timeRemaining <= 5) {
        updateStatus("⏱️ Betting window closed!", 'error');
        activeBet = null;
        submitBtnEl.disabled = true;
        return;
    }

    balance -= activeBet.amount;
    balanceEl.textContent = balance.toFixed(2);
    
    userStats.totalBets++;
    
    updateStatus(`✅ Bet placed! ₹${activeBet.amount} on [${activeBet.selection}]`, 'success');
    submitBtnEl.disabled = true;
    
    // Disable further betting
    disableBettingButtons();
    
    saveGameData();
}

function evaluateRound() {
    const winningNum = Math.floor(Math.random() * 10);
    const size = winningNum >= 5 ? 'Big' : 'Small';
    
    let color = 'Green';
    if (winningNum === 0 || winningNum === 5) {
        color = 'Violet';
    } else if (winningNum % 2 === 0) {
        color = 'Red';
    }

    // Check payouts
    if (activeBet) {
        let won = false;
        let winMultiplier = 2;

        if (activeBet.type === 'number' && activeBet.selection === winningNum) {
            won = true;
            winMultiplier = 9;
        } else if (activeBet.type === 'color' && activeBet.selection === color) {
            won = true;
            winMultiplier = color === 'Violet' ? 4.5 : 2;
        } else if (activeBet.type === 'size' && activeBet.selection === size) {
            won = true;
            winMultiplier = 2;
        }

        if (won) {
            const payout = activeBet.amount * winMultiplier;
            balance += payout;
            balanceEl.textContent = balance.toFixed(2);
            
            userStats.totalWins++;
            userStats.winnings += payout;
            
            updateStatus(`🎉 Result: ${winningNum} (${color}/${size})! Won ₹${payout}!`, 'success');
        } else {
            userStats.totalLosses++;
            updateStatus(`😢 Result: ${winningNum} (${color}/${size})! Lost ₹${activeBet.amount}.`, 'error');
        }
    } else {
        updateStatus(`📊 Result: ${winningNum} (${color}/${size}). No bet placed.`, '');
    }

    addHistoryRow(currentPeriod, winningNum, size, color);
    saveGameData();
}

function resetRound() {
    timeRemaining = currentGameMode;
    activeBet = null;
    currentPeriod++;
    currentMultiplier = 1;
    gameActive = true;
    
    periodEl.textContent = currentPeriod;
    submitBtnEl.disabled = true;
    
    document.querySelectorAll('.mult-btn').forEach((b, i) => {
        if (i === 0) b.classList.add('active');
        else b.classList.remove('active');
    });
    
    statusEl.textContent = 'Select a color, number, or size to bet!';
    statusEl.classList.remove('error', 'success');
    
    enableBettingButtons();
}

function addHistoryRow(period, num, size, color) {
    const colorHex = color === 'Green' ? '#28a745' : (color === 'Red' ? '#dc3545' : '#9c27b0');
    
    const row = {
        period,
        number: num,
        size,
        color,
        colorHex
    };
    
    gameHistory.unshift(row);
    if (gameHistory.length > 10) {
        gameHistory.pop();
    }
    
    renderHistory();
}

function renderHistory() {
    historyBodyEl.innerHTML = '';
    
    gameHistory.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.period}</td>
            <td style="font-weight: bold; color: ${row.colorHex}">${row.number}</td>
            <td>${row.size}</td>
            <td><span class="dot-badge" style="background-color: ${row.colorHex}"></span></td>
        `;
        historyBodyEl.appendChild(tr);
    });
}

function updateStatus(message, statusClass = '') {
    statusEl.textContent = message;
    statusEl.classList.remove('success', 'error');
    if (statusClass) {
        statusEl.classList.add(statusClass);
    }
}

function navigateTo(page) {
    // For now, just navigate
    // In a real app, you'd use proper routing
    window.location.href = page;
}

// Add Money function
function addMoney(amount) {
    balance += amount;
    balanceEl.textContent = balance.toFixed(2);
    updateStatus(`✅ Added ₹${amount} to your account!`, 'success');
    saveGameData();
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadGameData();
    updateTimer();
});

// Save data before closing
window.addEventListener('beforeunload', saveGameData);
