var common;
(function (common) {
    var action;
    (function (action) {
        /** 动作基类 */
        var ActionBase = /** @class */ (function () {
            function ActionBase() {
            }
            /** 设置动作数据 */
            ActionBase.prototype.setActionData = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.actionFunc) {
                    this.actionFunc.recover();
                }
                this.actionFunc = Laya.Handler.create(this, this.runActionFunc, args, false);
            };
            /** 设置动作数据并直接执行 */
            ActionBase.prototype.doActionWithData = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.actionFunc) {
                    this.actionFunc.recover();
                    this.actionFunc = null;
                }
                this.runActionFunc.apply(this, args);
            };
            /** 执行动作 */
            ActionBase.prototype.doAction = function () {
                try {
                    if (this.actionFunc) {
                        this.actionFunc.run();
                        this.actionFunc.recover();
                        this.actionFunc = null;
                    }
                    ;
                }
                catch (error) {
                    console.error(error);
                }
            };
            /** 清空Action */
            ActionBase.prototype.clear = function () {
                if (this.actionFunc) {
                    this.actionFunc.recover();
                    this.actionFunc = null;
                }
            };
            return ActionBase;
        }());
        action.ActionBase = ActionBase;
    })(action = common.action || (common.action = {}));
})(common || (common = {}));
//# sourceMappingURL=ActionBase.js.map