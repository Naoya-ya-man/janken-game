let win = 0;
let lose = 0;
let draw = 0;

function play(playerHand) {
  const hands = ['グー', 'チョキ', 'パー'];
  const cpuHand = hands[Math.floor(Math.random() * 3)];

  let result = '';
  if (playerHand === cpuHand) {
    result = 'あいこ';
    draw++;
  } else if (
    (playerHand === 'グー' && cpuHand === 'チョキ') ||
    (playerHand === 'チョキ' && cpuHand === 'パー') ||
    (playerHand === 'パー' && cpuHand === 'グー')
  ) {
    result = '勝ち';
    win++;
  } else {
    result = '負け';
    lose++;
  }

  document.getElementById('player').textContent = `あなたの手：${playerHand}`;
  document.getElementById('cpu').textContent = `CPUの手：${cpuHand}`;
  document.getElementById('outcome').textContent = `結果：${result}`;
  document.getElementById(
    'score'
  ).textContent = `勝ち：${win} / 負け：${lose} / あいこ：${draw}`;
}
