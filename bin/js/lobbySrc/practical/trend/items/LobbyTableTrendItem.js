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
var lobby;
(function (lobby) {
    var component;
    (function (component) {
        var LobbyTableTrendItem = /** @class */ (function (_super) {
            __extends(LobbyTableTrendItem, _super);
            function LobbyTableTrendItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**
                 * 和次数
                 */
                _this.heNum = 0;
                return _this;
            }
            LobbyTableTrendItem.prototype.initComponents = function () {
                _super.prototype.initComponents.call(this);
                this.clear();
            };
            /**
             * 设置百家乐历史记录Item数据
             * @param itemType
             */
            LobbyTableTrendItem.prototype.setItemView = function (itemType) {
                _super.prototype.setItemView.call(this, itemType);
                this.bindObj.type1.visible = (itemType & trend.TrendItemType.Zhuang) > 0;
                this.bindObj.type2.visible = (itemType & trend.TrendItemType.Xian) > 0;
            };
            /**
             * 添加一次和状态
             */
            LobbyTableTrendItem.prototype.setItemSpecial = function () {
                this.heNum++;
                this.bindObj.type0.visible = true;
                this.bindObj.type0.text = this.heNum.toString();
            };
            /**
             * 显示触底提示
             */
            LobbyTableTrendItem.prototype.showTouchButtom = function () {
                this.bindObj.touchButtomIcon.visible = true;
            };
            LobbyTableTrendItem.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this.heNum = 0;
                this.bindObj.type0.visible = false;
                this.bindObj.type1.visible = false;
                this.bindObj.type1.visible = false;
                this.bindObj.touchButtomIcon.visible = false;
            };
            return LobbyTableTrendItem;
        }(trend.component.GameTrendItemBase));
        component.LobbyTableTrendItem = LobbyTableTrendItem;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyTableTrendItem.js.map