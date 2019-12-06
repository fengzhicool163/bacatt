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
        var GameHistoryPanel = /** @class */ (function (_super) {
            __extends(GameHistoryPanel, _super);
            function GameHistoryPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameHistoryPanel.prototype.sendReq = function () {
                var _this = this;
                this.noData.visible = false;
                //请求数据
                var historyOb = new net.DefaultNetObserver();
                historyOb.onSuccess = function (historyData) {
                    var dataArray = historyData.datas;
                    _this.noData.visible = (dataArray.length == 0);
                    _this.updateHistoryView(dataArray);
                    common.panel.LoadingPanel.Hide();
                    _this.closeBtn.disabled = false;
                };
                historyOb.onError = function (error, msg) {
                    //TODO发生错误了
                    //关闭遮罩
                    common.panel.LoadingPanel.Hide();
                    _this.closeBtn.disabled = false;
                };
                //发送消息
                var balanceAction = new net.HistoryAction().bindObserver(historyOb);
                balanceAction.excute();
            };
            GameHistoryPanel.assets = lobby.asset.AssetConfig.GameHistoryPanel;
            return GameHistoryPanel;
        }(panel.GameHistoryPanelBase));
        panel.GameHistoryPanel = GameHistoryPanel;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=GameHistoryPanel.js.map