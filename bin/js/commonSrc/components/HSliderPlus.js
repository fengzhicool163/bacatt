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
        var HSliderPlus = /** @class */ (function (_super) {
            __extends(HSliderPlus, _super);
            function HSliderPlus() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.value = null;
                _this.downMouseX = 0;
                _this.downPointX = 0;
                _this.startMove = false;
                return _this;
            }
            HSliderPlus.prototype.initComponents = function () {
                //初始化数据
                this.bgFrameWidth = this.bindObj.width = this.bindObj.bgFrame.width;
                this.bindObj.height = this.bindObj.bgFrame.height;
                //设置初始值
                this.Value = 0;
                //
                this.bindObj.timer.frameLoop(1, this, this.ctrlPointMove);
                //
                this.bindObj.ctrlPoint.on(Laya.Event.MOUSE_DOWN, this, this.ctrlPointDown);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.ctrlPointUp);
            };
            HSliderPlus.prototype.destroy = function () {
                this.bindObj.ctrlPoint.off(Laya.Event.MOUSE_DOWN, this, this.ctrlPointDown);
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.ctrlPointUp);
                this.bindObj.timer.clear(this, this.ctrlPointMove);
                _super.prototype.destroy.call(this);
            };
            //滑动响应
            HSliderPlus.prototype.ctrlPointDown = function () {
                this.downMouseX = Laya.stage.mouseX;
                this.downPointX = this.bindObj.ctrlPoint.x;
                this.startMove = true;
            };
            //滑动响应
            HSliderPlus.prototype.ctrlPointMove = function () {
                if (this.startMove) {
                    var offectX = Laya.stage.mouseX - this.downMouseX;
                    var pro = (this.downPointX + offectX) / this.bgFrameWidth;
                    this.Value = pro;
                }
            };
            //滑动响应
            HSliderPlus.prototype.ctrlPointUp = function () {
                this.startMove = false;
            };
            Object.defineProperty(HSliderPlus.prototype, "Value", {
                /** 滑动条滑动百分比 */
                get: function () {
                    return this.value;
                },
                /** 滑动条滑动百分比 */
                set: function (value) {
                    value = Math.max(0, Math.min(1, value));
                    if (this.value == value)
                        return;
                    this.value = value;
                    //
                    this.bindObj.sliderBar.width = this.bindObj.ctrlPoint.x = this.value * this.bgFrameWidth;
                    //
                    if (this.sliderValueChangeHandler) {
                        this.sliderValueChangeHandler.runWith(this.value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            HSliderPlus.prototype.justSetValue = function (value) {
                value = Math.max(0, Math.min(1, value));
                if (this.value == value)
                    return;
                this.value = value;
                //
                this.bindObj.sliderBar.width = this.bindObj.ctrlPoint.x = this.value * this.bgFrameWidth;
            };
            return HSliderPlus;
        }(component.UIComponent));
        component.HSliderPlus = HSliderPlus;
    })(component = common.component || (common.component = {}));
})(common || (common = {}));
//# sourceMappingURL=HSliderPlus.js.map