var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var util;
(function (util) {
    var AppPostAction;
    (function (AppPostAction) {
        AppPostAction["account"] = "account";
        AppPostAction["custom"] = "custom";
        AppPostAction["recharge"] = "recharge";
        AppPostAction["redraw"] = "redraw";
    })(AppPostAction = util.AppPostAction || (util.AppPostAction = {}));
    var PostTool = /** @class */ (function () {
        function PostTool() {
        }
        /** 跳转到扩展模块 */
        PostTool.jump2module = function (type) {
            try {
                //
                var data = {
                    "token": AppInfoManager.Token,
                    "httpUrl": "../api/v1",
                    "clientId": AppInfoManager.ClientId,
                    "backUrl": "../gamethree/index.html?jumpData=" + AppInfoManager.jumpDataStr //,
                };
                //
                window.top.postMessage(JSON.stringify(__assign({ action: type }, data)), "*");
            }
            catch (e) {
                if (GameMain.DEBUG)
                    console.log(e);
            }
        };
        /** 跳转充值 */
        PostTool.jumpToRecharge = function () {
            //充值 
            this.jump2module(AppPostAction.recharge);
        };
        return PostTool;
    }());
    util.PostTool = PostTool;
})(util || (util = {}));
//# sourceMappingURL=PostTool.js.map