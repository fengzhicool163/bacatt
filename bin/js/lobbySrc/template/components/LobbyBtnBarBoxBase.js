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
        /** 大厅底部按钮条模板 */
        var LobbyBtnBarBoxBase = /** @class */ (function (_super) {
            __extends(LobbyBtnBarBoxBase, _super);
            function LobbyBtnBarBoxBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LobbyBtnBarBoxBase.prototype.initComponents = function () {
                //历史记录
                EventManager.addTouchScaleListener(this.bindObj.historyBtn, this, this.historyBtnFunc);
                //规则
                EventManager.addTouchScaleListener(this.bindObj.ruleBtn, this, this.ruleBtnFunc);
                //设置
                EventManager.addTouchScaleListener(this.bindObj.settingBtn, this, this.settingBtnFunc);
                //
                this.resetBox();
            };
            LobbyBtnBarBoxBase.prototype.resetBox = function () {
                this.bindObj.visible = false;
            };
            LobbyBtnBarBoxBase.prototype.clearBox = function () {
                this.resetBox();
            };
            LobbyBtnBarBoxBase.prototype.setData = function (isAnim) {
                if (isAnim === void 0) { isAnim = true; }
                if (isAnim) {
                    this.bindObj.showAnim.play(0, false);
                }
                else {
                    this.bindObj.showAnim.play(15, false);
                }
                this.bindObj.visible = true;
            };
            LobbyBtnBarBoxBase.prototype.historyBtnFunc = function () {
                lobby.SoundManager.PlayClick();
                UIManager.getInstance().ShowPopUI(lobby.panel.GameHistoryPanel, lobby.panel.GameHistoryPanel.assets);
            };
            LobbyBtnBarBoxBase.prototype.ruleBtnFunc = function () {
                lobby.SoundManager.PlayClick();
                UIManager.getInstance().ShowPopUI(lobby.panel.GameRulePanel, lobby.panel.GameRulePanel.assets);
            };
            LobbyBtnBarBoxBase.prototype.settingBtnFunc = function () {
                lobby.SoundManager.PlayClick();
                UIManager.getInstance().ShowPopUI(lobby.panel.GameSettingPanel, lobby.panel.GameSettingPanel.assets);
            };
            return LobbyBtnBarBoxBase;
        }(common.component.UIBox));
        component.LobbyBtnBarBoxBase = LobbyBtnBarBoxBase;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyBtnBarBoxBase.js.map