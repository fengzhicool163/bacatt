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
var ctrl;
(function (ctrl) {
    var RoomLobbyCtrlBase = /** @class */ (function (_super) {
        __extends(RoomLobbyCtrlBase, _super);
        function RoomLobbyCtrlBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 大厅显示消息 */
            _this.EVENT_SHOWLOBBY = "EVENT_SHOWLOBBY";
            return _this;
        }
        /** 获取用户钱包信息  */
        RoomLobbyCtrlBase.prototype.getUserBalanceInfo = function () {
            var _this = this;
            if (GameMain.DEBUG)
                console.log("重新获取玩家余额");
            var balanceOb = new net.DefaultNetObserver();
            balanceOb.onSuccess = function (balanceInfo) {
                //
                UserInfoManger.setUserBalance(balanceInfo);
                //广播房间数据更新
                _this.broadcast(_this.EVENT_SHOWLOBBY);
            };
            //消息返回处理
            balanceOb.onError = this.errorCodeFunc.bind(this);
            var balanceAction = new net.UserBalanceAction().bindObserver(balanceOb);
            balanceAction.excute();
        };
        /** 获取玩家ID信息与名称信息 */
        RoomLobbyCtrlBase.prototype.getUserInfo = function () {
            var _this = this;
            //获取用户基本信息
            var userInfoOb = new net.DefaultNetObserver();
            userInfoOb.onSuccess = function (userInfo) {
                //保存玩家数据
                UserInfoManger.setUserData(userInfo);
                //广播房间数据更新
                _this.broadcast(_this.EVENT_SHOWLOBBY);
            };
            //消息返回处理
            userInfoOb.onError = this.errorCodeFunc.bind(this);
            //
            var userInfoAction = new net.UserInfoAction().bindObserver(userInfoOb);
            userInfoAction.excute();
        };
        /** 获取玩家ID信息与名称信息 */
        RoomLobbyCtrlBase.prototype.getHeadInfo = function () {
            var _this = this;
            //获取用户基本信息
            var headerOb = new net.DefaultNetObserver();
            headerOb.onSuccess = function (headerInfo) {
                //保存玩家数据
                UserInfoManger.setUserHeadData(headerInfo);
                //广播房间数据更新
                _this.broadcast(_this.EVENT_SHOWLOBBY);
            };
            //消息返回处理
            headerOb.onError = this.errorCodeFunc.bind(this);
            //
            var userHeadAction = new net.UserHeadAction().bindObserver(headerOb);
            userHeadAction.excute();
        };
        /** 就问取个用户数据三条消息骚不骚 */
        RoomLobbyCtrlBase.prototype.getAllInfo = function () {
            //获取用户信息
            this.getUserInfo();
            //获取用户信息
            this.getUserBalanceInfo();
            //获取用户信息
            this.getHeadInfo();
        };
        /**
         * 401 "登录过期,请重新登录"
         * 422 msg
         * 503 && other "网络异常请重试"
         */
        RoomLobbyCtrlBase.prototype.errorCodeFunc = function (error, msg) {
            //
            common.panel.LoadingPanel.Hide();
            var self = this;
            var msg = error == 401 ? "登录过期,请重新登录" : error.toString();
            if (error == 401) {
                //todo
                common.panel.PopInfoPanel.Show(msg, function () {
                    self.gotoLobby();
                });
            }
            else {
                self.gotoLobby();
            }
            console.error(msg);
        };
        /** 进入游戏大厅 */
        RoomLobbyCtrlBase.prototype.intoGameLobby = function () {
            //获取必要数据
            common.panel.LoadingPanel.Show();
            //先把老数据清空
            UserInfoManger.clearData();
            //
            this.getAllInfo();
            //打开房间大厅界面
            UIManager.getInstance().ShowUI(lobby.panel.LobbyPanel, lobby.panel.LobbyPanel.assets);
        };
        /** 退出游戏大厅 */
        RoomLobbyCtrlBase.prototype.exitGameLobby = function () {
            //打开房间大厅界面
            UIManager.getInstance().HideUI(lobby.panel.LobbyPanel);
        };
        /** 返回游戏列表大厅 */
        RoomLobbyCtrlBase.prototype.gotoLobby = function () {
            //跳转到大厅
            // window.location.href = AppInfo.getInstance().getBackUrl() + "?token=" + AppInfo.getInstance().getToken();
            var msg = JSON.stringify({ action: "game_back" });
            window.top.postMessage(msg, "*");
        };
        return RoomLobbyCtrlBase;
    }(ctrl.UICtrl));
    ctrl.RoomLobbyCtrlBase = RoomLobbyCtrlBase;
})(ctrl || (ctrl = {}));
//# sourceMappingURL=RoomLobbyCtrlBase.js.map