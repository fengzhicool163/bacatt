/*
* 基础显示类型
*/
var common;
(function (common) {
    var component;
    (function (component) {
        var UIView = /** @class */ (function () {
            function UIView() {
            }
            /** 组件绑上控制脚本 */
            UIView.prototype.bindScript = function (uiScript, bindObj) {
                //因为时序问题这里做初始化列表
                this.uiBindComs = this.uiBindComs || [];
                //创建自定义附加脚本
                var script = new uiScript();
                //绑定附加脚本
                script.bindComponent(bindObj);
                //保存附加脚本
                this.uiBindComs.push(script);
                return script;
            };
            /** 销毁方法 */
            UIView.prototype.destroy = function () {
                //清空所有全局事件
                EventManager.removeAllEvents(this);
                //因为时序问题这里做初始化列表
                this.uiBindComs = this.uiBindComs || [];
                //销毁所有控制的附加脚本
                for (var index = 0; index < this.uiBindComs.length; index++) {
                    var bindScript = this.uiBindComs[index];
                    bindScript.destroy();
                }
            };
            /** 适配方法 */
            UIView.prototype.resize = function () {
                //因为时序问题这里做初始化列表
                this.uiBindComs = this.uiBindComs || [];
                //附加脚本关闭监听
                for (var index = 0; index < this.uiBindComs.length; index++) {
                    var bindScript = this.uiBindComs[index];
                    bindScript.resize();
                }
            };
            return UIView;
        }());
        component.UIView = UIView;
    })(component = common.component || (common.component = {}));
})(common || (common = {}));
//# sourceMappingURL=UIView.js.map