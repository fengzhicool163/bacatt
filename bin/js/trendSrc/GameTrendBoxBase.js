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
/**
 * 走势落子棋盘基类,管理棋子添加、缓存、清理等工作但不包含落子算法逻辑
 */
var trend;
(function (trend) {
    var component;
    (function (component) {
        var GameTrendBoxBase = /** @class */ (function (_super) {
            __extends(GameTrendBoxBase, _super);
            function GameTrendBoxBase() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /** 走势棋盘行数 */
                _this.trendBoxRow = 6;
                /** 走势棋盘列数限制 */
                _this.trendColLimit = 8;
                /** 当前最大的列数 */
                _this.furthestCol = -1;
                return _this;
            }
            GameTrendBoxBase.prototype.clear = function () {
                //
                this.furthestCol = -1;
                //
                _super.prototype.clear.call(this);
            };
            GameTrendBoxBase.prototype.initComponents = function () {
                _super.prototype.initComponents.call(this);
                this.initLayoutData();
            };
            /** 删除第一列显示的棋子 */
            GameTrendBoxBase.prototype.delFirstCol = function () {
                while (this.itemList.length > 0) {
                    var firstItem = this.itemList[0];
                    if (firstItem.col == 0) {
                        this.itemList.shift();
                        firstItem.clear();
                        this.itemPool.recover(firstItem);
                    }
                    else {
                        break;
                    }
                }
                for (var index = 0; index < this.itemList.length; index++) {
                    var item = this.itemList[index];
                    item.col -= 1;
                    var point = this.getitemPos(item.col, item.row);
                    item.pos(point);
                }
            };
            /**
             * 添加一个Item到滑动条
             * @param data
             */
            GameTrendBoxBase.prototype.addItem = function (data, col, row) {
                //
                var item = _super.prototype.addItem.call(this, data);
                //设置落子坐标与位置
                var pos = this.getitemPos(col, row);
                item.setRowCol(col, row, pos);
                //刷新棋盘大小
                var furthestCol = Math.max(col, this.furthestCol);
                if (furthestCol >= this.trendColLimit) {
                    this.delFirstCol();
                }
                return item;
            };
            /** 棋子位置算法 */
            GameTrendBoxBase.prototype.getitemPos = function (col, row) {
                //
                var x = col * this.trendItemSize.x + col * this.trendItemSpacing.x + this.trendItemOrigin.x;
                var y = row * this.trendItemSize.y + row * this.trendItemSpacing.y + this.trendItemOrigin.y;
                return new Laya.Point(x, y);
            };
            GameTrendBoxBase.prototype.playAskItemAnim = function () {
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
            };
            GameTrendBoxBase.prototype.stopAskItemAnim = function () {
                // if (this.askItem.node.active) {
                //     this.askItem.node.stopAllActions();
                //     this.askItem.node.active = false;
                // }
            };
            /**
             * 设置问路Item数据
             */
            GameTrendBoxBase.prototype.setAskItemData = function (data, col, row) {
                // this.stopAskItemAnim();
                // this.askItem.clear();
                // this.askItem.setItemView(data);
                // this.askItem.setRowCol(col, row, this.getitemPos(col, row));
            };
            /**
            * 落下问路棋子
            */
            GameTrendBoxBase.prototype.moveAskItem = function (data, col, row) {
                // this.setAskItemData(data, col, row);
                // this.playAskItemAnim();
            };
            /**************************************** 子类复写实现 ******************************************/
            /** 走势盒子排版配置 */
            GameTrendBoxBase.prototype.initLayoutData = function () {
                this.trendBoxRow = 6;
                this.trendColLimit = 8;
                this.trendItemSize = new Laya.Point(16, 16);
                this.trendItemOrigin = new Laya.Point(6, 5);
                this.trendItemSpacing = new Laya.Point(2, 2);
            };
            return GameTrendBoxBase;
        }(component.GameTrendBase));
        component.GameTrendBoxBase = GameTrendBoxBase;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameTrendBoxBase.js.map