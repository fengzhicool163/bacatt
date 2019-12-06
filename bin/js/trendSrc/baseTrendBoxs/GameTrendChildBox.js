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
        var GameTrendChildBox = /** @class */ (function (_super) {
            __extends(GameTrendChildBox, _super);
            function GameTrendChildBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.childBoxStart = false;
                _this.askData = {};
                return _this;
            }
            /**
             * 重写排版算法
             */
            GameTrendChildBox.prototype.getitemPos = function (col, row) {
                //计算位置
                var x = this.trendItemOrigin.x + col * this.trendItemSize.x + Math.floor(col / 2) * this.trendItemSpacing.x;
                var y = this.trendItemOrigin.y + row * this.trendItemSize.y + Math.floor(row / 2) * this.trendItemSpacing.y;
                return new Laya.Point(x, y);
            };
            GameTrendChildBox.prototype.clear = function () {
                this.childBoxStart = false;
                this.askData = {};
                _super.prototype.clear.call(this);
            };
            GameTrendChildBox.prototype.stopAskItemAnim = function () {
                _super.prototype.stopAskItemAnim.call(this);
            };
            /**
             * 传入大路最后落子
             * @param lastItem 大路最后落子
             * @param itemMap 大路棋盘落子Map
             * @param itemColDatas 大路棋盘长龙数据
             */
            GameTrendChildBox.prototype.checkDataType = function (lastItem, itemMap, itemColDatas) {
                //检测落子数据
                if (!this.childBoxStart) {
                    this.childBoxStart = this.checkStart(itemMap);
                }
                if (!this.childBoxStart)
                    return null;
                return this.checkDataFunc(lastItem, itemMap, itemColDatas);
            };
            return GameTrendChildBox;
        }(component.GameTrendCheckerboardBox));
        component.GameTrendChildBox = GameTrendChildBox;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameTrendChildBox.js.map