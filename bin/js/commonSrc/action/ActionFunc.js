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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var common;
(function (common) {
    var action;
    (function (action) {
        /** 动作方法 */
        var ActionFunc = /** @class */ (function (_super) {
            __extends(ActionFunc, _super);
            function ActionFunc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 动作执行方法 */
            ActionFunc.prototype.runActionFunc = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            };
            /** 设置动作数据 */
            ActionFunc.prototype.setActionData = function (caller, callFunc) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                if (this.actionFunc) {
                    this.actionFunc.recover();
                }
                this.actionFunc = Laya.Handler.create(caller, callFunc, args, false);
            };
            /** 设置动作数据并直接执行 */
            ActionFunc.prototype.doActionWithData = function (caller, callFunc) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                if (this.actionFunc) {
                    this.actionFunc.recover();
                    this.actionFunc = null;
                }
                callFunc.call.apply(callFunc, __spreadArrays([caller], args));
            };
            return ActionFunc;
        }(action.ActionBase));
        action.ActionFunc = ActionFunc;
    })(action = common.action || (common.action = {}));
})(common || (common = {}));
//# sourceMappingURL=ActionFunc.js.map