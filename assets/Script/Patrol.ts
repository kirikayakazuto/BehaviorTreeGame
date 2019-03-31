
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    speed = 100;
    moveSize = 0;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    enter (tick,b3,treeNode){
        
    }

    open (tick,b3,treeNode){
        
    }
    /**
     * 
     * @param tick 
     * @param b3 
     * @param treeNode 
     */
    tick (tick,b3,treeNode){
        let areaSize = treeNode.parameter.areaSize;
        let dt = tick.dt;
        this.node.x += dt * this.speed;
        this.moveSize += Math.abs(dt * this.speed)
        if(this.moveSize >= areaSize) {
            this.moveSize = 0;
            this.speed = -this.speed;
        }
        return b3.SUCCESS;
        
    }

    close (tick,b3,treeNode){
        
    }

    exit (tick,b3,treeNode){
        
    }

    // update (dt) {}
}
