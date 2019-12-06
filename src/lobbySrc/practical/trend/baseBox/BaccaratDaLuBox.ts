module lobby.component {

    /**
     * 大路走势棋盘,集成基础棋盘实现落子逻辑
     */
    export class BaccaratDaLuBox extends trend.component.GameDaLuBox {

        //特殊情况第一把就开合（百家乐逻辑）
        private firstHe = false;

        public clear() {
            super.clear();
            this.firstHe = false;
        }

        /**
         * 大路落子逻辑
         * @param data 本次记录的数据
         */
        public addItemData(data: trend.TrendItemType ,reCache : boolean = false) { //大路
            if (this.lastItem == null) { //是第一次落子
                this.moveItem(data, 0, 0, 0);   //直接落子
                if ( (data & trend.TrendItemType.He) > 0 ) {
                    this.firstHe = true; //第一次落子是和记录特殊状态
                    //添加和状态
                    this.lastItem.setItemSpecial();
                }
                if(reCache) this.itemListNode.reCache()
                return;
            }

            //特殊情况第一落子就是和,则不落新子,刷新落子状态
            if (this.firstHe) {
                //根据类型刷新落子
                if ( (data & trend.TrendItemType.He) > 0 ) {
                    this.lastItem.setItemSpecial();
                } else { //直到不是和关闭特殊状态
                    this.lastItem.setItemView(data);
                    this.firstHe = false;
                }
                //关闭落子效果
                this.stopAskItemAnim();
                if(reCache) this.itemListNode.reCache()
                return;
            }

            //正常开和
            if ( (data & trend.TrendItemType.He) > 0 ) {
                this.lastItem.setItemSpecial();
                //关闭落子效果
                this.stopAskItemAnim();
                if(reCache) this.itemListNode.reCache()
                return;
            }

            //正常2状态
            super.addItemData(data);
        }

    }
}
