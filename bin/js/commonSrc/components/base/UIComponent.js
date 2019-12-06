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
/*
* 自定义附加脚本
* 类似Laya的附加脚本，
* 但因为Laya无论 拓展脚本 还是 附加脚本 均存在时序问题，
* 所以在此自己管理脚本生命周期
*/
var common;
(function (common) {
    var component;
    (function (component) {
        var UIComponent = /** @class */ (function (_super) {
            __extends(UIComponent, _super);
            function UIComponent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 绑定自身对应的UIObj */
            UIComponent.prototype.bindComponent = function (obj) {
                this.bindObj = obj;
                this.initComponents();
            };
            return UIComponent;
        }(component.UIView));
        component.UIComponent = UIComponent;
    })(component = common.component || (common.component = {}));
})(common || (common = {}));
//# sourceMappingURL=UIComponent.js.map