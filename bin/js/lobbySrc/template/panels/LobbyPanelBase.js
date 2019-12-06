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
var lobby;
(function (lobby) {
    var panel;
    (function (panel) {
        var LobbyPanelBase = /** @class */ (function (_super) {
            __extends(LobbyPanelBase, _super);
            function LobbyPanelBase() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //
                _this.isUpdate = false;
                return _this;
            }
            //初始化控件（获取控件，加载动态控件，注册点击事件等）
            LobbyPanelBase.prototype.initComponents = function () {
                //获取管理器
                this.ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
                //显示游戏版本号
                this.versionLabel.changeText("版本号:" + GameMain.VERSION);
                //玩家信息
                this.playerInfoBox = this.bindScript(lobby.component.PlayerHeadInfoBox, this.playerInfoBoxObj);
                this.playerInfoBox_oldx = this.playerInfoBoxObj.x;
                //玩家钱包
                this.playerWalletBox = this.bindScript(lobby.component.PlayerWalletBox, this.playerWalletBoxObj);
                //底部按钮条
                this.btnBarBox = this.bindScript(lobby.component.LobbyBtnBarBox, this.btnBarObj);
                //跑马灯盒子
                this.marqueeBox = this.bindScript(common.component.MarqueeBox, this.marqueeBoxObj);
                //退出按钮
                EventManager.addTouchScaleListener(this.exitBtn, this, this.exitBtnFunc);
                //
                var msg = JSON.stringify({ action: "game_start", gameId: AppInfoManager.GameId });
                window.top.postMessage(msg, "*");
                //
                this.resize();
            };
            LobbyPanelBase.prototype.resize = function () {
                this.playerInfoBoxObj.x = this.playerInfoBox_oldx + util.GameUtils.posOffset;
            };
            //注册监听
            LobbyPanelBase.prototype.initlistener = function () {
                this.ctrl.addListener(this.ctrl.EVENT_SHOWLOBBY, this, this.updateView);
            };
            //注销监听           
            LobbyPanelBase.prototype.unInitlistener = function () {
                this.ctrl.removeListener(this.ctrl.EVENT_SHOWLOBBY, this, this.updateView);
            };
            LobbyPanelBase.prototype.resetLobby = function () {
                //
                this.isUpdate = false;
                //
                this.playerInfoBox.resetBox();
                this.playerWalletBox.resetBox();
                //
                this.marqueeBox.resetBox();
                //
                this.centerNode.visible = false;
            };
            /** 根据数据初始化显示 设置房间信息 */
            LobbyPanelBase.prototype.checkData = function () {
                var balance = UserInfoManger.Balance;
                var userName = UserInfoManger.UserName;
                var avatar = UserInfoManger.Avatar;
                //
                if (!balance || !userName || !avatar)
                    return false;
                //
                return true;
            };
            LobbyPanelBase.prototype.updateView = function () {
                //
                if (this.isUpdate || !this.checkData())
                    return false;
                //
                var balance = UserInfoManger.Balance;
                var userName = UserInfoManger.UserName;
                var avatar = UserInfoManger.Avatar;
                //显示跑马灯
                this.marqueeBox.setData(true);
                //头像
                this.playerInfoBox.setData(avatar, userName, true);
                //钱包
                this.playerWalletBox.setData(balance, true);
                //
                this.btnBarBox.setData(true);
                //
                common.panel.LoadingPanel.Hide();
                //
                this.isUpdate = true;
                //
                this.centerNode.visible = true;
                return true;
            };
            LobbyPanelBase.prototype.Show = function () {
                this.resetLobby();
                //
                this.updateView();
                //
                _super.prototype.Show.call(this);
            };
            LobbyPanelBase.prototype.Hide = function () {
                this.resetLobby();
                _super.prototype.Hide.call(this);
            };
            /************************************************** 点击事件 *******************************************/
            LobbyPanelBase.prototype.exitBtnFunc = function () {
                lobby.SoundManager.PlayGoBackLobby();
            };
            return LobbyPanelBase;
        }(ui.lobbyUI.Panels.LobbyPanelUI));
        panel.LobbyPanelBase = LobbyPanelBase;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyPanelBase.js.map