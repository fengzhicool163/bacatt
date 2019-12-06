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
var common;
(function (common) {
    var panel;
    (function (panel) {
        var LoadingPanel = /** @class */ (function (_super) {
            __extends(LoadingPanel, _super);
            function LoadingPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoadingPanel.prototype.initComponents = function () {
            };
            LoadingPanel.prototype.setMask = function (showMask) {
                this.bgMask.alpha = showMask ? 1 : 0;
            };
            LoadingPanel.prototype.Show = function () {
                if (GameMain)
                    console.log("LoadingPanel Show");
                this.loadingAnim.play(0, true);
                this.visible = true;
            };
            LoadingPanel.prototype.Hide = function () {
                if (GameMain)
                    console.log("LoadingPanel Hide");
                this.loadingAnim.stop();
                this.visible = false;
            };
            /**
             * 显示Loading遮罩
             * @param showMask
             */
            LoadingPanel.Show = function (showMask) {
                if (showMask === void 0) { showMask = true; }
                UIManager.getInstance().ShowMaskUI(LoadingPanel, LoadingPanel.assets, this, function (ui) {
                    ui.setMask(showMask);
                });
            };
            /**
             * 隐藏Loading遮罩
             * @param destroy
             */
            LoadingPanel.Hide = function (destroy) {
                if (destroy === void 0) { destroy = false; }
                UIManager.getInstance().HideUI(LoadingPanel, destroy);
            };
            LoadingPanel.assets = common.asset.AssetConfig.LoadingPanel;
            return LoadingPanel;
        }(ui.commonUI.Panels.LoadingPanelUI));
        panel.LoadingPanel = LoadingPanel;
    })(panel = common.panel || (common.panel = {}));
})(common || (common = {}));
//# sourceMappingURL=LoadingPanel.js.map