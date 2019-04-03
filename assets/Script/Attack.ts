
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    speed = 100; // 移动的速度

    // onLoad () {}

    start () {
        
    }

    enter (tick,b3,treeNode){
    }

    open (tick,b3,treeNode){
        this.node.getChildByName("arms").active = true;
    }
    /**
     * 
     * @param tick 
     * @param b3 
     * @param treeNode 
     */
    tick (tick,b3,treeNode){
        let dt = tick.target.dt;
        if(this.node.getChildByName("arms").y <= -40) {
            this.node.getChildByName("arms").y = 40;
            return b3.SUCCESS;
        }else {
            this.node.getChildByName("arms").y -= this.speed * dt;
        }
        return b3.RUNNING;
    }

    close (tick,b3,treeNode){
        this.node.getChildByName("arms").active = false;
    }

    exit (tick,b3,treeNode){
    }

    // update (dt) {}
}
