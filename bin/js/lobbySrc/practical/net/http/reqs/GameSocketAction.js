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
    var GameSocketAction = /** @class */ (function (_super) {
        __extends(GameSocketAction, _super);
        function GameSocketAction() {
            return _super.call(this) || this;
        }
        GameSocketAction.prototype.address = function () {
            /** http://sqp01game.sit01.com/api/v1/gamecenter/player/game/wsUrl/32?access_token=0367384c-9c95-4f09-909e-068fd9646b19 **/
            return net.Path.GATE_WAY_BASE_URL + "/player/game/wsUrl/" + AppInfoManager.GameId;
        };
        return GameSocketAction;
    }(net.DefaultAction));
    net.GameSocketAction = GameSocketAction;
})(net || (net = {}));
//# sourceMappingURL=GameSocketAction.js.map