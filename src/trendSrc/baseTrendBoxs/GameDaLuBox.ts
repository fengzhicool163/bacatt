
module trend.component {
    /**
     * 大路走势棋盘,集成基础棋盘实现落子逻辑
     */
    export abstract class GameDaLuBox extends GameTrendCheckerboardBox {

        /** 问路下局庄盒子 */
        protected gameAskBoxZhuang : GameAskBox;

        /** 问路下局闲盒子 */
        protected gameAskBoxXian : GameAskBox;

        /** 子路途 */
        protected gameTrendChildBoxList: Array<GameTrendChildBox>;

        //子棋盘问路数据
        protected askDatasList: any;

        public initComponents(){
            super.initComponents();
            this.gameTrendChildBoxList = [];
        }

        /** 添加子路途 */
        public addChildTrend( box : GameTrendChildBox){
            this.gameTrendChildBoxList.push(box);
        }

        /**
         * 添加问路盒子
         * @param zhuang 
         * @param xian 
         */
        public addAskBox(zhuang : GameAskBox,xian : GameAskBox){
            this.gameAskBoxXian = xian;
            this.gameAskBoxZhuang = zhuang;
        }

        public clear() {
            this.askDatasList = null;
            for (let index = 0; index < this.gameTrendChildBoxList.length; index++) {
                const childBox = this.gameTrendChildBoxList[index];
                childBox.clear();
            }
            super.clear();
        }

        /**
        * 就跟下棋一样,走一步大路Item
        * @param data  大路点样式数据
        * @param col   落子点列
        * @param row   落子点行
        */
        protected moveItem(data: any, col: number, row: number, belongCol: number) {
            //父类落子
            super.moveItem(data, col, row, belongCol);
            //通知自己的子棋盘根据自己的数据刷新其对应的落子
            for (let index = 0; index < this.gameTrendChildBoxList.length; index++) {
                const childBox = this.gameTrendChildBoxList[index];
                //根据自己最后落子与棋盘数据获取子棋盘落子类型
                var childData = childBox.checkDataType(this.lastItem, this.itemMap, this.itemColDatas);
                if (childData) {
                    //子棋盘落子
                    childBox.addItemData(childData);
                }
            }
            //子棋盘落子完成后获取子棋盘的问路信息
            this.askDatasList = {};
            for (let askDataType = 1; askDataType <= 2; askDataType++) {
                this.askDatasList[askDataType] = {};
                //先设置自身的问路数据
                var LuData = this.LuBaseRule(askDataType);
                this.setAskItemData(askDataType, LuData.curCol, LuData.curRow);
                //根据自身问路信息获取对应子棋盘问路信息
                for (let childI = 0; childI < this.gameTrendChildBoxList.length; childI++) {
                    const childBox = this.gameTrendChildBoxList[childI];
                    this.askDatasList[askDataType][childI] = childBox.checkDataType(this.askItem, this.itemMap, this.itemColDatas);
                }
            }
            //刷新问路盒子数据
            //this.gameAskBoxZhuang.UpdateBoxView(this.askDatasList[1]);
            //this.gameAskBoxXian.UpdateBoxView(this.askDatasList[2]);
        }

        
    }
}
