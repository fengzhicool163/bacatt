var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var trend;
(function (trend) {
    var component;
    (function (component) {
        /**
         * 大路走势棋盘,集成基础棋盘实现落子逻辑
         */
        var GameDaYanZaiBox = /** @class */ (function (_super) {
            __extends(GameDaYanZaiBox, _super);
            function GameDaYanZaiBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameDaYanZaiBox.prototype.checkStart = function (itemMap) {
                if (itemMap[1][1]) { //b2
                    return true;
                }
                else if (itemMap[0][2]) { //c1
                    return true;
                }
                return false;
            };
            GameDaYanZaiBox.prototype.checkDataFunc = function (lastItem, itemMap, itemColDatas) {
                //
                var checkCol = lastItem.col;
                var checkRow = lastItem.row;
                if (checkCol < 1)
                    return null; //还在第一列直接跳出 a列跳出
                //第一行检测
                if (checkRow == 0) {
                    if (checkCol <= 1)
                        return null; //ab列跳出
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
                }
                else {
                    var preBItem = itemMap[checkRow - 1][preA];
                    return !preBItem ? 1 : 2;
                }
            };
            return GameDaYanZaiBox;
        }(component.GameTrendChildBox));
        component.GameDaYanZaiBox = GameDaYanZaiBox;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameDaYanZaiBox.js.map