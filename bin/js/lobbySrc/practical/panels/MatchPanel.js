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
        var MatchPanel = /** @class */ (function (_super) {
            __extends(MatchPanel, _super);
            function MatchPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MatchPanel.assets = lobby.asset.AssetConfig.MatchPanel;
            return MatchPanel;
        }(panel.MatchPanelBase));
        panel.MatchPanel = MatchPanel;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=MatchPanel.js.map