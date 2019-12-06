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
    var font;
    (function (font) {
        /*
        * 位图字体
        *注意：素材要保持高度一致
        *要设置了text后才能正常获取宽和高
        */
        var BitmapFont = /** @class */ (function (_super) {
            __extends(BitmapFont, _super);
            function BitmapFont(config) {
                var _this = _super.call(this) || this;
                /** 字体间距 */
                _this._spacing = 0;
                /** 字体图片列表 */
                _this.bits = [];
                //设置缓存
                _this.cacheAs = "normal";
                _this.cacheAsBitmap = false;
                _this.staticCache = true;
                //设置字体资源配置
                _this.config = config;
                return _this;
            }
            Object.defineProperty(BitmapFont, "imagePool", {
                /** 公用缓存池 */
                get: function () {
                    if (!this._imagePool)
                        this._imagePool = new util.PoolUtil(Laya.Image);
                    return this._imagePool;
                },
                enumerable: true,
                configurable: true
            });
            BitmapFont.prototype.destroy = function () {
                this.reset();
                this.bits = null;
                _super.prototype.destroy.call(this, false);
            };
            BitmapFont.prototype.layoutBit = function () {
                var tox = 0; //起始位置
                var maxH = 0;
                for (var index = 0; index < this.bits.length; index++) {
                    var bit = this.bits[index];
                    bit.visible = true;
                    bit.x = tox;
                    bit.bottom = 0;
                    tox += bit.width + this._spacing;
                    if (bit.height > maxH)
                        maxH = bit.height;
                }
                this.width = tox - this._spacing;
                this.height = maxH;
                this.reCache();
            };
            /** 回收 */
            BitmapFont.prototype.reset = function () {
                for (var index = 0; index < this.bits.length; index++) {
                    var bit = this.bits[index];
                    BitmapFont.imagePool.recover(bit);
                }
                this.bits.length = 0;
            };
            /** 创建 */
            BitmapFont.prototype.creatFont = function () {
                var strArr = this._txt.split(""); //
                for (var index = 0; index < strArr.length; index++) {
                    var str = strArr[index];
                    var url = this.config[str];
                    if (!url)
                        continue;
                    var bit = BitmapFont.imagePool.getItem();
                    bit.skin = url;
                    this.addChild(bit);
                    this.bits.push(bit);
                }
                this.layoutBit();
            };
            Object.defineProperty(BitmapFont.prototype, "text", {
                /**
                 * 文本内容
                 */
                get: function () {
                    return this._txt;
                },
                /**
                 * 设置文本内容
                 */
                set: function (value) {
                    if (this._txt == value)
                        return;
                    this._txt = value;
                    this.reset();
                    this.creatFont();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BitmapFont.prototype, "spacing", {
                /**
                 * 设置字间距(def=0)
                 */
                set: function (value) {
                    if (this._spacing == value)
                        return;
                    this._spacing = value;
                    this.layoutBit();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 更换字体
             * @param config 新字体配置表
             * @param spacing 新间距
             * @param isUpdate 是否更新文字到最新字体
             */
            BitmapFont.prototype.changeFont = function (config, spacing, isUpdate) {
                if (isUpdate === void 0) { isUpdate = true; }
                this.config = config;
                this.spacing = spacing;
                if (isUpdate) {
                    this.reset();
                    this.creatFont();
                }
            };
            return BitmapFont;
        }(Laya.Box));
        font.BitmapFont = BitmapFont;
    })(font = common.font || (common.font = {}));
})(common || (common = {}));
//# sourceMappingURL=BitmapFont.js.map