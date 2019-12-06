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
        var GameSettingPanel = /** @class */ (function (_super) {
            __extends(GameSettingPanel, _super);
            function GameSettingPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameSettingPanel.assets = lobby.asset.AssetConfig.GameSettingPanel;
            return GameSettingPanel;
        }(panel.GameSettingPanelBase));
        panel.GameSettingPanel = GameSettingPanel;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=GameSettingPanel.js.map