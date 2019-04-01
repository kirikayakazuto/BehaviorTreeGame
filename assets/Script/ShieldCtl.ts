import PlayerCtl from "./PlayerCtl"
import { GameStatus } from "./GameInterface";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    playerCtl: PlayerCtl = null;
    // onLoad () {}

    state = GameStatus.STOP;

    init(playerCtl: PlayerCtl) {
        this.playerCtl = playerCtl;
    }

    start () {

    }
    setShieldState(state: number) {
        this.state = state;
        this.node.active = this.state == GameStatus.RUNNING ? true : false;
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
