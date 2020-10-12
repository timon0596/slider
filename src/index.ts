import 'jquery';
import './plugin/plugin';

const config = [
  { values: [100, 600], step: 11 },
];
$('.slider-wrapper').each((i, el) => {
  const options = config[i] || {};
  $(el).timonSliderPlugin(options);
});
