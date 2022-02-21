import { getCounterValue, setCounter } from './helper';

let localCounter = 0;
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.increase').onclick = () => {
    setCounter(++localCounter);
  };

  document.querySelector('.print').onclick = () => {
    document.querySelector('.indicator').innerHTML = getCounterValue();
  };
});
