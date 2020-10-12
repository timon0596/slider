export class Model {
  pos:any

  steps:any

  singleStep=0

  stepsize=0

  currentHandle=0

  slider:any

  constructor(private options:any) {
    this.pos = new Array(this.options.handles).fill(0);
    this.steps = new Array(this.options.handles).fill(0);
  }

  position(e:any) {
    const i = this.currentHandle;
    let position;
    let pos;
    let result;
    if (this.options.vertical) {
      position = this.slider.offsetTop + this.slider.offsetHeight - e.pageY;
    } else {
      position = e.pageX - this.slider.offsetLeft;
    }
    const difference = position - this.pos[i];
    const condition = Math.round(Math.abs(difference) / this.stepsize) >= 1;
    if (condition) {
      pos = Math.round(difference / this.stepsize) * this.stepsize;
    } else {
      pos = 0;
    }
    if (position > this.slider[this.dimension()]) {
      result = this.slider[this.dimension()];
    } else if (position < 0) {
      result = 0;
    } else {
      result = this.pos[i] + pos;
    }
    const title = this.title(result);
    const resultObject = { pos: result, title };
    return resultObject;
  }

  title(pos:number) {
    const result = Math.round(pos / this.singleStep);
    if (typeof this.options.values[0] === 'string') {
      return this.options.values[result];
    }
    return result + this.options.values[0];
  }

  updatePosition({ pos, i }:any) {
    this.pos[i] = pos;
  }

  trigger() {
    const e = $.Event('model-change');
    $(this).trigger(e);
  }

  defineSlider(slider:any) {
    this.slider = slider.$slider[0];
  }

  defineSinglestep() {
    const v = [...this.options.values];
    if (typeof v[0] === 'number') {
      const diapason = v[1] - v[0];
      this.singleStep = this.slider[this.dimension()] / diapason;
    } else {
      this.singleStep = this.slider[this.dimension()] / (v.length - 1);
    }
  }

  defineStepsize() {
    this.stepsize = this.singleStep * this.options.step;
  }

  private dimension() {
    return this.options.vertical ? 'offsetHeight' : 'offsetWidth';
  }
}
