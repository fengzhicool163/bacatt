
module common.action {
    /** 动作基类 */
    export abstract class ActionBase {

        protected actionFunc: Laya.Handler;

        /** 动作执行方法 */
        protected abstract runActionFunc(...args: any[]);

        /** 设置动作数据 */
        public setActionData(...args: any[]) {
            if (this.actionFunc) {
                this.actionFunc.recover();
            }
            this.actionFunc = Laya.Handler.create(this, this.runActionFunc, args, false);
        }

        /** 设置动作数据并直接执行 */
        public doActionWithData( ...args: any[] ){
            if (this.actionFunc) {
                this.actionFunc.recover();
                this.actionFunc = null;
            }
            this.runActionFunc( ...args );
        }

        /** 执行动作 */
        public doAction() {
            try {
                if (this.actionFunc) {
                    this.actionFunc.run();
                    this.actionFunc.recover();
                    this.actionFunc = null;
                };
            } catch (error) {
                console.error(error);
            }
        }

        /** 清空Action */
        public clear() {
            if (this.actionFunc) {
                this.actionFunc.recover();
                this.actionFunc = null;
            }
        }

        
    }
}
