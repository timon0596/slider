export class Slider {
  $slider = $('<div>', { class: 'slider' });

  constructor() {
  }

  append(el:any) {
    this.$slider.append(el);
  }

  vert() {
    this.$slider.addClass('slider_vertical');
  }

  hor() {
    this.$slider.removeClass('slider_vertical');
  }
}
