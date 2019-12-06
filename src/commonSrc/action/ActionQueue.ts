
module common.action {

    /** 动作执行队列 */
    export class ActionQueue {

        /** 动作队列锁 */
        protected actionQueueLock = false;
        /** 时间锁 */
        protected actionQueueTimeLock = 0;
        /** 队列是否暂停 */
        protected actionQueuePause = false;
        /** 动作队列 */
        protected actionQueue: Array<ActionBase> = [];

        constructor() {
            Laya.timer.frameLoop(1, this, this.actionQueueUpdateFunc);
        }

        public destroy() {
            //
            Laya.timer.clear(this, this.actionQueueUpdateFunc);
            //
            this.ClearActionQueue();
        }

        //动作执行轮训方法
        protected actionQueueUpdateFunc() {
            if(this.actionQueueTimeLock > 0){
                this.actionQueueTimeLock -= Laya.timer.delta;
                if(this.actionQueueTimeLock <= 0){
                    this.actionQueueTimeLock = 0;
                    if (GameMain.DEBUG) console.log("UnLockActionQueueTime");
                }
            }
            //时间锁
            if(this.actionQueueTimeLock > 0){
                return;
            }
            //队列被上锁中
            if (this.actionQueuePause || this.actionQueueLock || this.actionQueue.length == 0) {
                return;
            }
            //执行
            var action = this.actionQueue.shift();
            action.doAction();
        }

        /**
         * 清空消息队列
         */
        public ClearActionQueue() {
            //动作队列锁
            this.actionQueueLock = false;
            //清空动作队列队列
            for (let index = 0; index < this.actionQueue.length; ++index) {
                const action = this.actionQueue[index];
                action.clear();
            }
            this.actionQueue.length = 0;
        }

        /** 解锁队列 推荐使用时间锁*/
        public UnLockActionQueue() {
            this.actionQueueLock = false;
            if (GameMain.DEBUG) console.log("UnLockActionQueue");
        }

        /**
         * 上锁队列
         * @param time 
         */
        public LockActionQueue() {
            this.actionQueueLock = true;
            if (GameMain.DEBUG) console.log("LockActionQueue");
        }

        /**
         * 上锁队列多少毫秒
         * @param time 
         */
        public LockActionQueueTime(time: number) {
            this.actionQueueTimeLock += time;
            if (GameMain.DEBUG) console.log("LockActionQueueTime = [" + time + "]");
        }

        /** 添加动作到队列 */
        public addAction(action: ActionBase) {
            this.actionQueue.push(action);
        }

        /** 插队动作到队列 */
        public addFirstAction(action: ActionBase){
            this.actionQueue.unshift(action);
        }

        public pause(){
            this.actionQueuePause = true;
        }

        public resume(){
            this.actionQueuePause = false;
            this.actionQueueUpdateFunc();
        }
    }
}
