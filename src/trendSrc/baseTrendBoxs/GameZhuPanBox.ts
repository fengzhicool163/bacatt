
module trend.component {

    export abstract class GameZhuPanBox extends GameTrendBoxBase {

        protected daLuBox: GameDaLuBox;    //大路盒子

        public clear() {
            super.clear();
            this.daLuBox.clear();
        }

        protected noticeDaLu(data: any) {
            //大路落子
            this.daLuBox.addItemData(data);
        }

        /**
         * 添加一个记录到珠路盒子中
         * @param data 本次记录的数据
         */
        public addItemData(data: any) {
            //珠路落子
            // var index = this.itemList.length;
            // var col = Math.floor(index / this.boxRow);
            // var row = index % this.boxRow;
            // this.addItem(data, col, row);
            // //关闭落子效果
            // this.stopAskItemAnim();
            // //通知大路落子
            // this.noticeDaLu(data);
        }


        public addAskItemData(data: any) {
            //珠路落子
            // var index = this.itemList.length;
            // var col = Math.floor(index / this.boxRow);
            // var row = index % this.boxRow;
            // this.moveAskItem(data, col, row);
            // if (this.daLuBox) {
            //     this.daLuBox.addAskItemData(data);
            // }
        }

        public ZhuangAskBtnFunc() {
            this.addAskItemData(1);
        }

        public XianAskBtnFunc() {
            this.addAskItemData(2);
        }

    }
}
