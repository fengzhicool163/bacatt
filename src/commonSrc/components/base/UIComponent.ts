/*
* 自定义附加脚本
* 类似Laya的附加脚本，
* 但因为Laya无论 拓展脚本 还是 附加脚本 均存在时序问题，
* 所以在此自己管理脚本生命周期
*/
module common.component {
    export abstract class UIComponent extends UIView {

        protected bindObj : any;
        
        /** 绑定自身对应的UIObj */
        public bindComponent( obj : any ){
            this.bindObj = obj;
            this.initComponents();
        }

    }
}