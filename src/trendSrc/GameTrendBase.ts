
module trend.component {

    export abstract class GameTrendBase extends common.component.UIComponent {

        protected bindObj : Laya.Box;

        /**************************** 缓存池 *************************/

        /* 历史记录Item放置节点 */
        protected itemListNode: Laya.Box = null;

        //缓存池
        protected itemPool: util.PoolView;

        //
        protected itemList: Array<GameTrendItemBase>;

        public initComponents(){
            this.itemList = [];
        }

        /**
         * 添加一个Item到滑动条
         * @param data 
         */
        protected addItem(data: any, col?: number, row?: number) : GameTrendItemBase;
        protected addItem(data: any) : GameTrendItemBase {
            //
            var item = this.itemPool.getComponent();
            item.setItemView(data);
            this.itemList.push(item);
            this.itemListNode.addChild( item.bindObj );
            return item;
        }

        /** 清空所有Item */
        protected clearAllItem() {
            for (let index = 0; index < this.itemList.length; index++) {
                const item = this.itemList[index];
                item.clear();
                this.itemPool.recover(item);
            }
            this.itemList.length = 0;
            this.itemListNode.reCache();
        }

        /**
        * 添加Item方法
        * @param data 
        */
        public abstract addItemData(data: any);

        public clear() {
            this.clearAllItem();
        }
    }
}
