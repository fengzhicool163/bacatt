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
        var ScrollLabel = /** @class */ (function (_super) {
            __extends(ScrollLabel, _super);
            function ScrollLabel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isUpdate = false;
                _this.prefix = null;
                _this.suffix = null;
                _this.startNum = 0;
                _this.targetNum = 0;
                _this.addNum = 0;
                _this.curNum = 0;
                _this.duration = 0;
                _this.curOverTime = 0;
                return _this;
            }
            /**
             * 默认转换方法，子类重写
             * @param curNum
             */
            ScrollLabel.prototype.getCurTargetNumString = function (curNum) {
                return curNum.toFixed(2).toString();
            };
            ScrollLabel.prototype.setCurTargetNum = function (curNum, isLayout) {
                if (isLayout === void 0) { isLayout = false; }
                var curString = this.getCurTargetNumString(curNum);
                if (this.prefix)
                    curString = this.prefix + curString;
                if (this.suffix)
                    curString = curString + this.suffix;
                if (isLayout) {
                    this.text = curString;
                }
                else {
                    this.changeText(curString);
                }
            };
            ScrollLabel.prototype.scrollUpdate = function () {
                var dt = this.timer.delta; //该帧执行时间
                this.curOverTime += dt;
                if (this.curOverTime >= this.duration) {
                    this.finish();
                }
                else {
                    this.curNum = this.startNum + this.curOverTime / this.duration * this.addNum;
                    this.setCurTargetNum(this.curNum);
                }
            };
            ScrollLabel.prototype.startUpdate = function () {
                if (!this.isUpdate) {
                    this.isUpdate = true;
                    this.timer.frameLoop(1, this, this.scrollUpdate);
                }
            };
            ScrollLabel.prototype.stopUpdate = function () {
                if (this.isUpdate) {
                    this.isUpdate = false;
                    this.timer.clear(this, this.scrollUpdate);
                }
            };
            ScrollLabel.prototype.startScroll = function () {
                this.curOverTime = 0;
                this.setCurTargetNum(this.startNum, true);
                this.startUpdate();
            };
            /**
             * 开始滚动数字
             * @param startNum 开始数字
             * @param targetNum 目标数字
             * @param duration 滚动时间 单位毫秒！！
             * @param prefix 滚动数字前缀
             * @param suffix 滚动数字后缀
             */
            ScrollLabel.prototype.ScrollToNum = function (startNum, targetNum, duration, finishCallBack, prefix, suffix) {
                if (prefix === void 0) { prefix = null; }
                if (suffix === void 0) { suffix = null; }
                this.finishCallBack = finishCallBack;
                this.prefix = prefix;
                this.suffix = suffix;
                this.curNum = this.startNum = startNum;
                this.targetNum = targetNum;
                this.addNum = this.targetNum - this.startNum;
                this.duration = duration;
                if (duration == 0) {
                    this.setCurTargetNum(targetNum);
                }
                else {
                    this.startScroll();
                }
            };
            /**
             * 直接完成滚动
             */
            ScrollLabel.prototype.finish = function () {
                this.stopUpdate();
                this.curNum = this.targetNum;
                this.setCurTargetNum(this.curNum, true);
                if (this.finishCallBack) {
                    this.finishCallBack.run();
                    this.finishCallBack = null;
                }
            };
            return ScrollLabel;
        }(laya.ui.Label));
        component.ScrollLabel = ScrollLabel;
    })(component = common.component || (common.component = {}));
})(common || (common = {}));
//# sourceMappingURL=ScrollNumLabel.js.map