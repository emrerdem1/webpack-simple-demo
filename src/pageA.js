import { getCounterValue } from './helper';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.multiply').onclick = () => {
    document.querySelector('.indicator').innerHTML = 3 * getCounterValue();
  };
});
