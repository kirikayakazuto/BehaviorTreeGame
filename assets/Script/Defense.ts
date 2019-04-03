import MonsterCtl from "./MonsterCtl"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
    }

    enter (tick,b3,treeNode){
        
    }

    open (tick,b3,treeNode){
        
        this.node.getChildByName("shield").active = true;

    }

    tick (tick,b3,treeNode){
        return b3.RUNNING;
    }

    close (tick,b3,treeNode){
        this.node.getChildByName("shield").active = false;
    }

    exit (tick,b3,treeNode){
        // 
    }

    // update (dt) {}
}
