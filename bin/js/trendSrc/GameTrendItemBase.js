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
        var GameTrendItemBase = /** @class */ (function (_super) {
            __extends(GameTrendItemBase, _super);
            function GameTrendItemBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameTrendItemBase.prototype.initComponents = function () {
            };
            GameTrendItemBase.prototype.pos = function (point) {
                this.bindObj.x = point.x;
                this.bindObj.y = point.y;
            };
            /**
             * 设置行列与坐标
             * @param col
             * @param row
             */
            GameTrendItemBase.prototype.setRowCol = function (col, row, point) {
                this.col = col;
                this.row = row;
                this.pos(point);
                this.bindObj.visible = true;
            };
            /**
             * 刷新Item默认显示 例如 庄闲
             * @param data 用于刷新显示的数据
             */
            GameTrendItemBase.prototype.setItemView = function (data) {
                this.data = data;
            };
            /**
             * 刷新Item特殊显示 例如 和
             * @param data
             */
            GameTrendItemBase.prototype.setItemSpecial = function (data) {
            };
            GameTrendItemBase.prototype.clear = function () {
                this.data = null;
                this.col = -1;
                this.row = -1;
                this.bindObj.visible = false;
            };
            return GameTrendItemBase;
        }(common.component.UIComponent));
        component.GameTrendItemBase = GameTrendItemBase;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameTrendItemBase.js.map