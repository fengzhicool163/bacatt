/*
* UI盒子
*/
module common.component {
    export abstract class UIBox extends UIComponent {

        /** 重置盒子(默认显示) */
        public abstract resetBox();

        /** 清理盒子(清空显示) */
        public abstract clearBox();

        /** 根据传入参数设置盒子显示 */
        public abstract setData(...args: any[]);

    }
}