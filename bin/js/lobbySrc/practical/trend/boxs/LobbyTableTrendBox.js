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
        var LobbyTableTrendBox = /** @class */ (function (_super) {
            __extends(LobbyTableTrendBox, _super);
            function LobbyTableTrendBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 缓存池初始化 */
            LobbyTableTrendBox.prototype.initComponents = function () {
                _super.prototype.initComponents.call(this);
                //历史记录Item放置节点
                this.itemListNode = this.bindObj.itemListNode;
                //棋子缓存池
                this.itemPool = new util.PoolView(component.LobbyTableTrendItem, ui.gameTrend.Items.LobbyTableTrendItemUI, 20, 48);
            };
            /** 盒子排版配置 */
            LobbyTableTrendBox.prototype.initLayoutData = function () {
                this.trendBoxRow = 6;
                this.trendColLimit = 39;
                this.trendItemSize = new Laya.Point(16, 16);
                this.trendItemOrigin = new Laya.Point(6, 5);
                this.trendItemSpacing = new Laya.Point(2, 2);
            };
            return LobbyTableTrendBox;
        }(component.BaccaratDaLuBox));
        component.LobbyTableTrendBox = LobbyTableTrendBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyTableTrendBox.js.map