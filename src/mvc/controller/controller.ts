import { Model } from '../model/model';
import { View } from '../view/view';

export class Controller {
  model=new Model(this.options)

  view=new View(this.options)

  mousedown = false
  constructor(private options:any) {
    this.binding()
    this.view.$handles.forEach((el:any,i:number)=>{
      el.mousedown({i},this.handleHandleMousedown)
    })
    $(window).mousemove(this.handleWindowMousemove)
  }

  binding(){
    this.handleWindowMousemove=this.handleWindowMousemove.bind(this)
    this.handleWindowMouseup=this.handleWindowMouseup.bind(this)
    this.handleHandleMousedown=this.handleHandleMousedown.bind(this)
  }

  handleWindowMousemove(e:any){
  }
  handleWindowMouseup(){
    this.mousedown=false
  }
  handleHandleMousedown(e:any){
    this.model.currentHandle = e.data.i
    this.mousedown=true
  }
}
