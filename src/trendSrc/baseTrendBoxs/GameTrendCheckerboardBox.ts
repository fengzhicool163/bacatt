

module trend.component {
    /**
     * 走势棋盘,带通用走势落子规则实现
     */
    export abstract class GameTrendCheckerboardBox extends GameTrendBoxBase {

        protected isStartRight = false;   //落子当前已经开始右拐
        protected startRightCol = 0;      //落子开始右拐时的列    

        protected itemMap: any;                    //大路棋盘落子记录
        protected itemColDatas: any;               //大路长龙数据记录
        protected lastItem: GameTrendItemBase;     //最后的落子


        public initComponents() {
            super.initComponents();
            //初始化棋盘,棋盘默认都是6行
            this.resetCheckerboardMap();
            //
            this.itemColDatas = {};
        }

        /**
         * 清空棋盘
         */
        public clear() {
            this.isStartRight = false;
            this.startRightCol = 0;
            this.lastItem = null;
            this.resetCheckerboardMap();
            this.itemColDatas = {};
            super.clear();
        }

        /**
         * 重置棋盘Map
         */
        protected resetCheckerboardMap() {
            this.itemMap = {};
            for (let index = 0; index < this.trendBoxRow + 1; index++) {
                this.itemMap[index] = {};
            }
        }

        /**
         * 就跟下棋一样,走一步大路Item
         * @param data  大路点样式数据
         * @param col   落子点列
         * @param row   落子点行
         */
        protected moveItem(data: any, col: number, row: number, belongCol: number) {
            this.lastItem = this.addItem(data, col, row); //落子到棋盘上
            //记录落子Map
            this.itemMap[row][col] = this.lastItem;         //记录棋盘信息
            //记录落子所属列(长龙)
            this.lastItem.belongCol = belongCol;
            this.itemColDatas[belongCol] = this.itemColDatas[belongCol] || [];
            this.itemColDatas[belongCol].push(this.lastItem);
        }

        /**
         * 落子基本逻辑 (通用于 大路、大眼仔路、小眼路、曱甴路 )
         * @param data 
         */
        protected LuBaseRule(data: any) {
            var LuData: any = {};
            if (this.lastItem == null) { //是第一次落子
                LuData.curCol = 0;
                LuData.curRow = 0;
                LuData.belongCol = 0;
                LuData.showTouchButtom = false;
                return LuData;
            }

            //正常开(1,2)两种状态
            LuData.curCol = this.lastItem.col;
            LuData.curRow = this.lastItem.row;
            LuData.belongCol = this.lastItem.belongCol;
            LuData.showTouchButtom = false;
            LuData.isStartRight = this.isStartRight;
            LuData.startRightCol = this.startRightCol;
            //与最后落子类型相同
            if (this.lastItem.data == data) {
                if (LuData.isStartRight) { //已经开始右拐了继续往右
                    LuData.curCol += 1; //右拐
                } else if (this.lastItem.row >= 5 || this.itemMap[LuData.curRow + 1][LuData.curCol]) { //超矿或触底了开始右拐
                    LuData.isStartRight = true; //开始右拐
                    LuData.startRightCol = LuData.curCol;   //记录右拐起始列
                    LuData.curCol += 1; //右拐
                } else { //没有触底往下
                    LuData.curRow += 1;
                    //检测当前落子下位落子是否相同（触底检测)
                    var buttomItem = this.itemMap[LuData.curRow + 1][LuData.curCol];
                    if (buttomItem && buttomItem.data == data) {
                        LuData.showTouchButtom = true;
                    }
                }
            } else { //不同开 新列
                if (LuData.isStartRight) { //如果右转过恢复到开始右拐的列
                    LuData.isStartRight = false;
                    LuData.curCol = this.startRightCol;
                }
                LuData.curCol += 1;   //开新列
                LuData.curRow = 0;    //恢复到第一行
                while (this.itemMap[LuData.curRow][LuData.curCol]) { //检查第一行是否被占用
                    LuData.curCol += 1;
                }
                LuData.belongCol = LuData.curCol;
            }
            return LuData;
        }

        /**
         * 添加真实落子
         * @param data 
         */
        public addItemData(data: any,reCache : boolean = false) {
            //根据规则获取最新数据
            var LuData = this.LuBaseRule(data);
            this.isStartRight = LuData.isStartRight;
            this.startRightCol = LuData.startRightCol;
            //落子
            this.moveItem(data, LuData.curCol, LuData.curRow, LuData.belongCol);
            //触底提示
            if (LuData.showTouchButtom) this.lastItem.showTouchButtom();
            //
            if(reCache) this.itemListNode.reCache();
        }

        /**
         * 设置棋盘数据
         * @param datas 
         */
        public setItemDatas( datas : Array<any>){
            //
            this.clearAllItem();
            //
            for (let index = 0; index < datas.length; index++) {
                const data = datas[index];
                this.addItemData(data,false);
            }
            //
            this.itemListNode.reCache();
        }

        /**
         * 添加问路落子
         */
        public addAskItemData(data: any) {
            var LuData = this.LuBaseRule(data);
            this.moveAskItem(data, LuData.curCol, LuData.curRow);
        }
    }
}