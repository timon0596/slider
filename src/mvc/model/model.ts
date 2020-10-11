export class Model {
  pos = []
  steps = []
  singleStep=0
  stepsize=0
  currentHandle=0

  constructor(private options:any){

  }
position({e,slider}:any){
  if(e!==undefined){
    if(e.type==='mousemove'){
      if(this.options.vertical){
        const position = slider.offsetTop + slider.offsetHeight - e.pageY
        const difference = position - this.pos[this.currentHandle]
        const condition = Math.round(Math.abs(difference)/this.stepsize)>1
        if(condition){
          return {pos:Math.round(difference/this.stepsize)*this.stepsize,i:this.currentHandle}
        }
      }
    }
  }
}
trigger(){
  const e = $.Event('model-change')
  $(this).trigger(e)
}
}
