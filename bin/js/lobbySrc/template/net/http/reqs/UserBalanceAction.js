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
/**
* name
*/
var net;
(function (net) {
    var UserBalanceAction = /** @class */ (function (_super) {
        __extends(UserBalanceAction, _super);
        function UserBalanceAction() {
            return _super.call(this) || this;
        }
        UserBalanceAction.prototype.address = function () {
            return net.Path.GATE_WAY_BASE_URL + "/player/user/balance";
        };
        return UserBalanceAction;
    }(net.DefaultAction));
    net.UserBalanceAction = UserBalanceAction;
})(net || (net = {}));
//# sourceMappingURL=UserBalanceAction.js.map