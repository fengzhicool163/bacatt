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
        var CheckGroupBox = /** @class */ (function (_super) {
            __extends(CheckGroupBox, _super);
            function CheckGroupBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.index = 0;
                return _this;
            }
            CheckGroupBox.prototype.initComponents = function () {
                //
                this.checkGroup = [];
                for (var index = 0; index < this.bindObj.numChildren; index++) {
                    var child = this.bindObj.getChildAt(index);
                    var checkBox = child;
                    if (checkBox) {
                        this.checkGroup.push(checkBox);
                        checkBox.selected = false;
                        checkBox.on(Laya.Event.CHANGE, this, this.changeState, [checkBox]);
                    }
                }
            };
            CheckGroupBox.prototype.destory = function () {
                var _this = this;
                this.checkGroup.forEach(function (value) {
                    value.off(Laya.Event.CHANGE, _this, _this.changeState);
                });
                this.checkGroup = null;
                _super.prototype.destroy.call(this);
            };
            CheckGroupBox.prototype.changeState = function (item) {
                if (this.prev && this.prev != item) {
                    this.prev.selected = false;
                    this.prev.mouseEnabled = true;
                }
                item.mouseEnabled = false;
                this.index = this.checkGroup.indexOf(item);
                var bl = this.prev ? this.prev.mouseEnabled : true;
                if (this.caller && this.callback && bl) {
                    this.callback.apply(this.caller);
                }
                this.prev = item;
            };
            Object.defineProperty(CheckGroupBox.prototype, "selectIndex", {
                get: function () {
                    return this.index;
                },
                set: function (value) {
                    var cb = this.checkGroup[value];
                    cb.selected = true;
                },
                enumerable: true,
                configurable: true
            });
            CheckGroupBox.prototype.setGrayIndex = function (value, gray) {
                var cb = this.checkGroup[value];
                cb.mouseEnabled = !gray;
                cb.gray = gray;
                if (gray)
                    cb.selected = false;
            };
            CheckGroupBox.prototype.reset = function () {
                this.checkGroup.forEach(function (value) {
                    value.selected = false;
                    value.gray = false;
                    value.mouseEnabled = true;
                });
                if (this.prev) {
                    this.prev = null;
                }
            };
            CheckGroupBox.prototype.setToggleChangeFunc = function (caller, callback) {
                this.caller = caller;
                this.callback = callback;
            };
            return CheckGroupBox;
        }(component.UIComponent));
        component.CheckGroupBox = CheckGroupBox;
    })(component = common.component || (common.component = {}));
})(common || (common = {}));
//# sourceMappingURL=CheckGroupBox.js.map