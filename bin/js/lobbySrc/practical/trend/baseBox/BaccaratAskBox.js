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
        var BaccaratAskBox = /** @class */ (function (_super) {
            __extends(BaccaratAskBox, _super);
            function BaccaratAskBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BaccaratAskBox.prototype.initComponents = function () {
            };
            return BaccaratAskBox;
        }(trend.component.GameAskBox));
        component.BaccaratAskBox = BaccaratAskBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=BaccaratAskBox.js.map