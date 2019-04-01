import GameScene from "./GameSCene"
import ArmsCtl from "./ArmsCtl"
import ShieldCtl from "./ShieldCtl"
import HeroSpriteClt from "./HeroSpriteClt"
import { GameStatus } from "./GameInterface";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    direction = 0;      // 当前状态 -1表示向左, 1表示向用, 0表示不动
    faceTo = 1;         // 当前面向
    speed = 100;
    state = GameStatus.DAZING;

    gameCtl: GameScene = null;

    @property(ArmsCtl)
    armsCtl: ArmsCtl = null;
    @property(ShieldCtl)
    shieldCtl: ShieldCtl = null;
    @property(HeroSpriteClt)
    HeroSpriteClt: HeroSpriteClt = null;

    // onLoad () {}
    init(gameCtl: GameScene) {
        this.gameCtl = gameCtl;
        this.armsCtl.init(this);
        this.shieldCtl.init(this);
        this.HeroSpriteClt.init(this);
    }

    start () {
    }

    getPosition() {
        return this.node.position;
    }
    /**
     * 设置玩家方向
     * @param dir 
     */
    setDirection(dir: number) {
        this.direction = dir;
        this.faceTo = dir == 0 ? this.faceTo : dir;
        this.node.scaleX = this.faceTo;
    }
    /**
     * 发起攻击
     */
    setArmsState(state: number) {
        if(this.state == GameStatus.DEFENSING) {
            return ;
        }
        this.armsCtl.setArmsState(state);
        this.state = state == GameStatus.RUNNING ? GameStatus.ATTACKING : GameStatus.STOP;
    }
    /**
     * 设置防御状态
     */
    setShieldState(state: number) {
        if(this.state == GameStatus.ATTACKING) {
            return ;
        }
        this.shieldCtl.setShieldState(state);
        this.state = state == GameStatus.RUNNING ? GameStatus.DEFENSING : GameStatus.STOP;
    }
    /**
     * 更新玩家位置
     * @param dt 
     */
    playerUpdate(dt: number) {
        this.armsCtl.armsUpdate(dt);
        if(this.direction == 0) {
            return ;
        }
        this.node.x += this.direction * dt * this.speed;
    }

    /**
     * ---------------------------------- 碰撞回调 ---------------------------------------
     */
    onCollisionEnter(other, self) {
        
    }

    onCollisionStay(other, self) {

    }

    onCollisionExit(other, self) {

    }

}
