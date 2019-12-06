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
    var NoticeAction = /** @class */ (function (_super) {
        __extends(NoticeAction, _super);
        function NoticeAction() {
            var _this = _super.call(this) || this;
            _this.addParams("start", "0").addParams("pageSize", "20");
            return _this;
        }
        NoticeAction.prototype.address = function () {
            return net.Path.GATE_WAY_BASE_URL + "/player/notice/list";
        };
        //请求完毕
        NoticeAction.prototype.onHttpRequestComplete = function (e) {
            if (this.observer == null)
                return;
            var obj = JSON.parse(this.hr.data);
            this.observer.onSuccess(obj);
            this.observer.onComplet();
        };
        return NoticeAction;
    }(net.DefaultAction));
    net.NoticeAction = NoticeAction;
})(net || (net = {}));
//# sourceMappingURL=NoticeAction.js.map