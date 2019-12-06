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
        var GameZhuPanBox = /** @class */ (function (_super) {
            __extends(GameZhuPanBox, _super);
            function GameZhuPanBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameZhuPanBox.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this.daLuBox.clear();
            };
            GameZhuPanBox.prototype.noticeDaLu = function (data) {
                //大路落子
                this.daLuBox.addItemData(data);
            };
            /**
             * 添加一个记录到珠路盒子中
             * @param data 本次记录的数据
             */
            GameZhuPanBox.prototype.addItemData = function (data) {
                //珠路落子
                // var index = this.itemList.length;
                // var col = Math.floor(index / this.boxRow);
                // var row = index % this.boxRow;
                // this.addItem(data, col, row);
                // //关闭落子效果
                // this.stopAskItemAnim();
                // //通知大路落子
                // this.noticeDaLu(data);
            };
            GameZhuPanBox.prototype.addAskItemData = function (data) {
                //珠路落子
                // var index = this.itemList.length;
                // var col = Math.floor(index / this.boxRow);
                // var row = index % this.boxRow;
                // this.moveAskItem(data, col, row);
                // if (this.daLuBox) {
                //     this.daLuBox.addAskItemData(data);
                // }
            };
            GameZhuPanBox.prototype.ZhuangAskBtnFunc = function () {
                this.addAskItemData(1);
            };
            GameZhuPanBox.prototype.XianAskBtnFunc = function () {
                this.addAskItemData(2);
            };
            return GameZhuPanBox;
        }(component.GameTrendBoxBase));
        component.GameZhuPanBox = GameZhuPanBox;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameZhuPanBox.js.map