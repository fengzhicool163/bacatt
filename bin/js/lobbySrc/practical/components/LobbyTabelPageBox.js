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
        /** 游戏房间牌桌列表页面盒子 */
        var LobbyTabelPageBox = /** @class */ (function (_super) {
            __extends(LobbyTabelPageBox, _super);
            function LobbyTabelPageBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LobbyTabelPageBox.prototype.initComponents = function () {
                //牌桌条缓存池
                this.barPool = new util.PoolView(component.LobbyTableBarBox, ui.lobbyUI.Boxs.LobbyTableBarBoxUI, 4, 4);
                //牌桌条
                this.curShowTableBar = [];
            };
            /** 重置页面回收牌桌条 */
            LobbyTabelPageBox.prototype.resetBox = function () {
                for (var index = 0; index < this.curShowTableBar.length; index++) {
                    var bar = this.curShowTableBar[index];
                    bar.clearBox();
                    this.barPool.recover(bar);
                }
                this.curShowTableBar.length = 0;
            };
            /** 重置页面并隐藏 */
            LobbyTabelPageBox.prototype.clearBox = function () {
                this.resetBox();
                this.bindObj.visible = false;
            };
            /** 销毁页面 */
            LobbyTabelPageBox.prototype.destroy = function () {
                this.clearBox();
                this.barPool.destroy();
                _super.prototype.destroy.call(this);
            };
            /**
             * 设置页面数据
             * @param roomData
             */
            LobbyTabelPageBox.prototype.setData = function (roomData) {
                //重置
                this.resetBox();
                //生成牌桌条
                for (var index = 0; index < roomData.tables.length; index++) {
                    var tableData = roomData.tables[index];
                    var tableBar = this.barPool.getComponent(); // as LobbyTableBarBox;
                    tableBar.setData(tableData);
                    this.bindObj.barNode.addChild(tableBar.bindObj);
                    tableBar.bindObj.y = index * 155;
                    this.curShowTableBar.push(tableBar);
                }
                //刷新页面大小
                this.bindObj.barNode.width = 900;
                this.bindObj.barNode.height = roomData.tables.length * 155;
            };
            return LobbyTabelPageBox;
        }(common.component.UIBox));
        component.LobbyTabelPageBox = LobbyTabelPageBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyTabelPageBox.js.map