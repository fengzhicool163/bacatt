

/**
 * 走势落子棋盘基类,管理棋子添加、缓存、清理等工作但不包含落子算法逻辑
 */
module trend.component {

    export abstract class GameTrendBoxBase extends GameTrendBase {

        /** 走势棋盘行数 */
        protected trendBoxRow = 6;

        /** 走势棋盘列数限制 */
        protected trendColLimit = 8;

        /** 走势棋子大小 */
        protected trendItemSize: Laya.Point;

        /** 走势棋子Origin */
        protected trendItemOrigin: Laya.Point;

        /** 走势棋子Spacing */
        protected trendItemSpacing: Laya.Point;

        /** 当前最大的列数 */
        protected furthestCol = -1;

        public clear() {
            //
            this.furthestCol = -1;
            //
            super.clear();
        }

        public initComponents() {
            super.initComponents();
            this.initLayoutData();
        }

        /** 删除第一列显示的棋子 */
        protected delFirstCol() {
            while (this.itemList.length > 0) {
                var firstItem = this.itemList[0];
                if (firstItem.col == 0) {
                    this.itemList.shift();
                    firstItem.clear();
                    this.itemPool.recover(firstItem);
                } else {
                    break;
                }
            }
            for (let index = 0; index < this.itemList.length; index++) {
                const item = this.itemList[index];
                item.col -= 1;
                var point = this.getitemPos(item.col, item.row);
                item.pos( point );
            }
        }

        /**
         * 添加一个Item到滑动条
         * @param data 
         */
        protected addItem(data: any, col: number, row: number) {
            //
            var item = super.addItem(data);
            //设置落子坐标与位置
            var pos = this.getitemPos(col, row);
            item.setRowCol(col, row, pos);
            //刷新棋盘大小
            var furthestCol = Math.max(col, this.furthestCol);
            if (furthestCol >= this.trendColLimit) {
                this.delFirstCol();
            }
            return item;
        }

        /** 棋子位置算法 */
        protected getitemPos(col: number, row: number): Laya.Point {
            //
            var x = col * this.trendItemSize.x + col * this.trendItemSpacing.x + this.trendItemOrigin.x;
            var y = row * this.trendItemSize.y + row * this.trendItemSpacing.y + this.trendItemOrigin.y;
            return new Laya.Point(x, y);
        }
        /************************************* 问路棋子 *************************/
        protected askItem: GameTrendItemBase;      //问路棋子

        protected playAskItemAnim() {
            // this.stopAskItemAnim();
            // this.askItem.node.active = true;
            // var action1 = cc.fadeIn(0.5);
            // var action2 = cc.fadeOut(0.5);
            // var seq = cc.sequence(cc.repeat(cc.sequence(action1, action2), 3), cc.callFunc(function () {
            //     this.askItem.clear();
            //     this.stopAskItemAnim();
            // }, this));
            // this.askItem.node.runAction(seq);
            // //
            // if (this.scrollView.content.width > this.node.width) {
            //     this.scrollView.stopAutoScroll();
            //     this.scrollView.scrollToBottomRight();
            // }
        }

        protected stopAskItemAnim() {
            // if (this.askItem.node.active) {
            //     this.askItem.node.stopAllActions();
            //     this.askItem.node.active = false;
            // }
        }

        /**
         * 设置问路Item数据
         */
        protected setAskItemData(data: any, col: number, row: number) {
            // this.stopAskItemAnim();
            // this.askItem.clear();
            // this.askItem.setItemView(data);
            // this.askItem.setRowCol(col, row, this.getitemPos(col, row));
        }

        /**
        * 落下问路棋子
        */
        protected moveAskItem(data: any, col: number, row: number) {
            // this.setAskItemData(data, col, row);
            // this.playAskItemAnim();
        }

        /**************************************** 子类复写实现 ******************************************/
        /** 走势盒子排版配置 */
        protected initLayoutData() {
            this.trendBoxRow = 6;
            this.trendColLimit = 8;
            this.trendItemSize = new Laya.Point(16, 16);
            this.trendItemOrigin = new Laya.Point(6, 5);
            this.trendItemSpacing = new Laya.Point(2, 2);
        }

        /**
         * 添加问路Item方法
         * @param data 
         */
        public abstract addAskItemData(data: any);
    }

}
