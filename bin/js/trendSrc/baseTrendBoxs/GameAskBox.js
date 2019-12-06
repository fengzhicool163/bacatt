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
        var GameAskBox = /** @class */ (function (_super) {
            __extends(GameAskBox, _super);
            function GameAskBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.gameTrendChildBoxItems = [];
                return _this;
            }
            GameAskBox.prototype.setItemData = function (item, data) {
                if (data) {
                    item.clear();
                    item.setItemView(data);
                    item.bindObj.visible = true;
                }
                else {
                    item.bindObj.visible = false;
                }
            };
            GameAskBox.prototype.UpdateBoxView = function (askDatas) {
                for (var index = 0; index < this.gameTrendChildBoxItems.length; index++) {
                    var item = this.gameTrendChildBoxItems[index];
                    var askData = askDatas[index];
                    this.setItemData(item, askData);
                }
            };
            GameAskBox.prototype.clear = function () {
                for (var index = 0; index < this.gameTrendChildBoxItems.length; index++) {
                    var item = this.gameTrendChildBoxItems[index];
                    item.bindObj.visible = false;
                }
            };
            return GameAskBox;
        }(common.component.UIComponent));
        component.GameAskBox = GameAskBox;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameAskBox.js.map