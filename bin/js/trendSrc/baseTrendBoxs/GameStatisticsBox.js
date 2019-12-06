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
        var GameStatisticsBox = /** @class */ (function (_super) {
            __extends(GameStatisticsBox, _super);
            function GameStatisticsBox() {
                // @property(cc.Label)
                // betCountLabel: cc.Label;    //总局数
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // @property(cc.Label)
                // zhuangCountLabel: cc.Label;    //庄局数
                // @property(cc.Label)
                // xianCountLabel: cc.Label;    //闲局数
                //数据统计
                _this.betCount = 0;
                _this.zhuangCount = 0;
                _this.xianCount = 0;
                return _this;
            }
            GameStatisticsBox.prototype.updateView = function () {
                // this.betCountLabel.string = this.betCount.toString();
                // this.zhuangCountLabel.string = this.zhuangCount.toString();
                // this.xianCountLabel.string = this.xianCount.toString();
            };
            GameStatisticsBox.prototype.addItemData = function (dataType) {
                this.betCount++;
                if (dataType == 1) {
                    this.zhuangCount++;
                }
                else if (dataType == 2) {
                    this.xianCount++;
                }
                this.updateView();
            };
            GameStatisticsBox.prototype.clear = function () {
                this.betCount = 0;
                this.zhuangCount = 0;
                this.xianCount = 0;
                this.updateView();
            };
            return GameStatisticsBox;
        }(common.component.UIComponent));
        component.GameStatisticsBox = GameStatisticsBox;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameStatisticsBox.js.map