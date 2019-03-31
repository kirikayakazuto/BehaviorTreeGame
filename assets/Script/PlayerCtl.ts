import GameScene from "./GameSCene"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    direction = 0;      // 当前状态 -1表示向左, 1表示向用, 0表示不动
    faceTo = 1;         // 当前面向
    speed = 100;

    gameCtl: GameScene = null;

    // onLoad () {}

    start () {

    }

    getPosition() {
        return this.node.position;
    }

    init(gameCtl: GameScene) {
        this.gameCtl = gameCtl;
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
     * 更新玩家位置
     * @param dt 
     */
    playerUpdate(dt: number) {
        if(this.direction == 0) {
            return ;
        }
        this.node.x += this.direction * dt * this.speed;
    }

}
