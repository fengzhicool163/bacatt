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
* UI接口所有的UI都必须集成该接口; PS createByJson 函数不会构建Anim
*/
var Laya;
(function (Laya) {
    var UIPanel = /** @class */ (function (_super) {
        __extends(UIPanel, _super);
        function UIPanel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** 创建view真正的初始化方法 */
        UIPanel.prototype.createView = function (uiView) {
            //Laya创建UI实体
            _super.prototype.createView.call(this, uiView);
            //这里调用初始化不会出现时序问题
            this.initComponents();
        };
        /** 复写实现开始动画
         * 默认动画规则
         * node.setScale(0.5);
            node.runAction(cc.sequence(cc.scaleTo(0.15, 1.1),cc.scaleTo(0.1, 1)));
         * @param uiNode 缩放的节点
        */
        UIPanel.prototype.openAnim = function (uiNode) {
            uiNode.visible = true;
            uiNode.scale(0.5, 0.5);
            var openAnim = new Laya.TimeLine();
            openAnim.to(uiNode, { scaleX: 1.1, scaleY: 1.1 }, 150).to(uiNode, { scaleX: 1, scaleY: 1 }, 100);
            openAnim.play();
        };
        UIPanel.prototype.initlistener = function () { };
        ;
        UIPanel.prototype.unInitlistener = function () { };
        ;
        /** 显示方法 */
        UIPanel.prototype.Show = function () {
            //节点显示
            this.visible = true;
            //开始监听
            this.initlistener();
        };
        /** 关闭方法 */
        UIPanel.prototype.Hide = function () {
            //关闭监听
            this.unInitlistener();
            //关闭节点显示
            this.visible = false;
            //
            //this.removeSelf();
        };
        /** 组件绑上控制脚本 */
        UIPanel.prototype.bindScript = function (uiScript, bindObj) {
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
        UIPanel.prototype.destroy = function () {
            //清空所有全局事件
            EventManager.removeAllEvents(this);
            //因为时序问题这里做初始化列表
            this.uiBindComs = this.uiBindComs || [];
            //销毁所有控制的附加脚本
            for (var index = 0; index < this.uiBindComs.length; index++) {
                var bindScript = this.uiBindComs[index];
                bindScript.destroy();
            }
            //自身销毁
            _super.prototype.destroy.call(this, true);
        };
        /** 适配方法 */
        UIPanel.prototype.resize = function () {
            //因为时序问题这里做初始化列表
            this.uiBindComs = this.uiBindComs || [];
            //附加脚本关闭监听
            for (var index = 0; index < this.uiBindComs.length; index++) {
                var bindScript = this.uiBindComs[index];
                bindScript.resize();
            }
        };
        return UIPanel;
    }(laya.ui.View));
    Laya.UIPanel = UIPanel;
})(Laya || (Laya = {}));
//# sourceMappingURL=UIPanel.js.map