const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const handleCap = () => String.fromCharCode(rand(65, 91));
const handleLow = () => String.fromCharCode(rand(97, 123));
const handleNum = () => String.fromCharCode(rand(48, 58));
const Symb = ',;.^~[]{}!@#$%&+=-_';
const handleSymb = () => Symb[rand(0, Symb.length)];

function passwordGen(qnt, cap, low, num, symb) {
  const passwordArr = [];
  qnt = Number(qnt);

  for (let i = 0; i < qnt; i++) {
    cap && passwordArr.push(handleCap());
    low && passwordArr.push(handleLow());
    num && passwordArr.push(handleNum());
    symb && passwordArr.push(handleSymb());
  }
  return passwordArr.join('').slice(0, qnt);
}

export default passwordGen;
