import GameScene from "./GameScene"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    gameCtl: GameScene = null;

    // onLoad () {}

    init(gameCtl: GameScene) {
        this.gameCtl = gameCtl;
    }

    getPlayerPostion() {
        return this.gameCtl.getPlayer().getPosition();
    }

    
    start () {

    }



    // update (dt) {}
}
