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
        var GameRulePanelBase = /** @class */ (function (_super) {
            __extends(GameRulePanelBase, _super);
            function GameRulePanelBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameRulePanelBase.prototype.initComponents = function () {
                //
                this.contentList = [];
                for (var index = 1; index <= 4; index++) {
                    var content = this["content" + index];
                    this.contentList.push(content);
                }
                //
                this.checkGroup = this.bindScript(common.component.CheckGroupBox, this.checkGroupObj);
                //关闭按钮
                EventManager.addTouchScaleListener(this.closeBtn, this, this.closeBtnFunc);
            };
            GameRulePanelBase.prototype.initView = function () {
                this.checkGroup.selectIndex = 0;
                this.selectContent(0);
                this.checkGroup.setToggleChangeFunc(this, this.menuChangeFunc);
            };
            GameRulePanelBase.prototype.selectContent = function (selectIndex) {
                for (var index = 0; index < this.contentList.length; index++) {
                    var content = this.contentList[index];
                    content.visible = (index == selectIndex);
                }
            };
            GameRulePanelBase.prototype.menuChangeFunc = function () {
                lobby.SoundManager.PlayClick();
                var selectIndex = this.checkGroup.selectIndex;
                this.selectContent(selectIndex);
            };
            GameRulePanelBase.prototype.closeBtnFunc = function () {
                lobby.SoundManager.PlayClose();
                UIManager.getInstance().HideUI(panel.GameRulePanel);
            };
            GameRulePanelBase.prototype.Show = function () {
                this.initView();
                _super.prototype.Show.call(this);
                this.openAnim(this.bgFrame);
            };
            GameRulePanelBase.prototype.Hide = function () {
                this.checkGroup.setToggleChangeFunc(null, null);
                _super.prototype.Hide.call(this);
            };
            return GameRulePanelBase;
        }(ui.lobbyUI.Panels.GameRulePanelUI));
        panel.GameRulePanelBase = GameRulePanelBase;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=GameRulePanelBase.js.map