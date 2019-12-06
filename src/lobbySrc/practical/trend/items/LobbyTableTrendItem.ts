

module lobby.component {
    
    export class LobbyTableTrendItem extends trend.component.GameTrendItemBase {
       
        public bindObj : ui.gameTrend.Items.LobbyTableTrendItemUI;

        /**
         * 和次数
         */
        private heNum = 0;

        public initComponents(){
            super.initComponents();
            this.clear();
        }

        /**
         * 设置百家乐历史记录Item数据
         * @param itemType 
         */
        public setItemView(itemType: trend.TrendItemType) {
            super.setItemView(itemType);
            this.bindObj.type1.visible = (itemType & trend.TrendItemType.Zhuang) > 0;
            this.bindObj.type2.visible = (itemType & trend.TrendItemType.Xian) > 0;
        }

        /**
         * 添加一次和状态
         */
        public setItemSpecial() {
            this.heNum++;
            this.bindObj.type0.visible = true;
            this.bindObj.type0.text = this.heNum.toString();
        }

        /**
         * 显示触底提示
         */
        public showTouchButtom() {
            this.bindObj.touchButtomIcon.visible = true;
        }

        public clear() {
            super.clear();
            this.heNum = 0;
            this.bindObj.type0.visible = false;
            this.bindObj.type1.visible = false;
            this.bindObj.type1.visible = false;
            this.bindObj.touchButtomIcon.visible = false;
        }
    }
}
