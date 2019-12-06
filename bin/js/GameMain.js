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
var WebGL = Laya.WebGL;
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SoundManager;
}(lobby.SoundManager));
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.initLaya();
        //获得参数 记得打开
        var paramsOk = this.getParams();
        if (!paramsOk) {
            if (GameMain.DEBUG)
                console.error("参数有错误，无法渲染");
            return;
        }
        //预加载资源
        Laya.loader.load(this.getAssets(), new Laya.Handler(this, this.loaded));
    }
    /**
     * 返回是否成功获取到参数
     */
    GameMain.prototype.getParams = function () {
        //2.反解析Base64 
        var base64 = new Base64();
        //1.获取整个数据
        var jumpData = util.StringUtils.getQueryVariable("jumpData");
        if (!jumpData) { //用于本地调试
            var testObj = {
                "token": "db6e62e1-6d94-46c7-9362-29ed24a0c402",
                "gameId": "32",
                "roomId": "100",
                "backUrl": "http://www.google.com",
                "clientId": "123"
            };
            jumpData = base64.encode(JSON.stringify(testObj));
        }
        var appName = util.StringUtils.getQueryVariable("app");
        var params = base64.decode(jumpData);
        params = params.substring(0, params.lastIndexOf("}") + 1);
        var paramsJson = JSON.parse(params);
        var token = paramsJson.token;
        var gameId = paramsJson.gameId;
        var backUrl = paramsJson.backUrl;
        var clientId = paramsJson.clientId;
        var usergateway = paramsJson.usergateway;
        var gamecenter = paramsJson.gamecenter;
        //vConsole
        paramsJson.openDebug = (paramsJson.openDebug == null || paramsJson.openDebug == undefined) ? true : paramsJson.openDebug;
        if (paramsJson.openDebug || (paramsJson.openDebug && GameMain.Vconsole)) {
            //window["initVconsole"]();
        }
        if (token == undefined || token == "") {
            if (GameMain.DEBUG)
                console.log("参数没有token");
            return false;
        }
        if (gameId == undefined || gameId == "") {
            if (GameMain.DEBUG)
                console.log("参数没有gameId");
            return false;
        }
        if (backUrl == undefined || backUrl == "") {
            if (GameMain.DEBUG)
                console.log("参数没有backUrl");
            return false;
        }
        if (clientId == undefined || clientId == "") {
            if (GameMain.DEBUG)
                console.log("参数没有clientId");
            return false;
        }
        //配置，如果url中含有地址，在此处配置，没有使用默认的
        if (usergateway != undefined) {
            net.Path.USER_GATE_WAY_BASE_URL = usergateway;
        }
        if (gamecenter != undefined) {
            net.Path.GATE_WAY_BASE_URL = gamecenter;
        }
        //设置跳转数据
        AppInfoManager.setJumpData(paramsJson);
        return true;
    };
    /** 初始化Laya画布 */
    GameMain.prototype.initLaya = function () {
        //初始化
        Laya.init(1334, 750, Laya.WebGL);
        //设置背景颜色为黑色
        Laya.stage.bgColor = "#000000";
        //水平居中
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //垂直居中
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //显示全部
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
        //游戏保持横屏
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        //设置Laya提供的worker.js路径
        Laya.WorkerLoader.workerPath = "libs/worker.js";
        //开启worker线程
        Laya.WorkerLoader.enable = true;
        //性能测试面板
        if (GameMain.DEBUG && !GameMain.Release) {
            laya.utils.Stat.show(80, 200);
            Laya.DebugPanel.init();
        }
    };
    /** 预加载资源路径 */
    GameMain.prototype.getAssets = function () {
        var assets = new Array();
        assets.push(common.asset.AssetConfig.CommonAtlasAssetPath);
        assets.push(lobby.SoundManagerBase.lobby_bgm);
        return assets;
    };
    /**
     * 资源初始化完毕
     */
    GameMain.prototype.loaded = function () {
        try {
            //window['loadJsOver']();
        }
        catch (e) {
            if (GameMain.DEBUG)
                console.log(e);
        }
        //初始化 Sound 管理器
        SoundManager.init();
        //初始化 UI 管理器
        UIManager.getInstance();
        //初始化 UI控制器 管理器
        UICtrlManager.getInstance();
        //预加载大厅界面
        UIManager.getInstance().PreLoadUI(lobby.panel.LobbyPanel, lobby.panel.LobbyPanel.assets);
        //预加载游戏界面
        //UIManager.getInstance().PreLoadUI(ui.GameRoomPanel, ui.GameRoomPanel.assets);
        //初始化房间大厅音乐
        SoundManager.PlayBGM();
        SoundManager.PlayWelcomeGame();
        //初始化房间大厅控制器
        var rlCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
        //进入大厅
        rlCtrl.init();
        rlCtrl.intoGameLobby();
    };
    GameMain.DEBUG = true;
    GameMain.Release = true;
    GameMain.Vconsole = false;
    GameMain.VERSION = "03.09.13.1049";
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map