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
var UIState;
(function (UIState) {
    UIState[UIState["Error"] = 0] = "Error";
    UIState[UIState["UnInit"] = 1] = "UnInit";
    UIState[UIState["Destroy"] = 2] = "Destroy";
    UIState[UIState["Loading"] = 3] = "Loading";
    UIState[UIState["WaitOpen"] = 4] = "WaitOpen";
    UIState[UIState["Hide"] = 5] = "Hide";
    UIState[UIState["Show"] = 6] = "Show";
})(UIState || (UIState = {}));
var UIUnit = /** @class */ (function () {
    function UIUnit() {
        /** ui实例 */
        this.ui = null;
        /** ui实例状态 */
        this.uiState = UIState.UnInit;
        /** 加载ui实例所需资源路径 */
        this.uiResPaths = null;
        /** ui实例销毁后,资源缓存时间 0不销毁 */
        this.uiReleaseTime = 0;
    }
    return UIUnit;
}());
/** ui实例管理器 */
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 加载界面时的遮罩 */
        _this.resCheckTime = 1000;
        _this.maskAnim = false;
        _this.maskAlpha = 0.7;
        return _this;
    }
    UIManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new UIManager();
        }
        return this.instance;
    };
    UIManager.prototype.initComponents = function () {
        //
        Laya.stage.addChild(this);
        //
        this.uiUnitMap = {};
        //
        Laya.timer.loop(this.resCheckTime, this, this.checkRes);
        //
        Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
    };
    //销毁
    UIManager.prototype.destroy = function () {
        Laya.timer.clear(this, this.checkRes);
        Laya.stage.off(Laya.Event.RESIZE, this, this.resize);
        UIManager.instance = null;
        _super.prototype.destroy.call(this);
    };
    //Sprite全屏
    UIManager.prototype.setSpriteFullScreen = function (sp) {
        sp.width = Laya.stage.width;
        sp.height = Laya.stage.height;
        sp.centerX = 0;
        sp.centerY = 0;
        return sp;
    };
    UIManager.prototype.resize = function () {
        for (var key in this.uiUnitMap) {
            var uiUnit = this.uiUnitMap[key];
            if (uiUnit.ui) {
                this.setSpriteFullScreen(uiUnit.ui);
                uiUnit.ui.resize();
            }
        }
    };
    //
    UIManager.prototype.checkRes = function () {
        for (var key in this.uiUnitMap) {
            var uiUnit = this.uiUnitMap[key];
            if (uiUnit.uiState != UIState.Destroy)
                continue;
            if (uiUnit.uiResPaths && uiUnit.uiReleaseTime > 0) {
                uiUnit.uiReleaseTime -= this.resCheckTime;
                if (uiUnit.uiReleaseTime <= 0) {
                    uiUnit.uiReleaseTime = 0;
                    for (var index = 0; index < uiUnit.uiResPaths.length; index++) {
                        var assetpath = uiUnit.uiResPaths[index];
                        Laya.loader.clearTextureRes(assetpath);
                    }
                    uiUnit.uiResPaths = null;
                }
            }
        }
    };
    /**
     * 获取uiUnit
     * @param uiName UIPanel名称
     */
    UIManager.prototype.getUIUnit = function (uiName) {
        var uiUnit = this.uiUnitMap[uiName];
        if (!uiUnit) {
            this.uiUnitMap[uiName] = uiUnit = new UIUnit();
        }
        return uiUnit;
    };
    /** 显示 */
    UIManager.prototype.showPanel = function (uiScript, uiUnit, parentNode) {
        //
        uiUnit.uiState = UIState.Show;
        //生成实例
        if (!uiUnit.ui) {
            uiUnit.ui = new uiScript();
            // uiUnit.ui.mouseEnabled = true;
            // uiUnit.ui.mouseThrough = false;
        }
        parentNode.addChild(uiUnit.ui);
        this.setSpriteFullScreen(uiUnit.ui);
        uiUnit.ui.Show();
        uiUnit.uiReleaseTime = 0;
    };
    /** 隐藏 */
    UIManager.prototype.hidePanel = function (uiUnit) {
        if (uiUnit.ui) {
            uiUnit.ui.Hide();
        }
    };
    UIManager.prototype.tryShowUI = function (uiScript, uiResPaths, caller, callBack, parentNode) {
        var _this = this;
        var uiName = uiScript.toString(); //UIPanel脚本名称
        var uiUnit = this.getUIUnit(uiName); //获取ui管理单位,没有会生成一个
        //
        if (uiUnit.uiState == UIState.Hide) {
            this.showPanel(uiScript, uiUnit, parentNode);
            if (caller && callBack)
                callBack.apply(caller, [uiUnit.ui]);
            //
        }
        else if (uiUnit.uiState > UIState.Error && uiUnit.uiState < UIState.WaitOpen) {
            uiUnit.uiResPaths = uiResPaths;
            uiUnit.uiState = UIState.WaitOpen;
            uiUnit.uiReleaseTime = 0;
            //this.ShowLoadingMask(250);
            if (uiUnit.uiResPaths.length > 0) {
                Laya.loader.load(uiUnit.uiResPaths, Laya.Handler.create(this, function () {
                    //this.HideLoadingMask();
                    if (uiUnit.uiState == UIState.WaitOpen) {
                        _this.showPanel(uiScript, uiUnit, parentNode);
                        if (caller && callBack)
                            callBack.apply(caller, [uiUnit.ui]);
                    }
                }));
            }
            else {
                this.showPanel(uiScript, uiUnit, parentNode);
                if (caller && callBack)
                    callBack.apply(caller, [uiUnit.ui]);
            }
        }
    };
    /**
     * 预加载UI
     * @param uiScript
     * @param uiResPaths
     */
    UIManager.prototype.PreLoadUI = function (uiScript, uiResPaths, parentNode) {
        var _this = this;
        if (parentNode === void 0) { parentNode = this.uiNode; }
        var uiName = uiScript.toString(); //UIPanel脚本名称
        var uiUnit = this.getUIUnit(uiName); //获取ui管理单位,没有会生成一个
        //
        if (uiUnit.uiState > UIState.Error && uiUnit.uiState < UIState.Loading) {
            uiUnit.uiResPaths = uiResPaths;
            uiUnit.uiState = UIState.Loading;
            uiUnit.uiReleaseTime = 0;
            Laya.loader.load(uiUnit.uiResPaths, Laya.Handler.create(this, function () {
                if (uiUnit.uiState == UIState.Loading) {
                    //生成实例
                    if (!uiUnit.ui) {
                        uiUnit.ui = new uiScript();
                        // uiUnit.ui.mouseEnabled = true;
                        // uiUnit.ui.mouseThrough = false;
                    }
                    parentNode.addChild(uiUnit.ui);
                    _this.setSpriteFullScreen(uiUnit.ui);
                    uiUnit.ui.hide();
                    uiUnit.ui.visible = false;
                }
            }));
        }
    };
    /**
     * 显示Panel
     * @param uiName ui名称
     * @param args 开启参数
     * @param uiReleaseTime UIPanel资源生存时间
     */
    UIManager.prototype.ShowUI = function (uiScript, uiResPaths, caller, callBack) {
        if (caller === void 0) { caller = null; }
        if (callBack === void 0) { callBack = null; }
        this.tryShowUI(uiScript, uiResPaths, caller, callBack, this.uiNode);
    };
    /**
     * 显示Panel
     * @param uiName ui名称
     * @param args 开启参数
     * @param uiReleaseTime UIPanel资源生存时间
     */
    UIManager.prototype.ShowPopUI = function (uiScript, uiResPaths, caller, callBack) {
        if (caller === void 0) { caller = null; }
        if (callBack === void 0) { callBack = null; }
        this.tryShowUI(uiScript, uiResPaths, caller, callBack, this.popNode);
    };
    /**
     * 显示Panel
     * @param uiName ui名称
     * @param args 开启参数
     * @param uiReleaseTime UIPanel资源生存时间
     */
    UIManager.prototype.ShowMaskUI = function (uiScript, uiResPaths, caller, callBack) {
        if (caller === void 0) { caller = null; }
        if (callBack === void 0) { callBack = null; }
        this.tryShowUI(uiScript, uiResPaths, caller, callBack, this.maskNode);
    };
    /**
     * 关闭Panel
     * @param uiScript ui脚本
     * @param destroy 是否在关闭时销毁界面（默认不销毁）
     */
    UIManager.prototype.HideUI = function (uiScript, destroy, releaseTime) {
        if (destroy === void 0) { destroy = false; }
        if (releaseTime === void 0) { releaseTime = 15000; }
        var uiName = uiScript.toString();
        var uiUnit = this.getUIUnit(uiName);
        uiUnit.uiState = UIState.Hide;
        this.hidePanel(uiUnit);
        if (destroy)
            this.DestroyUI(uiScript, releaseTime);
    };
    /**
     * 销毁Panel
     * @param uiScript ui脚本
     */
    UIManager.prototype.DestroyUI = function (uiScript, releaseTime) {
        var uiName = uiScript.toString();
        var uiUnit = this.getUIUnit(uiName);
        if (uiUnit.ui) {
            uiUnit.ui.destroy();
            uiUnit.ui = null;
        }
        uiUnit.uiReleaseTime = releaseTime;
        uiUnit.uiState = UIState.Destroy;
    };
    /**
     * 获取UIPanel控制脚本
     * @param uiScript
     */
    UIManager.prototype.GetUI = function (uiScript) {
        var uiName = uiScript.toString();
        var uiUnit = this.getUIUnit(uiName);
        return uiUnit.ui;
    };
    return UIManager;
}(ui.commonUI.UIManagerUI));
//# sourceMappingURL=UIManager.js.map