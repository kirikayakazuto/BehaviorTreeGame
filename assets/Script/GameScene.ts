import PlayerCtl from "./PlayerCtl";
import { PlayerDir } from "./GameInterface";
import{GameStatus} from "./GameInterface"
const {ccclass, property} = cc._decorator;

/**
 * 一个简单的样例, 用于学习行为树AI
 * 怪物1, 默认在一段位置内巡逻, 一旦发现目标(玩家), 则发动攻击
 */
@ccclass
export default class GameScene extends cc.Component {

    @property(PlayerCtl)
    playerCtl: PlayerCtl = null;

    @property(cc.Node)
    master: cc.Node = null;

    stepInterval = 60;
    restRunningSecond = 0;
    isRunning = false;


    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }


    start () {
        this.playerCtl.init(this);
        this.openCollisionManager();
    }

    openCollisionManager() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
    }
    closeCollisionManager() {
        var manager = cc.director.getCollisionManager();
        // manager.enabledDebugDraw = false;
        manager.enabled = false;
    }

    onKeyDown(event: any) {
        switch(event.keyCode) {
            case cc.KEY.left:
            case cc.KEY.a:
                this.playerCtl.setDirection(PlayerDir.left);
            break;
            case cc.KEY.right:
            case cc.KEY.d:
                this.playerCtl.setDirection(PlayerDir.right);
            break;
            case cc.KEY.j:
                this.playerCtl.setArmsState(GameStatus.RUNNING);
            break;
            case cc.KEY.k:
                this.playerCtl.setShieldState(GameStatus.RUNNING);
            break;
        }
    }
    onKeyUp(event: any) {
        switch(event.keyCode) {
            case cc.KEY.left:
            case cc.KEY.a:
            case cc.KEY.right:
            case cc.KEY.d:
                this.playerCtl.setDirection(PlayerDir.stop);
            break;

            case cc.KEY.j:
                this.playerCtl.setArmsState(GameStatus.stop);
            break;
            case cc.KEY.k:
                this.playerCtl.setShieldState(GameStatus.stop);
            break; 
            
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }


    update(dt: number) {   
        let ms = dt;
        this.playerCtl.playerUpdate(ms);

        if(!this.isRunning) {
            this.restRunningSecond = this.stepInterval / 1000;    
            this.isRunning = true;
        }
        this.restRunningSecond -= ms;
        if(this.restRunningSecond <= 0) {
            this.isRunning = false;
            this.runBehaviorTree(ms); 
        }
    }
    /**
     * 执行行为树
     * @param ms 
     */
    runBehaviorTree(ms: number) {
        let target = {
            dt: ms,
        };
        this.master.getComponent("BehaviorTree").tick(target);
    }


}
