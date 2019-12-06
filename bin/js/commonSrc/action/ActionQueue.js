var common;
(function (common) {
    var action;
    (function (action_1) {
        /** 动作执行队列 */
        var ActionQueue = /** @class */ (function () {
            function ActionQueue() {
                /** 动作队列锁 */
                this.actionQueueLock = false;
                /** 时间锁 */
                this.actionQueueTimeLock = 0;
                /** 队列是否暂停 */
                this.actionQueuePause = false;
                /** 动作队列 */
                this.actionQueue = [];
                Laya.timer.frameLoop(1, this, this.actionQueueUpdateFunc);
            }
            ActionQueue.prototype.destroy = function () {
                //
                Laya.timer.clear(this, this.actionQueueUpdateFunc);
                //
                this.ClearActionQueue();
            };
            //动作执行轮训方法
            ActionQueue.prototype.actionQueueUpdateFunc = function () {
                if (this.actionQueueTimeLock > 0) {
                    this.actionQueueTimeLock -= Laya.timer.delta;
                    if (this.actionQueueTimeLock <= 0) {
                        this.actionQueueTimeLock = 0;
                        if (GameMain.DEBUG)
                            console.log("UnLockActionQueueTime");
                    }
                }
                //时间锁
                if (this.actionQueueTimeLock > 0) {
                    return;
                }
                //队列被上锁中
                if (this.actionQueuePause || this.actionQueueLock || this.actionQueue.length == 0) {
                    return;
                }
                //执行
                var action = this.actionQueue.shift();
                action.doAction();
            };
            /**
             * 清空消息队列
             */
            ActionQueue.prototype.ClearActionQueue = function () {
                //动作队列锁
                this.actionQueueLock = false;
                //清空动作队列队列
                for (var index = 0; index < this.actionQueue.length; ++index) {
                    var action_2 = this.actionQueue[index];
                    action_2.clear();
                }
                this.actionQueue.length = 0;
            };
            /** 解锁队列 推荐使用时间锁*/
            ActionQueue.prototype.UnLockActionQueue = function () {
                this.actionQueueLock = false;
                if (GameMain.DEBUG)
                    console.log("UnLockActionQueue");
            };
            /**
             * 上锁队列
             * @param time
             */
            ActionQueue.prototype.LockActionQueue = function () {
                this.actionQueueLock = true;
                if (GameMain.DEBUG)
                    console.log("LockActionQueue");
            };
            /**
             * 上锁队列多少毫秒
             * @param time
             */
            ActionQueue.prototype.LockActionQueueTime = function (time) {
                this.actionQueueTimeLock += time;
                if (GameMain.DEBUG)
                    console.log("LockActionQueueTime = [" + time + "]");
            };
            /** 添加动作到队列 */
            ActionQueue.prototype.addAction = function (action) {
                this.actionQueue.push(action);
            };
            /** 插队动作到队列 */
            ActionQueue.prototype.addFirstAction = function (action) {
                this.actionQueue.unshift(action);
            };
            ActionQueue.prototype.pause = function () {
                this.actionQueuePause = true;
            };
            ActionQueue.prototype.resume = function () {
                this.actionQueuePause = false;
                this.actionQueueUpdateFunc();
            };
            return ActionQueue;
        }());
        action_1.ActionQueue = ActionQueue;
    })(action = common.action || (common.action = {}));
})(common || (common = {}));
//# sourceMappingURL=ActionQueue.js.map