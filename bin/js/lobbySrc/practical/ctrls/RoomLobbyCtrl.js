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
var ctrl;
(function (ctrl) {
    var GameResponse = net.protocol.GameResponse;
    var RoomLobbyCtrl = /** @class */ (function (_super) {
        __extends(RoomLobbyCtrl, _super);
        function RoomLobbyCtrl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 房间显示消息 */
            _this.EVENT_SHOWROOMBOX = "EVENT_SHOWROOMBOX";
            /** 游戏房间信息 */
            _this.lobbyData = null;
            return _this;
        }
        //
        RoomLobbyCtrl.prototype.clearData = function () {
            this.lobbyData = null;
        };
        RoomLobbyCtrl.prototype.init = function () {
            this.gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
            this.conectSever(); //连接游戏服务器
            this.getAllInfo(); //获取玩家数据
            this.addListenerNetMsg();
        };
        /** 链接游戏服务器 */
        RoomLobbyCtrl.prototype.conectSever = function () {
            var _this = this;
            if (!this.gameWsurl) {
                if (GameMain.DEBUG)
                    console.log("获取游戏服务器地址");
                var gameWsOb = new net.DefaultNetObserver();
                //
                gameWsOb.onSuccess = function (data) {
                    _this.gameWsurl = data.wsUrl + "/" + AppInfoManager.Token + "/" + AppInfoManager.GameId;
                    _this.gameNet.init(_this.gameWsurl, "");
                    if (GameMain.DEBUG)
                        console.log("游戏服务器地址:" + _this.gameWsurl);
                };
                //消息返回处理
                gameWsOb.onError = function (error, msg) {
                    _this.errorCodeFunc(error, msg);
                };
                //
                var gameWsAction = new net.GameSocketAction().bindObserver(gameWsOb);
                gameWsAction.excute();
            }
            else {
                this.gameNet.init(this.gameWsurl, "");
            }
        };
        /**
         * 清除对象所有的定时器
         */
        RoomLobbyCtrl.prototype.destroy = function () {
            this.clearData();
        };
        /*************************************** 网络事件 ****************************************/
        RoomLobbyCtrl.prototype.addListenerNetMsg = function () {
            //
            this.gameNet.addListener(GameResponse.RoomInfo, this, this.updateRoomBox);
        };
        /**  */
        RoomLobbyCtrl.prototype.updateRoomBox = function (data) {
            this.lobbyData = data;
            this.broadcast(this.EVENT_SHOWROOMBOX);
        };
        return RoomLobbyCtrl;
    }(ctrl.RoomLobbyCtrlBase));
    ctrl.RoomLobbyCtrl = RoomLobbyCtrl;
})(ctrl || (ctrl = {}));
//# sourceMappingURL=RoomLobbyCtrl.js.map