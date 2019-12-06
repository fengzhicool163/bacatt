/*
* UI接口所有的UI都必须集成该接口; PS createByJson 函数不会构建Anim
*/
module Laya {
    export abstract class UIPanel extends laya.ui.View {

        /** 创建view真正的初始化方法 */
        protected createView(uiView: any): void{
            //Laya创建UI实体
            super.createView(uiView);
            //这里调用初始化不会出现时序问题
            this.initComponents();
        }

        /** 复写实现开始动画 
         * 默认动画规则
         * node.setScale(0.5);
	        node.runAction(cc.sequence(cc.scaleTo(0.15, 1.1),cc.scaleTo(0.1, 1)));
         * @param uiNode 缩放的节点
        */
        protected openAnim( uiNode : any ){
            uiNode.visible = true;
            uiNode.scale(0.5,0.5);
            var openAnim = new Laya.TimeLine();
            openAnim.to( uiNode , { scaleX: 1.1, scaleY: 1.1 }, 150).to( uiNode , { scaleX: 1, scaleY: 1 }, 100);
            openAnim.play();
        }

        public initlistener(){};

        public unInitlistener(){};

        /** 显示方法 */
        public Show() {
            //节点显示
            this.visible = true;
            //开始监听
            this.initlistener();
        }

        /** 关闭方法 */
        public Hide() {
            //关闭监听
            this.unInitlistener();
            //关闭节点显示
            this.visible = false;
            //
            //this.removeSelf();
        }

        /*********************************** UIView逻辑,不能多重集成痛苦啊  ************************************/
        /** 自定义附加脚本 */
        protected uiBindComs : common.component.UIComponent[];

        /** 组件绑上控制脚本 */
        public bindScript<T extends common.component.UIComponent>(uiScript: { new (): T; } , bindObj : any) : T{
            //因为时序问题这里做初始化列表
            this.uiBindComs = this.uiBindComs || [];
            //创建自定义附加脚本
            var script = new uiScript();
            //绑定附加脚本
            script.bindComponent(bindObj);
            //保存附加脚本
            this.uiBindComs.push(script);
            return script;
        }

        /** 销毁方法 */
        public destroy(){
            //清空所有全局事件
            EventManager.removeAllEvents(this);
            //因为时序问题这里做初始化列表
            this.uiBindComs = this.uiBindComs || [];
            //销毁所有控制的附加脚本
            for (let index = 0; index < this.uiBindComs.length; index++) {
                const bindScript = this.uiBindComs[index];
                bindScript.destroy();
            }
            //自身销毁
            super.destroy(true);
        }

        /** 适配方法 */
        public resize(){
            //因为时序问题这里做初始化列表
            this.uiBindComs = this.uiBindComs || [];
            //附加脚本关闭监听
            for (let index = 0; index < this.uiBindComs.length; index++) {
                const bindScript = this.uiBindComs[index];
                bindScript.resize();
            }
        }

        /** 初始化控件（获取控件，加载动态控件，注册点击事件等） */
        protected abstract initComponents();

    }
}