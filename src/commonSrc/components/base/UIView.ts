/*
* 基础显示类型
*/
module common.component{
    
    export abstract class UIView {
        
        /** 自定义附加脚本 */
        protected uiBindComs : component.UIComponent[];

        /** 组件绑上控制脚本 */
        public bindScript<T extends component.UIComponent>(uiScript: { new (): T; } , bindObj : any) : T{
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