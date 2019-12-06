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
        var GameDaLuBox = /** @class */ (function (_super) {
            __extends(GameDaLuBox, _super);
            function GameDaLuBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameDaLuBox.prototype.initComponents = function () {
                _super.prototype.initComponents.call(this);
                this.gameTrendChildBoxList = [];
            };
            /** 添加子路途 */
            GameDaLuBox.prototype.addChildTrend = function (box) {
                this.gameTrendChildBoxList.push(box);
            };
            /**
             * 添加问路盒子
             * @param zhuang
             * @param xian
             */
            GameDaLuBox.prototype.addAskBox = function (zhuang, xian) {
                this.gameAskBoxXian = xian;
                this.gameAskBoxZhuang = zhuang;
            };
            GameDaLuBox.prototype.clear = function () {
                this.askDatasList = null;
                for (var index = 0; index < this.gameTrendChildBoxList.length; index++) {
                    var childBox = this.gameTrendChildBoxList[index];
                    childBox.clear();
                }
                _super.prototype.clear.call(this);
            };
            /**
            * 就跟下棋一样,走一步大路Item
            * @param data  大路点样式数据
            * @param col   落子点列
            * @param row   落子点行
            */
            GameDaLuBox.prototype.moveItem = function (data, col, row, belongCol) {
                //父类落子
                _super.prototype.moveItem.call(this, data, col, row, belongCol);
                //通知自己的子棋盘根据自己的数据刷新其对应的落子
                for (var index = 0; index < this.gameTrendChildBoxList.length; index++) {
                    var childBox = this.gameTrendChildBoxList[index];
                    //根据自己最后落子与棋盘数据获取子棋盘落子类型
                    var childData = childBox.checkDataType(this.lastItem, this.itemMap, this.itemColDatas);
                    if (childData) {
                        //子棋盘落子
                        childBox.addItemData(childData);
                    }
                }
                //子棋盘落子完成后获取子棋盘的问路信息
                this.askDatasList = {};
                for (var askDataType = 1; askDataType <= 2; askDataType++) {
                    this.askDatasList[askDataType] = {};
                    //先设置自身的问路数据
                    var LuData = this.LuBaseRule(askDataType);
                    this.setAskItemData(askDataType, LuData.curCol, LuData.curRow);
                    //根据自身问路信息获取对应子棋盘问路信息
                    for (var childI = 0; childI < this.gameTrendChildBoxList.length; childI++) {
                        var childBox = this.gameTrendChildBoxList[childI];
                        this.askDatasList[askDataType][childI] = childBox.checkDataType(this.askItem, this.itemMap, this.itemColDatas);
                    }
                }
                //刷新问路盒子数据
                //this.gameAskBoxZhuang.UpdateBoxView(this.askDatasList[1]);
                //this.gameAskBoxXian.UpdateBoxView(this.askDatasList[2]);
            };
            return GameDaLuBox;
        }(component.GameTrendCheckerboardBox));
        component.GameDaLuBox = GameDaLuBox;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameDaLuBox.js.map