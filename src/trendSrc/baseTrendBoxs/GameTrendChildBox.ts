
module trend.component {

    export abstract class GameTrendChildBox extends GameTrendCheckerboardBox {

        protected childBoxStart = false;

        protected askData: any = {};

        /**
         * 重写排版算法
         */
        protected getitemPos(col: number, row: number) {
            //计算位置
            var x = this.trendItemOrigin.x + col * this.trendItemSize.x + Math.floor(col / 2) * this.trendItemSpacing.x;
            var y = this.trendItemOrigin.y + row * this.trendItemSize.y + Math.floor(row / 2) * this.trendItemSpacing.y;
            return new Laya.Point(x,y);
        }

        public clear() {
            this.childBoxStart = false;
            this.askData = {};
            super.clear();
        }

        public stopAskItemAnim() {
            super.stopAskItemAnim();
        }

        /**
         * 子路检测开始算法
         */
        protected abstract checkStart(itemMap: any): boolean;

        /**
         * 子路落子类型算法
         */
        protected abstract checkDataFunc(lastItem: GameTrendItemBase, itemMap: any, itemColDatas: any): number;

        /**
         * 传入大路最后落子
         * @param lastItem 大路最后落子
         * @param itemMap 大路棋盘落子Map
         * @param itemColDatas 大路棋盘长龙数据
         */
        public checkDataType(lastItem: GameTrendItemBase, itemMap: any, itemColDatas: any): number {
            //检测落子数据
            if (!this.childBoxStart) {
                this.childBoxStart = this.checkStart(itemMap);
            }
            if (!this.childBoxStart) return null;
            return this.checkDataFunc(lastItem, itemMap, itemColDatas);
        }
    }
}
