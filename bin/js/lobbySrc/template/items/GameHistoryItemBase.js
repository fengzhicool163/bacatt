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
    var GameHistoryItemBase = /** @class */ (function (_super) {
        __extends(GameHistoryItemBase, _super);
        function GameHistoryItemBase() {
            var _this = _super.call(this) || this;
            EventManager.addTouchScaleListener(_this.numberLabel, _this, _this.copyOrderNo);
            return _this;
        }
        GameHistoryItemBase.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true);
        };
        GameHistoryItemBase.prototype.removeSelf = function () {
            this.itemData = null;
            return _super.prototype.removeSelf.call(this);
        };
        GameHistoryItemBase.prototype.setData = function (itemData) {
            this.itemData = itemData;
            this.indexLabel.changeText("" + itemData.index);
            this.numberLabel.changeText("" + itemData.orderNo);
            var amount = util.StringUtils.FormatMoney(itemData.amount, 2);
            this.beniftLabel.changeText(amount);
            if (itemData.amount < 0)
                this.beniftLabel.color = "#df4218";
            else
                this.beniftLabel.color = "#9ed018";
            this.roomLabel.changeText("" + itemData.roomName);
            this.endTimeLabel.changeText("" + itemData.endTime);
        };
        /**
         *  {action:"game_common", do: "copylink", type: "friend",
            param: "需要复制到剪贴板的内容",hint:"复制完成后提醒文字"}
         */
        GameHistoryItemBase.prototype.copyOrderNo = function () {
            if (!this.itemData)
                return;
            var msg = JSON.stringify({ action: "game_common", do: "copylink", type: "friend",
                param: this.itemData.orderNo, hint: "牌局编号已复制到您的剪切板" });
            window.top.postMessage(msg, "*");
            if (GameMain.DEBUG)
                console.log("尝试复制牌局号 msg = " + msg);
        };
        return GameHistoryItemBase;
    }(ui.lobbyUI.Items.GameHistoryItemUI));
    items.GameHistoryItemBase = GameHistoryItemBase;
})(items || (items = {}));
//# sourceMappingURL=GameHistoryItemBase.js.map