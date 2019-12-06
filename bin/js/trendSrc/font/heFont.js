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
var trend;
(function (trend) {
    var font;
    (function (font) {
        /*
        * trend.font.heFont
        *注意：素材要保持高度一致
        *要设置了text后才能正常获取宽和高
        */
        var heFont = /** @class */ (function (_super) {
            __extends(heFont, _super);
            function heFont() {
                return _super.call(this, trend.asset.AssetConfig.heFont) || this;
            }
            return heFont;
        }(common.font.BitmapFont));
        font.heFont = heFont;
    })(font = trend.font || (trend.font = {}));
})(trend || (trend = {}));
//# sourceMappingURL=heFont.js.map