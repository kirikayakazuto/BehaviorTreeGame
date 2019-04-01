import PlayerCtl from "./PlayerCtl"
import { GameStatus } from "./GameInterface";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    speed = 100;
    state = GameStatus.STOP;
    // LIFE-CYCLE CALLBACKS:
    playerCtl: PlayerCtl = null;

    // onLoad () {}

    init(playerCtl: PlayerCtl) {
        this.playerCtl = playerCtl;
    }

    setArmsState(state: number) {
        this.state = state;
        this.node.active = this.state == GameStatus.RUNNING ? true : false;
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

    /**
     * 更新攻击
     */
    armsUpdate(dt: number) {
        if(this.state != GameStatus.RUNNING) {
            return ;
        }
        if(this.node.y <= -40) {
            this.node.y = 40;
        }
        this.node.y -= this.speed * dt;
    }



    // update (dt) {}
}


