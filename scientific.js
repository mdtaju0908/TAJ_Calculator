const input = document.getElementById('inputBox');
const themeBtn = document.getElementById('theme-btn');
const calc = document.getElementById('calc');
let darkMode = true;

// Theme Toggle
themeBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  calc.classList.toggle('light-mode');
  themeBtn.textContent = darkMode ? '☀️' : '🌙';
});

// Insert value into input
function insert(value) {
  input.value += value;
}

// Clear display
function clearDisplay() {
  input.value = '';
}

// Delete last character
function del() {
  input.value = input.value.slice(0, -1);
}

// Calculate result
function calculate() {
  let exp = input.value;

  // Replace math expressions
  exp = exp.replace(/pi/g, Math.PI);
  exp = exp.replace(/e/g, Math.E);
  exp = exp.replace(/sqrt\(/g, 'Math.sqrt(');
  exp = exp.replace(/log\(/g, 'Math.log10(');
  exp = exp.replace(/sin\(/g, 'Math.sin(');
  exp = exp.replace(/cos\(/g, 'Math.cos(');
  exp = exp.replace(/tan\(/g, 'Math.tan(');
  exp = exp.replace(/\^/g, '**');

  try {
    input.value = eval(exp);
  } catch {
    input.value = "Error";
  }
}
