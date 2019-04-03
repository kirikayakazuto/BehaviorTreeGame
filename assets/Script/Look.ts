import MonsterCtl from "./MonsterCtl"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // onLoad () {}

    start () {

    }

    enter (tick,b3,treeNode){
        
    }

    open (tick,b3,treeNode){
        
    }

    tick (tick,b3,treeNode){
        let radio = treeNode.parameter.radio;
        let playerX = this.getComponent(MonsterCtl).getPlayerPostion().x;
        if(Math.abs(playerX - this.node.x) < radio) {
            // 判断是不是 看见了
            let lookTurn = playerX - this.node.x > 0 ?  1 : -1;
            if(lookTurn == this.node.scaleX) {
                return b3.SUCCESS;
            }
            return b3.FAILURE;
            
        }else {
            return b3.FAILURE;
        }
    }

    close (tick,b3,treeNode){
        
    }

    exit (tick,b3,treeNode){
        
    }


    // update (dt) {}
}
