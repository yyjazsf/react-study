/**
 * Created by yyj on 16/12/2016.
 */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function fetchCounter(callback) {
  setTimeout(() => {
    callback(getRandomInt(1, 100));
  }, 500);
}
