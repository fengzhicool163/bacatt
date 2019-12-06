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
    var component;
    (function (component) {
        var PlayerMoneyScrollBoxBase = /** @class */ (function (_super) {
            __extends(PlayerMoneyScrollBoxBase, _super);
            function PlayerMoneyScrollBoxBase() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.pointIndex = -1;
                return _this;
            }
            /**
             * 默认转换方法，子类重写
             * @param curNum
             */
            PlayerMoneyScrollBoxBase.prototype.getCurTargetNumString = function (curNum) {
                var string = util.StringUtils.FormatGameMoney(curNum, this.pointIndex);
                return string;
            };
            /**
            * 直接完成滚动
            */
            PlayerMoneyScrollBoxBase.prototype.finish = function () {
                this.stopUpdate();
                this.curNum = this.targetNum;
                var str = util.StringUtils.FormatGameMoney(this.curNum, 2);
                this.text = str;
                if (this.finishCallBack) {
                    this.finishCallBack.run();
                    this.finishCallBack = null;
                }
            };
            /**
             * 开始滚动数字
             * @param startNum 开始数字
             * @param targetNum 目标数字
             * @param duration 滚动时间 单位毫秒！！
             * @param prefix 滚动数字前缀
             * @param suffix 滚动数字后缀
             */
            PlayerMoneyScrollBoxBase.prototype.ScrollNum = function (targetNum, duration, finishCallBack, prefix, suffix) {
                if (prefix === void 0) { prefix = null; }
                if (suffix === void 0) { suffix = null; }
                var startNum = parseFloat(this.text);
                var startStr = startNum.toString();
                this.pointIndex = startStr.indexOf(".");
                if (this.pointIndex == -1) {
                    this.pointIndex = 0;
                }
                else {
                    this.pointIndex = startStr.length - 1 - this.pointIndex;
                }
                _super.prototype.ScrollToNum.call(this, startNum, targetNum, duration, finishCallBack, prefix, suffix);
            };
            return PlayerMoneyScrollBoxBase;
        }(common.component.ScrollLabel));
        component.PlayerMoneyScrollBoxBase = PlayerMoneyScrollBoxBase;
    })(component = common.component || (common.component = {}));
})(common || (common = {}));
//# sourceMappingURL=PlayerMoneyScrollBoxBase.js.map