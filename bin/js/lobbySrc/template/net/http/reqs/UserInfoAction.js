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
    var UserInfoAction = /** @class */ (function (_super) {
        __extends(UserInfoAction, _super);
        function UserInfoAction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserInfoAction.prototype.address = function () {
            //return net.Path.GATE_WAY_BASE_URL + "/player/user";
            return net.Path.USER_GATE_WAY_BASE_URL + "/webapi/account/users/current";
        };
        return UserInfoAction;
    }(net.DefaultAction));
    net.UserInfoAction = UserInfoAction;
})(net || (net = {}));
//# sourceMappingURL=UserInfoAction.js.map