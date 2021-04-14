/* eslint-disable no-unused-expressions */
const logicSoal = (nomer) => {
  nomer = nomer.replace(/[\sX]/g, "");

  let arr = [...nomer];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
    if (i % 2 === 0) {
      arr[i] = arr[i] * 2;
      if (arr[i] > 9) {
        arr[i] = arr[i] - 9;
      }
    } else {
      if (arr !== null) {
        arr[i];
      }
    }
  }
  let sum = arr.reduce((a, b) => a + b);
  let hasil = Math.ceil(sum / 10) * 10 - sum;
  return hasil;
};

export default logicSoal;
