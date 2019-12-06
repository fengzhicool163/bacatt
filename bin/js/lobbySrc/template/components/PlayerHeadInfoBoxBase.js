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
        /** 玩家头像与名称盒子模板 */
        var PlayerHeadInfoBoxBase = /** @class */ (function (_super) {
            __extends(PlayerHeadInfoBoxBase, _super);
            function PlayerHeadInfoBoxBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerHeadInfoBoxBase.prototype.initComponents = function () {
                this.resetBox();
            };
            PlayerHeadInfoBoxBase.prototype.resetBox = function () {
                this.bindObj.showAnim.stop();
                this.bindObj.visible = false;
            };
            PlayerHeadInfoBoxBase.prototype.clearBox = function () {
                this.resetBox();
            };
            /**
             * 设置玩家头像与名称盒子显示
             * @param avatar 头像
             * @param username 名称
             * @param isAnim 是否播放进场动画
             */
            PlayerHeadInfoBoxBase.prototype.setData = function (avatar, username, isAnim) {
                if (isAnim === void 0) { isAnim = false; }
                //设置名称
                this.bindObj.nameLabel.text = util.StringUtils.starString(username, "****");
                //设置头像
                var url = lobby.asset.AssetConfig.GetHeadAsset(avatar);
                this.bindObj.header.loadImage(url, 0, 0, 90, 90);
                //显示并刷新缓存
                this.bindObj.visible = true;
                //动画
                if (isAnim) {
                    this.bindObj.showAnim.play(0, false);
                }
                else {
                    this.bindObj.showAnim.play(15, false);
                }
            };
            return PlayerHeadInfoBoxBase;
        }(common.component.UIBox));
        component.PlayerHeadInfoBoxBase = PlayerHeadInfoBoxBase;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=PlayerHeadInfoBoxBase.js.map