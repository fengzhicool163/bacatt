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
    var DefaultNetObserver = /** @class */ (function (_super) {
        __extends(DefaultNetObserver, _super);
        function DefaultNetObserver() {
            return _super.call(this) || this;
        }
        /**
         * Api开始调用实现的函数
         */
        DefaultNetObserver.prototype.onStart = function () {
        };
        /**
         * Api调用完成的函数，不管成功与失败都会调用该函数
         */
        DefaultNetObserver.prototype.onComplet = function () {
        };
        /**
         * 当本次Api调用成功回调的函数
         * @param data 返回数据
         */
        DefaultNetObserver.prototype.onSuccess = function (data) {
        };
        /**
         * 当本次Api调用失败回调的函数
         * @param error 失败的Code
         * @param msg   失败的信息
         */
        DefaultNetObserver.prototype.onError = function (error, msg) {
        };
        return DefaultNetObserver;
    }(net.NetObserver));
    net.DefaultNetObserver = DefaultNetObserver;
})(net || (net = {}));
//# sourceMappingURL=DefaultNetObserver.js.map