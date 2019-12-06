

module lobby.component {

    export class LobbyTableTrendBox extends BaccaratDaLuBox {

        protected bindObj : ui.gameTrend.Boxs.LobbyTableTrendBoxUI;

        /** 缓存池初始化 */
        public initComponents(){
            super.initComponents();
            //历史记录Item放置节点
            this.itemListNode = this.bindObj.itemListNode;
            //棋子缓存池
            this.itemPool = new util.PoolView(LobbyTableTrendItem,ui.gameTrend.Items.LobbyTableTrendItemUI,20,48);
        }

        /** 盒子排版配置 */
        protected initLayoutData() {
            this.trendBoxRow = 6;
            this.trendColLimit = 39;
            this.trendItemSize = new Laya.Point(16, 16);
            this.trendItemOrigin = new Laya.Point(6, 5);
            this.trendItemSpacing = new Laya.Point(2, 2);
        }
            
    }
}
