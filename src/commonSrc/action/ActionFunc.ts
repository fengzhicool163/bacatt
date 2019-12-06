
module common.action {

    /** 动作方法 */
    export class ActionFunc extends ActionBase {

        /** 动作执行方法 */
        protected runActionFunc(...args: any[]){}

        /** 设置动作数据 */
        public setActionData(caller : any, callFunc : Function , ...args: any[]) {
            if (this.actionFunc) {
                this.actionFunc.recover();
            }
            this.actionFunc = Laya.Handler.create(caller, callFunc, args, false);
        }

        /** 设置动作数据并直接执行 */
        public doActionWithData( caller : any, callFunc : Function , ...args: any[] ){
            if (this.actionFunc) {
                this.actionFunc.recover();
                this.actionFunc = null;
            }
            callFunc.call(caller,...args);
        }
    }
}
