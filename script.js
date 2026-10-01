
let history = [];

function clearList() {
  history = [];

  const historyList = document.getElementById('historyList');
  historyList.innerHTML = '';
}

function drawOmikuji() {

  document.getElementById('result').textContent = '-';

  setTimeout(function () {
    const inputText = document.getElementById('userInput').value;
    const results = inputText
      .split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');
    const randomIndex = Math.floor(Math.random() * results.length);
    const selectedResult = results[randomIndex];

    document.getElementById('result').textContent = results[randomIndex];

    history.unshift(selectedResult);

    const historyList = document.getElementById('historyList')
    historyList.innerHTML = '';

    history.forEach(function (item) {
      const li = document.createElement('li')
      li.textContent = item
      historyList.appendChild(li);
    });
  }, 300);
}