//Don't modify this if you want to re-modify the behaviortree in the future
//#########################################{"class":"go.TreeModel","nodeDataArray":[{"catagory":"Composite","color":"lightgreen","key":-1,"loc":"99.49999999999997 230.99999999999966","name":"Root","parameter":"{}","src":"icon/root.svg","textEditable":false,"type":"Root"},{"catagory":"Action","color":"lightcoral","key":-2,"loc":"684.4999999999986 270.64999999999964","name":"Attack","parameter":"{\"size\":30}","parent":-10,"src":"icon/customaction.svg","textEditable":true,"type":"Action"},{"catagory":"Condition","color":"palegoldenrod","key":-3,"loc":"433.50000000000057 191.64999999999998","name":"Look","parameter":"{\"radio\":300}","parent":-6,"src":"icon/customcondition.svg","textEditable":true,"type":"Condition"},{"catagory":"Action","color":"lightcoral","key":-4,"loc":"295.4999999999998 288.64999999999986","name":"Patrol","parameter":"{\"areaSize\":200}","parent":-7,"src":"icon/customaction.svg","textEditable":true,"type":"Action"},{"catagory":"Composite","color":"lightblue","key":-6,"loc":"292.4999999999998 215.3499999999998","name":"Sequence","parameter":"{}","parent":-7,"src":"icon/sequence.svg","textEditable":true,"type":"Sequence"},{"catagory":"Composite","color":"lightblue","key":-7,"loc":"194.4999999999999 229.34999999999997","name":"Priority","parameter":"{}","parent":-1,"src":"icon/priority.svg","textEditable":true,"type":"Priority"},{"catagory":"Composite","color":"lightblue","key":-8,"loc":"433.49999999999943 257.70000000000005","name":"Priority","parameter":"{}","parent":-6,"src":"icon/priority.svg","textEditable":true,"type":"Priority"},{"catagory":"Action","color":"lightcoral","key":-9,"loc":"559.4999999999997 316.6999999999997","name":"Defense","parameter":"{}","parent":-8,"src":"icon/customaction.svg","textEditable":true,"type":"Action"},{"catagory":"Composite","color":"lightblue","key":-10,"loc":"558.0000000000001 244.9999999999999","name":"Sequence","parameter":"{}","parent":-8,"src":"icon/sequence.svg","textEditable":true,"type":"Sequence"},{"catagory":"Condition","color":"palegoldenrod","key":-11,"loc":"680.5000000000003 195.64999999999986","name":"Look","parameter":"{\"radio\":150}","parent":-10,"src":"icon/customcondition.svg","textEditable":true,"type":"Condition"}]}#############################################


cc.Class({
extends: cc.Component,
editor: {
inspector: 'packages://behaviortree-editor/bt-inspector.js'
},
properties: {
},
onLoad: function () {
let b3 = require('b3core.0.1.0module');
let self = this;
let  Attack = b3.Class(b3.Action);
Attack.prototype.name = 'Attack';
Attack.prototype.__Action_initialize = Attack.prototype.initialize;
Attack.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Action_initialize();
         this.parameter = settings.parameter;
}
Attack.prototype.enter = function(tick){
           return self.getComponent('Attack').enter(tick,b3,this);
}
Attack.prototype.open = function(tick) {
           return self.getComponent('Attack').open(tick,b3,this);
}
Attack.prototype.tick = function(tick) {
           return self.getComponent('Attack').tick(tick,b3,this);
}
Attack.prototype.close = function(tick) {
           return self.getComponent('Attack').close(tick,b3,this);
}
Attack.prototype.exit = function(tick) {
           return self.getComponent('Attack').exit(tick,b3,this);
}
let  Look = b3.Class(b3.Condition);
Look.prototype.name = 'Look';
Look.prototype.__Condition_initialize = Look.prototype.initialize;
Look.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Condition_initialize();
         this.parameter = settings.parameter;
}
Look.prototype.enter = function(tick){
           return self.getComponent('Look').enter(tick,b3,this);
}
Look.prototype.open = function(tick) {
           return self.getComponent('Look').open(tick,b3,this);
}
Look.prototype.tick = function(tick) {
           return self.getComponent('Look').tick(tick,b3,this);
}
Look.prototype.close = function(tick) {
           return self.getComponent('Look').close(tick,b3,this);
}
Look.prototype.exit = function(tick) {
           return self.getComponent('Look').exit(tick,b3,this);
}
let  Patrol = b3.Class(b3.Action);
Patrol.prototype.name = 'Patrol';
Patrol.prototype.__Action_initialize = Patrol.prototype.initialize;
Patrol.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Action_initialize();
         this.parameter = settings.parameter;
}
Patrol.prototype.enter = function(tick){
           return self.getComponent('Patrol').enter(tick,b3,this);
}
Patrol.prototype.open = function(tick) {
           return self.getComponent('Patrol').open(tick,b3,this);
}
Patrol.prototype.tick = function(tick) {
           return self.getComponent('Patrol').tick(tick,b3,this);
}
Patrol.prototype.close = function(tick) {
           return self.getComponent('Patrol').close(tick,b3,this);
}
Patrol.prototype.exit = function(tick) {
           return self.getComponent('Patrol').exit(tick,b3,this);
}
let  Defense = b3.Class(b3.Action);
Defense.prototype.name = 'Defense';
Defense.prototype.__Action_initialize = Defense.prototype.initialize;
Defense.prototype.initialize = function(settings){
         settings = settings || {};
         this.__Action_initialize();
         this.parameter = settings.parameter;
}
Defense.prototype.enter = function(tick){
           return self.getComponent('Defense').enter(tick,b3,this);
}
Defense.prototype.open = function(tick) {
           return self.getComponent('Defense').open(tick,b3,this);
}
Defense.prototype.tick = function(tick) {
           return self.getComponent('Defense').tick(tick,b3,this);
}
Defense.prototype.close = function(tick) {
           return self.getComponent('Defense').close(tick,b3,this);
}
Defense.prototype.exit = function(tick) {
           return self.getComponent('Defense').exit(tick,b3,this);
}
let tree = new b3.BehaviorTree();
tree.root = new b3.Sequence({parameter:{},children:[new b3.Priority({parameter:{},children:[new b3.Sequence({parameter:{},children:[new Look({parameter:{'radio':300}}),new b3.Priority({parameter:{},children:[new b3.Sequence({parameter:{},children:[new Look({parameter:{'radio':150}}),new Attack({parameter:{'size':30}})]}),new Defense({parameter:{}})]})]}),new Patrol({parameter:{'areaSize':200}})]})]});
this.tree = tree;
this.blackboard = new b3.Blackboard();
this.b3 = b3;
},
tick: function(target){
let t = {};
if(target != undefined){t = target;}
this.tree.tick(t,this.blackboard)
}});
