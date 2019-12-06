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
        /** 玩家头像与名称盒子模板 */
        var PlayerHeadInfoBox = /** @class */ (function (_super) {
            __extends(PlayerHeadInfoBox, _super);
            function PlayerHeadInfoBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PlayerHeadInfoBox;
        }(component.PlayerHeadInfoBoxBase));
        component.PlayerHeadInfoBox = PlayerHeadInfoBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=PlayerHeadInfoBox.js.map