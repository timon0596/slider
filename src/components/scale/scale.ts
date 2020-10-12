export class Scale {
  $scale = $('<div>', { class: 'scale' });

  $delimiters = $('<div>', { class: 'scale__delimiters-wrapper' });

  $tip = $('<div>', { class: 'scale__tip' });

  $limitsWrapper = $('<div>', { class: 'scale__limit-wrapper' });

  $limits:any

  constructor(private options:any) {
    this.$scale.append(this.$delimiters);
  }

  addDelimeters(slider:any) {
    const amount = Math.round(slider.$slider[0][this.options.vertical ? 'offsetHeight' : 'offsetWidth'] / 15);
    console.log(amount);
    const v = this.options.values;
    if (typeof v[0] === 'number') {
      for (let i = 0; i < amount; i++) {
        this.$delimiters.append($('<div>', { class: 'scale__delimiter' }));
      }
    } else {
      v.forEach((el:string, i:number) => {
        this.$delimiters.append($('<div>', { class: 'scale__delimiter' }));
      });
    }
  }
}
