
module trend.component {
    /**
     * 大路走势棋盘,集成基础棋盘实现落子逻辑
     */
    export abstract class GameDaYanZaiBox extends GameTrendChildBox {

        protected checkStart(itemMap: any): boolean {
            if (itemMap[1][1]) { //b2
                return true;
            } else if (itemMap[0][2]) { //c1
                return true;
            }
            return false;
        }

        protected checkDataFunc(lastItem: GameTrendItemBase, itemMap: any, itemColDatas: any): number {
            //
            var checkCol = lastItem.col;
            var checkRow = lastItem.row;
            if (checkCol < 1) return null; //还在第一列直接跳出 a列跳出
            //第一行检测
            if (checkRow == 0) {
                if (checkCol <= 1) return null; //ab列跳出
                var colA = checkCol - 2;
                itemColDatas[colA] = itemColDatas[colA] || [];
                var preAColCount = itemColDatas[colA].length;
                var colB = checkCol - 1;
                itemColDatas[colB] = itemColDatas[colB] || [];
                var preBColCount = itemColDatas[colB].length;
                return preAColCount == preBColCount ? 1 : 2;
            }
            //第2-6行
            var preA = checkCol - 1;
            var preAItem = itemMap[checkRow][preA];
            if (preAItem) {
                return 1;
            } else {
                var preBItem = itemMap[checkRow - 1][preA];
                return !preBItem ? 1 : 2;
            }
        }

    }
}