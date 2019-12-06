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
        var GameTrendBase = /** @class */ (function (_super) {
            __extends(GameTrendBase, _super);
            function GameTrendBase() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**************************** 缓存池 *************************/
                /* 历史记录Item放置节点 */
                _this.itemListNode = null;
                return _this;
            }
            GameTrendBase.prototype.initComponents = function () {
                this.itemList = [];
            };
            GameTrendBase.prototype.addItem = function (data) {
                //
                var item = this.itemPool.getComponent();
                item.setItemView(data);
                this.itemList.push(item);
                this.itemListNode.addChild(item.bindObj);
                return item;
            };
            /** 清空所有Item */
            GameTrendBase.prototype.clearAllItem = function () {
                for (var index = 0; index < this.itemList.length; index++) {
                    var item = this.itemList[index];
                    item.clear();
                    this.itemPool.recover(item);
                }
                this.itemList.length = 0;
                this.itemListNode.reCache();
            };
            GameTrendBase.prototype.clear = function () {
                this.clearAllItem();
            };
            return GameTrendBase;
        }(common.component.UIComponent));
        component.GameTrendBase = GameTrendBase;
    })(component = trend.component || (trend.component = {}));
})(trend || (trend = {}));
//# sourceMappingURL=GameTrendBase.js.map