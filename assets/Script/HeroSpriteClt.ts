import PlayerCtl from "./PlayerCtl"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

     // LIFE-CYCLE CALLBACKS:

     playerCtl: PlayerCtl = null;
     // onLoad () {}
 
     init(playerCtl: PlayerCtl) {
         this.playerCtl = playerCtl;
     }
 
     start () {
 
     }
 
     onCollisionEnter(other, self) {
         this.playerCtl.onCollisionEnter(other, self);
     }
 
     onCollisionStay(other, self) {
         this.playerCtl.onCollisionStay(other, self);
     }
 
     onCollisionExit(other, self) {
         this.playerCtl.onCollisionStay(other, self);
     }

    // update (dt) {}
}
