import { getCounterValue } from './helper';

export const updateIndicatorText = (multiplier) =>
  (document.querySelector('.indicator').innerHTML =
    multiplier * getCounterValue());
