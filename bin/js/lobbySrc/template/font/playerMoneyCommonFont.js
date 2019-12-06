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
    var font;
    (function (font) {
        /*
        * lobby.font.playerMoneyCommonFont
        *注意：素材要保持高度一致
        *要设置了text后才能正常获取宽和高
        */
        var playerMoneyCommonFont = /** @class */ (function (_super) {
            __extends(playerMoneyCommonFont, _super);
            function playerMoneyCommonFont() {
                return _super.call(this, lobby.asset.AssetConfig.playerMoneyCommonFont) || this;
            }
            return playerMoneyCommonFont;
        }(common.font.BitmapFont));
        font.playerMoneyCommonFont = playerMoneyCommonFont;
    })(font = lobby.font || (lobby.font = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=playerMoneyCommonFont.js.map