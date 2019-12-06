
module common.objs{

    /** 数据Obj约束基类 */
    export abstract class objBase {
        
        /** 数据重置 */
        public abstract resetObj();     

        /** 数据类销毁 */
        public abstract destroy();    
        
        /** 设置数据 */
        public abstract setData(...args: any[]);
        
    }
}