import { Slider } from '../../components/slider/slider';
import { Scale } from '../../components/scale/scale';
import { Handle } from '../../components/handle/handle';
import { Range } from '../../components/range/range';

export class View {
  handles:any

  $handles:any

  slider=new Slider()

  range=new Range()

  scale=new Scale(this.options)

  constructor(private options:any) {
    this.init();
  }

  init() {
    this.handlesInit();
    this.slider.append(this.$handles);
    this.slider.append(this.range.$range);
    this.slider.append(this.scale.$scale);
    this.options.$el.append(this.slider.$slider);
  }

  handlesInit() {
    this.handles = new Array(this.options.handles).fill(0).map((el:any) => new Handle());
    this.$handles = this.handles.map((el:any) => el.$handle);
  }

  setHandle({ pos, i, title }:any) {
    this.$handles[i].css(this.side(), `${pos}px`);
    this.handles[i].$title.text(title);
  }

  side() {
    return this.options.vertical ? 'bottom' : 'left';
  }
}
