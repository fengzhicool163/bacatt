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
        /**
         * 大路走势棋盘,集成基础棋盘实现落子逻辑
         */
        var BaccaratDaLuBox = /** @class */ (function (_super) {
            __extends(BaccaratDaLuBox, _super);
            function BaccaratDaLuBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //特殊情况第一把就开合（百家乐逻辑）
                _this.firstHe = false;
                return _this;
            }
            BaccaratDaLuBox.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this.firstHe = false;
            };
            /**
             * 大路落子逻辑
             * @param data 本次记录的数据
             */
            BaccaratDaLuBox.prototype.addItemData = function (data, reCache) {
                if (reCache === void 0) { reCache = false; }
                if (this.lastItem == null) { //是第一次落子
                    this.moveItem(data, 0, 0, 0); //直接落子
                    if ((data & trend.TrendItemType.He) > 0) {
                        this.firstHe = true; //第一次落子是和记录特殊状态
                        //添加和状态
                        this.lastItem.setItemSpecial();
                    }
                    if (reCache)
                        this.itemListNode.reCache();
                    return;
                }
                //特殊情况第一落子就是和,则不落新子,刷新落子状态
                if (this.firstHe) {
                    //根据类型刷新落子
                    if ((data & trend.TrendItemType.He) > 0) {
                        this.lastItem.setItemSpecial();
                    }
                    else { //直到不是和关闭特殊状态
                        this.lastItem.setItemView(data);
                        this.firstHe = false;
                    }
                    //关闭落子效果
                    this.stopAskItemAnim();
                    if (reCache)
                        this.itemListNode.reCache();
                    return;
                }
                //正常开和
                if ((data & trend.TrendItemType.He) > 0) {
                    this.lastItem.setItemSpecial();
                    //关闭落子效果
                    this.stopAskItemAnim();
                    if (reCache)
                        this.itemListNode.reCache();
                    return;
                }
                //正常2状态
                _super.prototype.addItemData.call(this, data);
            };
            return BaccaratDaLuBox;
        }(trend.component.GameDaLuBox));
        component.BaccaratDaLuBox = BaccaratDaLuBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=BaccaratDaLuBox.js.map