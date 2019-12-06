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
    var HistoryAction = /** @class */ (function (_super) {
        __extends(HistoryAction, _super);
        function HistoryAction() {
            var _this = _super.call(this) || this;
            _this.addParams("pageSize", "10").addParams("start", "0").addParams("gameId", AppInfoManager.GameId);
            return _this;
        }
        HistoryAction.prototype.address = function () {
            return net.Path.GATE_WAY_BASE_URL + "/player/game/history";
        };
        return HistoryAction;
    }(net.DefaultAction));
    net.HistoryAction = HistoryAction;
})(net || (net = {}));
//# sourceMappingURL=HistoryAction.js.map