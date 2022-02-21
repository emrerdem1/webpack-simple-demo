import { updateIndicatorText } from './pageB.utils';

const PAGE_B_EXCLUSIVE_MULTIPLIER = 5.5;

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.mutual-multiply').onclick = () => {
    updateIndicatorText(PAGE_B_EXCLUSIVE_MULTIPLIER);
  };
});
