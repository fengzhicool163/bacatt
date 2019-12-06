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
    var DefaultAction = /** @class */ (function (_super) {
        __extends(DefaultAction, _super);
        function DefaultAction() {
            var _this = _super.call(this) || this;
            var token = AppInfoManager.Token;
            _this.setMethod("get").addParams("access_token", token).addHeader("access_token", token);
            return _this;
        }
        //请求完毕
        DefaultAction.prototype.onHttpRequestComplete = function (e) {
            if (GameMain.DEBUG)
                console.log('onHttpRequestComplete:' + this.hr.data);
            if (this.observer == null)
                return;
            var obj = JSON.parse(this.hr.data);
            if (GameMain.DEBUG)
                console.log(obj);
            this.observer.onSuccess.call(this.observer, obj);
            this.observer.onComplet.call(this.observer);
        };
        return DefaultAction;
    }(net.NetAction));
    net.DefaultAction = DefaultAction;
})(net || (net = {}));
//# sourceMappingURL=DefaultAction.js.map