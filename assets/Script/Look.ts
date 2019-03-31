import PlayerCtl from "./PlayerCtl"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(PlayerCtl)
    playerCtl: PlayerCtl = null;

    // onLoad () {}

    start () {

    }

    enter (tick,b3,treeNode){
        
    }

    open (tick,b3,treeNode){
        
    }

    tick (tick,b3,treeNode){
        let radio = treeNode.parameter.radio;
        let playerX = this.playerCtl.getPosition().x;
        if(Math.abs(playerX - this.node.x) < radio) {
            this.setTips("发现你啦!");
            return b3.SUCCESS;
        }else {
            this.setTips("敌人");
            return b3.FAILURE;
        }
    }

    close (tick,b3,treeNode){
        
    }

    exit (tick,b3,treeNode){
        
    }

    setTips(str: string) {
        this.node.getChildByName("str").getComponent(cc.Label).string = str;
    }

    // update (dt) {}
}
