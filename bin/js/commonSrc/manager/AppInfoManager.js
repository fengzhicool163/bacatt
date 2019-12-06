/** App信息管理器 */
var AppInfoManager = /** @class */ (function () {
    function AppInfoManager() {
    }
    AppInfoManager.clearData = function () {
        this.jumpData = null;
    };
    /** 设置跳转数据 */
    AppInfoManager.setJumpData = function (paramsJson) {
        //
        this.jumpData = paramsJson;
        //保存最新的本地缓存数据到本地
        SaveManager.getObj().initCommon(this.jumpData.token, this.jumpData.backUrl);
    };
    Object.defineProperty(AppInfoManager, "Token", {
        get: function () {
            return this.jumpData.token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppInfoManager, "GameId", {
        get: function () {
            return this.jumpData.gameId.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppInfoManager, "ClientId", {
        get: function () {
            return this.jumpData.clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppInfoManager, "jumpDataStr", {
        get: function () {
            return JSON.stringify(this.jumpData);
        },
        enumerable: true,
        configurable: true
    });
    AppInfoManager.jumpData = null;
    return AppInfoManager;
}());
//# sourceMappingURL=AppInfoManager.js.map