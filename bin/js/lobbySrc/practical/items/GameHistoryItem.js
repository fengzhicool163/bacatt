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
var items;
(function (items) {
    var GameHistoryItem = /** @class */ (function (_super) {
        __extends(GameHistoryItem, _super);
        function GameHistoryItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GameHistoryItem;
    }(items.GameHistoryItemBase));
    items.GameHistoryItem = GameHistoryItem;
})(items || (items = {}));
//# sourceMappingURL=GameHistoryItem.js.map