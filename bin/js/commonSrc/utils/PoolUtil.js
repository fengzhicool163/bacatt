var util;
(function (util) {
    /** 显示Sprite缓存池 */
    var PoolUtil = /** @class */ (function () {
        function PoolUtil(uiScript, preLoadCount, poolLimit) {
            if (preLoadCount === void 0) { preLoadCount = 20; }
            if (poolLimit === void 0) { poolLimit = 50; }
            /** 缓存池限制 */
            this.poolLimit = 100;
            /** 缓存池预加载个数 */
            this.preLoadCount = 20;
            /** 缓存池 */
            this.nodePool = [];
            this.preLoadCount = preLoadCount;
            this.poolLimit = poolLimit;
            this.uiScript = uiScript;
            for (var index = 0; index < preLoadCount; index++) {
                var item = new uiScript();
                item.visible = false;
                this.nodePool.push(item);
            }
        }
        /** 获取缓存池保存的实例 */
        PoolUtil.prototype.getItem = function () {
            if (this.nodePool.length > 0) {
                return this.nodePool.pop();
            }
            else {
                var item = new this.uiScript();
                item.visible = false;
                return item;
            }
        };
        /**
         * 回收item
         * @param item
         */
        PoolUtil.prototype.recover = function (item) {
            if (this.nodePool.length > this.poolLimit) {
                item.destroy(true);
            }
            else {
                item.removeSelf();
                item.visible = false;
                this.nodePool.push(item);
            }
        };
        PoolUtil.prototype.destroy = function () {
            for (var index = 0; index < this.nodePool.length; index++) {
                var node = this.nodePool[index];
                node.destroy(true);
            }
            this.nodePool.length = 0;
        };
        return PoolUtil;
    }());
    util.PoolUtil = PoolUtil;
    /** 数据Obj缓存池 */
    var PoolObj = /** @class */ (function () {
        function PoolObj(uiScript, preLoadCount, poolLimit) {
            if (preLoadCount === void 0) { preLoadCount = 5; }
            if (poolLimit === void 0) { poolLimit = 5; }
            /** 缓存池限制 */
            this.poolLimit = 100;
            /** 缓存池预加载个数 */
            this.preLoadCount = 20;
            /** 缓存池 */
            this.nodePool = [];
            this.preLoadCount = preLoadCount;
            this.poolLimit = poolLimit;
            this.uiScript = uiScript;
            for (var index = 0; index < preLoadCount; index++) {
                var obj = new uiScript();
                this.nodePool.push(obj);
            }
        }
        /** 获取缓存池保存的实例 */
        PoolObj.prototype.getObj = function () {
            if (this.nodePool.length > 0) {
                return this.nodePool.pop();
            }
            else {
                var obj = new this.uiScript();
                return obj;
            }
        };
        /**
         * 回收obj
         * @param obj
         */
        PoolObj.prototype.recover = function (obj) {
            if (this.nodePool.length > this.poolLimit) {
                obj.destroy();
            }
            else {
                this.nodePool.push(obj);
            }
        };
        PoolObj.prototype.destroy = function () {
            for (var index = 0; index < this.nodePool.length; index++) {
                var node = this.nodePool[index];
                node.destroy();
            }
            this.nodePool.length = 0;
        };
        return PoolObj;
    }());
    util.PoolObj = PoolObj;
    /** 数据Component缓存池 */
    var PoolView = /** @class */ (function () {
        function PoolView(uiScript, uiObj, preLoadCount, poolLimit) {
            if (preLoadCount === void 0) { preLoadCount = 5; }
            if (poolLimit === void 0) { poolLimit = 5; }
            /** 缓存池限制 */
            this.poolLimit = 100;
            /** 缓存池预加载个数 */
            this.preLoadCount = 20;
            /** 缓存池 */
            this.scriptPool = [];
            this.preLoadCount = preLoadCount;
            this.poolLimit = poolLimit;
            this.uiObj = uiObj;
            this.uiScript = uiScript;
            for (var index = 0; index < preLoadCount; index++) {
                var script = this.create();
                this.scriptPool.push(script);
            }
        }
        PoolView.prototype.create = function () {
            var script = new this.uiScript();
            var obj = new this.uiObj();
            script.bindComponent(obj);
            return script;
        };
        /** 获取缓存池保存的实例 */
        PoolView.prototype.getComponent = function () {
            if (this.scriptPool.length > 0) {
                return this.scriptPool.pop();
            }
            else {
                var script = this.create();
                return script;
            }
        };
        /**
         * 回收obj
         * @param obj
         */
        PoolView.prototype.recover = function (script) {
            if (this.scriptPool.length > this.poolLimit) {
                script.destroy();
            }
            else {
                this.scriptPool.push(script);
            }
        };
        PoolView.prototype.destroy = function () {
            for (var index = 0; index < this.scriptPool.length; index++) {
                var script = this.scriptPool[index];
                script.bindObj.destroy(true);
                script.destroy();
            }
            this.scriptPool.length = 0;
        };
        return PoolView;
    }());
    util.PoolView = PoolView;
})(util || (util = {}));
//# sourceMappingURL=PoolUtil.js.map