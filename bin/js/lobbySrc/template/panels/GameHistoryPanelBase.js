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
    var panel;
    (function (panel) {
        var GameHistoryPanelBase = /** @class */ (function (_super) {
            __extends(GameHistoryPanelBase, _super);
            function GameHistoryPanelBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameHistoryPanelBase.prototype.initComponents = function () {
                //关闭按钮
                EventManager.addTouchScaleListener(this.closeBtn, this, this.closeBtnFunc);
                //
                this.itemPool = new util.PoolUtil(items.GameHistoryItem, 10, 10);
                this.itemList = [];
            };
            GameHistoryPanelBase.prototype.Show = function () {
                _super.prototype.Show.call(this);
                //请求数据
                this.reqHistoryData();
                //
                this.openAnim(this.bgFrame);
            };
            GameHistoryPanelBase.prototype.Hide = function () {
                //清空界面
                for (var index = 0; index < this.itemList.length; index++) {
                    var item = this.itemList[index];
                    this.itemPool.recover(item);
                }
                this.itemList.length = 0;
                //设置节点缓存
                this.container.reCache();
                _super.prototype.Hide.call(this);
            };
            GameHistoryPanelBase.prototype.destroy = function () {
                this.itemPool.destroy();
                _super.prototype.destroy.call(this);
            };
            GameHistoryPanelBase.prototype.reqHistoryData = function () {
                //关闭按钮点击
                this.closeBtn.disabled = true;
                //延时打开遮罩
                common.panel.LoadingPanel.Show();
                //
                this.sendReq();
            };
            GameHistoryPanelBase.prototype.updateHistoryView = function (datas) {
                //如果界面已经销毁了
                if (this.destroyed)
                    return;
                //设置item显示
                for (var i = 0; i < datas.length; i++) {
                    var itemData = datas[i];
                    itemData.index = i + 1;
                    //
                    var item = this.itemPool.getItem();
                    item.setData(itemData);
                    item.pos(0, i * 50);
                    item.visible = true;
                    //
                    this.container.addChild(item);
                    this.itemList.push(item);
                }
                //重置节点大小
                this.container.size(678, datas.length * 50 - 10);
                this.container.event("resize");
                //设置节点缓存
                this.container.reCache();
            };
            /******************************************************* 按钮点击事件 *********************************************/
            GameHistoryPanelBase.prototype.closeBtnFunc = function () {
                lobby.SoundManager.PlayClose();
                UIManager.getInstance().HideUI(panel.GameHistoryPanel);
            };
            return GameHistoryPanelBase;
        }(ui.lobbyUI.Panels.GameHistoryPanelUI));
        panel.GameHistoryPanelBase = GameHistoryPanelBase;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=GameHistoryPanelBase.js.map