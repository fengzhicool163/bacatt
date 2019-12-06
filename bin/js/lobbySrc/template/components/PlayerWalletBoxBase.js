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
        /** 玩家钱包Box模板 */
        var PlayerWalletBoxBase = /** @class */ (function (_super) {
            __extends(PlayerWalletBoxBase, _super);
            function PlayerWalletBoxBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerWalletBoxBase.prototype.initComponents = function () {
                //
                EventManager.addTouchScaleListener(this.bindObj.rechargeBtn, this, this.rechargeBtnFunc);
                //
                this.resetBox();
            };
            PlayerWalletBoxBase.prototype.resetBox = function () {
                this.bindObj.visible = false;
            };
            PlayerWalletBoxBase.prototype.clearBox = function () {
                this.resetBox();
            };
            /**
             * 设置钱包金钱显示
             * @param money
             * @param isAnim
             */
            PlayerWalletBoxBase.prototype.setData = function (money, isAnim) {
                if (isAnim === void 0) { isAnim = false; }
                this.bindObj.moneyLabel.text = util.StringUtils.FormatMoney(money, 2);
                if (isAnim) {
                    this.bindObj.showAnim.play(0, false);
                }
                this.bindObj.visible = true;
            };
            /** 充值按钮点击事件 */
            PlayerWalletBoxBase.prototype.rechargeBtnFunc = function () {
                //
                lobby.SoundManager.PlayOpenPanel();
                //跳转充值 
                util.PostTool.jumpToRecharge();
            };
            return PlayerWalletBoxBase;
        }(common.component.UIBox));
        component.PlayerWalletBoxBase = PlayerWalletBoxBase;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=PlayerWalletBoxBase.js.map