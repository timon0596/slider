import {Slider} from './../../components/slider/slider'
import {Scale} from './../../components/scale/scale'
import {Handle} from './../../components/handle/handle'
import {Range} from './../../components/range/range'
export class View {
  handles:any
  $handles:any
  slider=new Slider()
  range=new Range()
  scale=new Scale()


  constructor(private options:any){
    this.init()
  }
  init(){
    this.handlesInit()
    this.slider.append(this.$handles)
    this.slider.append(this.range.$range)
    this.slider.append(this.scale.$scale)
    this.options.$el.append(this.slider.$slider)
  }
  render({pos}:any){
    this.$handles.forEach((el:any)=>{
      el[0].style=0
      el.remove()
    })
    this.options.vertical?this.slider.vert():this.slider.hor()
    this.slider.append(this.$handles)
    this.$handles.forEach((el:any,i:number)=>{
      this.setHandle({pos,i})
    })

  }
  handlesInit(){
    this.handles = new Array(this.options.handles).fill(0).map((el:any)=>new Handle())
    this.$handles = this.handles.map((el:any)=>el.$handle)
  }
  setHandle({pos,i}:any){
    this.$handles[i].css(this.side(),pos[i]+'px')
  }
  side(){
    return this.options.vertical?'bottom':'left'
  }
}
