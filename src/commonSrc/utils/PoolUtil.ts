module util{

    /** 显示Sprite缓存池 */
    export class PoolUtil<T extends Laya.Sprite>{

        protected uiScript : { new(): T; };

        /** 缓存池限制 */
        protected poolLimit : number = 100;

        /** 缓存池预加载个数 */
        protected preLoadCount : number = 20;

        /** 缓存池 */
        protected nodePool : Array<T> = [];

        constructor(uiScript : { new(): T; },preLoadCount : number = 20,poolLimit : number = 50){
            this.preLoadCount = preLoadCount;
            this.poolLimit = poolLimit;
            this.uiScript = uiScript;
            for (let index = 0; index < preLoadCount; index++) {
                var item = new uiScript();
                item.visible = false;
                this.nodePool.push(item);
            }
        }

        /** 获取缓存池保存的实例 */
        public getItem(){
            if (this.nodePool.length > 0) {
                return this.nodePool.pop();
            }else{
                var item = new this.uiScript();
                item.visible = false;
                return item;
            }
        }

        /**
         * 回收item
         * @param item 
         */
        public recover(item : T){
            if(this.nodePool.length > this.poolLimit){
                item.destroy(true);
            }else{
                item.removeSelf();
                item.visible = false;
                this.nodePool.push(item);
            }
        }

        public destroy(){
            for (let index = 0; index < this.nodePool.length; index++) {
                const node = this.nodePool[index];
                node.destroy(true);
            }
            this.nodePool.length = 0;
        }
    }

    /** 数据Obj缓存池 */
    export class PoolObj<T extends common.objs.objBase>{

        protected uiScript : { new(): T; };

        /** 缓存池限制 */
        protected poolLimit : number = 100;

        /** 缓存池预加载个数 */
        protected preLoadCount : number = 20;

        /** 缓存池 */
        protected nodePool : Array<T> = [];

        constructor(uiScript : { new(): T; },preLoadCount : number = 5,poolLimit : number = 5){
            this.preLoadCount = preLoadCount;
            this.poolLimit = poolLimit;
            this.uiScript = uiScript;
            for (let index = 0; index < preLoadCount; index++) {
                var obj = new uiScript();
                this.nodePool.push(obj);
            }
        }

        /** 获取缓存池保存的实例 */
        public getObj(){
            if (this.nodePool.length > 0) {
                return this.nodePool.pop();
            }else{
                var obj = new this.uiScript();
                return obj;
            }
        }

        /**
         * 回收obj 
         * @param obj 
         */
        public recover(obj : T){
            if(this.nodePool.length > this.poolLimit){
                obj.destroy();
            }else{
                this.nodePool.push(obj);
            }
        }

        public destroy(){
            for (let index = 0; index < this.nodePool.length; index++) {
                const node = this.nodePool[index];
                node.destroy();
            }
            this.nodePool.length = 0;
        }
    }

    /** 数据Component缓存池 */
    export class PoolView{

        protected uiScript : any;

        protected uiObj : any;

        /** 缓存池限制 */
        protected poolLimit : number = 100;

        /** 缓存池预加载个数 */
        protected preLoadCount : number = 20;

        /** 缓存池 */
        protected scriptPool : Array<any> = [];

        protected create(){
            var script = new this.uiScript();
            var obj = new this.uiObj();
            script.bindComponent(obj);
            return script;
        }

        constructor(uiScript : any,uiObj : any,preLoadCount : number = 5,poolLimit : number = 5){
            this.preLoadCount = preLoadCount;
            this.poolLimit = poolLimit;
            this.uiObj = uiObj;
            this.uiScript = uiScript;
            for (let index = 0; index < preLoadCount; index++) {
                var script = this.create();
                this.scriptPool.push(script);
            }
        }

        /** 获取缓存池保存的实例 */
        public getComponent(){
            if (this.scriptPool.length > 0) {
                return this.scriptPool.pop();
            }else{
                var script = this.create();
                return script;
            }
        }

        /**
         * 回收obj 
         * @param obj 
         */
        public recover(script : any){
            if(this.scriptPool.length > this.poolLimit){
                script.destroy();
            }else{
                this.scriptPool.push(script);
            }
        }

        public destroy(){
            for (let index = 0; index < this.scriptPool.length; index++) {
                const script = this.scriptPool[index];
                script.bindObj.destroy(true);
                script.destroy();
            }
            this.scriptPool.length = 0;
        }
    }

}