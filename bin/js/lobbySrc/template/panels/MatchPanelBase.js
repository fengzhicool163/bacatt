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
        var MatchPanelBase = /** @class */ (function (_super) {
            __extends(MatchPanelBase, _super);
            function MatchPanelBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MatchPanelBase.prototype.initComponents = function () {
            };
            MatchPanelBase.prototype.setMask = function (showMask) {
                this.bgMask.alpha = showMask ? 1 : 0;
            };
            MatchPanelBase.prototype.Show = function () {
                if (GameMain)
                    console.log("LoadingPanel Show");
                this.visible = true;
            };
            MatchPanelBase.prototype.Hide = function () {
                if (GameMain)
                    console.log("LoadingPanel Hide");
                this.visible = false;
            };
            /**
             * 显示Loading遮罩
             * @param showMask
             */
            MatchPanelBase.Show = function (showMask) {
                if (showMask === void 0) { showMask = false; }
                UIManager.getInstance().ShowMaskUI(panel.MatchPanel, panel.MatchPanel.assets, this, function (ui) {
                    ui.setMask(showMask);
                });
            };
            /**
             * 隐藏Loading遮罩
             * @param destroy
             */
            MatchPanelBase.Hide = function (destroy) {
                if (destroy === void 0) { destroy = false; }
                UIManager.getInstance().HideUI(panel.MatchPanel, destroy);
            };
            return MatchPanelBase;
        }(ui.lobbyUI.Panels.MatchPanelUI));
        panel.MatchPanelBase = MatchPanelBase;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=MatchPanelBase.js.map