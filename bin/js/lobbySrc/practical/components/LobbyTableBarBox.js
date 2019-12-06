var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lobby;
(function (lobby) {
    var component;
    (function (component) {
        /** 游戏大厅牌桌条 */
        var LobbyTableBarBox = /** @class */ (function (_super) {
            __extends(LobbyTableBarBox, _super);
            function LobbyTableBarBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LobbyTableBarBox.prototype.initComponents = function () {
                //大路途盒子
                this.trendBox = this.bindScript(component.LobbyTableTrendBox, this.bindObj.lobbyTableTrendBoxObj);
                //状态列表
                this.stateList = [];
            };
            /** 重置盒子清空大路图与状态队列 */
            LobbyTableBarBox.prototype.resetBox = function () {
                //
                this.data = null;
                //
                this.trendBox.clear();
                //
                Laya.timer.clear(this, this.updateState);
            };
            /** 销毁盒子清空大路图与状态队列 */
            LobbyTableBarBox.prototype.clearBox = function () {
                this.resetBox();
                this.bindObj.visible = false;
            };
            /** 销毁 */
            LobbyTableBarBox.prototype.destroy = function () {
                this.resetBox();
                _super.prototype.destroy.call(this);
            };
            /** 更新状态文字 */
            LobbyTableBarBox.prototype.updateCDText = function () {
                var curCountDown = Math.max(0, this.curCountDownNum);
                curCountDown = Math.floor(curCountDown);
                var str = this.curStateName + " " + curCountDown + this.data.tableinfo.status.timeName;
                this.bindObj.stateCDLabel.text = str;
            };
            /** 更新状态倒计时文字 */
            LobbyTableBarBox.prototype.updateCountDown = function (changeValue) {
                this.curCountDownNum += changeValue;
            };
            /** 更新状态倒计时 */
            LobbyTableBarBox.prototype.updateState = function () {
                this.updateCountDown(-0.5);
                this.updateCDText();
                if (this.curCountDownNum <= 0) {
                    this.nextState();
                }
            };
            /** 下一个状态显示 */
            LobbyTableBarBox.prototype.nextState = function () {
                var curState = this.stateList.shift();
                this.stateList.push(curState);
                this.curStateName = curState.statusName;
                this.updateCountDown(curState.remainTime);
                this.updateCDText();
            };
            /** 开始状态队列 */
            LobbyTableBarBox.prototype.startState = function (data) {
                //倒计时刷新
                Laya.timer.loop(500, this, this.updateState);
                this.curCountDownNum = 0;
                /** 牌桌状态
                    0: {statusName: "准备中", remainTime: 2, id: 1}
                    1: {statusName: "下注中", remainTime: 15, id: 2}
                    2: {statusName: "开牌中", remainTime: 3, id: 3}
                    3: {statusName: "结算中", remainTime: 12, id: 4}
                */
                //重排序执行队列
                this.stateList.length = 0;
                var configs = [].concat(data.config);
                var curState;
                do {
                    curState = configs.pop();
                    this.stateList.unshift(curState);
                    if (curState.id == data.id) {
                        curState.remainTime = data.remainTime;
                        curState.statusName = data.name;
                        break;
                    }
                } while (configs.length > 0);
                //
                this.stateList = this.stateList.concat(configs);
                //开始循环播放状态
                this.nextState();
            };
            /**
             * 设置牌桌条数据
             * @param data
             */
            LobbyTableBarBox.prototype.setData = function (data) {
                //
                this.resetBox();
                this.data = data;
                //牌桌信息
                this.bindObj.tableName.text = data.tableinfo.name;
                this.bindObj.zhunRuLabel.text = data.tableinfo.betamount;
                this.bindObj.betLimitLabel.text = "";
                //棋盘
                this.trendBox.setItemDatas(data.originalList);
                //
                this.startState(data.tableinfo.status);
                //
                this.bindObj.visible = true;
            };
            return LobbyTableBarBox;
        }(common.component.UIBox));
        component.LobbyTableBarBox = LobbyTableBarBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyTableBarBox.js.map