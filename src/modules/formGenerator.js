import passwordGen from './generators';

const generatedPassword = document.querySelector('.generated-password');
const qntChar = document.querySelector('.qnt-char');
const chkCap = document.querySelector('.chk-cap');
const chkLow = document.querySelector('.chk-low');
const chkNum = document.querySelector('.chk-num');
const chkSymb = document.querySelector('.chk-symb');
const btnGenPassword = document.querySelector('.gen-pass');

export default () => {
  btnGenPassword.addEventListener('click', (e) => {
    e.preventDefault();

    generatedPassword.innerHTML = gen();
  });
};

function gen() {
  const password = passwordGen(
    qntChar.value,
    chkCap.checked,
    chkLow.checked,
    chkNum.checked,
    chkSymb.checked
  );
  return password || 'Nothing selected.';
}
