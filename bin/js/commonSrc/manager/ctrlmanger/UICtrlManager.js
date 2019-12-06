/*
* name;
*/
var UICtrlManager = /** @class */ (function () {
    function UICtrlManager() {
        this.init();
    }
    UICtrlManager.getInstance = function () {
        if (!UICtrlManager.instance) {
            UICtrlManager.instance = new UICtrlManager();
        }
        return UICtrlManager.instance;
    };
    //初始化
    UICtrlManager.prototype.init = function () {
        this.ctrlMap = {};
    };
    /**
     * 获取UICtrlPanel控制脚本
     * @param uiCtrlScript
     */
    UICtrlManager.prototype.GetCtrl = function (uiCtrlScript) {
        var ctrlName = uiCtrlScript.toString();
        if (this.ctrlMap[ctrlName])
            return this.ctrlMap[ctrlName];
        this.ctrlMap[ctrlName] = new uiCtrlScript();
        return this.ctrlMap[ctrlName];
    };
    return UICtrlManager;
}());
//# sourceMappingURL=UICtrlManager.js.map