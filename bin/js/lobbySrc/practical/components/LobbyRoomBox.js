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
var lobby;
(function (lobby) {
    var component;
    (function (component) {
        /** 游戏房间盒子 */
        var LobbyRoomBox = /** @class */ (function (_super) {
            __extends(LobbyRoomBox, _super);
            function LobbyRoomBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LobbyRoomBox.prototype.initComponents = function () {
                //菜单组
                this.checkGroup = this.bindScript(common.component.CheckGroupBox, this.bindObj.checkGroupObj);
                //页面盒子
                this.pageBoxs = {};
                for (var index = 0; index < 4; index++) {
                    var obj = this.bindObj["lobbyTabelPageBoxObj" + index];
                    var pageBox = this.bindScript(component.LobbyTabelPageBox, obj);
                    this.pageBoxs[index] = pageBox;
                }
                //管理器
                this.ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
            };
            LobbyRoomBox.prototype.resetBox = function () {
                for (var index = 0; index < 4; index++) {
                    var pageBox = this.pageBoxs[index];
                    pageBox.resetBox();
                }
            };
            LobbyRoomBox.prototype.clearBox = function () {
                for (var index = 0; index < 4; index++) {
                    var pageBox = this.pageBoxs[index];
                    pageBox.clearBox();
                }
                this.bindObj.visible = false;
            };
            /** 初始化显示新手房 */
            LobbyRoomBox.prototype.initView = function () {
                this.checkGroup.selectIndex = 0;
                this.selectContent(0);
                this.checkGroup.setToggleChangeFunc(this, this.menuChangeFunc);
                this.bindObj.visible = true;
            };
            /** 选择显示页面刷新 */
            LobbyRoomBox.prototype.selectContent = function (selectIndex) {
                for (var index = 0; index < 4; index++) {
                    var pageBox = this.pageBoxs[index];
                    if (index != selectIndex) {
                        pageBox.bindObj.visible = false;
                    }
                    else {
                        pageBox.bindObj.visible = true;
                    }
                }
            };
            /** 菜单按钮点击事件 */
            LobbyRoomBox.prototype.menuChangeFunc = function () {
                lobby.SoundManager.PlayClick();
                var selectIndex = this.checkGroup.selectIndex;
                this.selectContent(selectIndex);
            };
            LobbyRoomBox.prototype.UpdateData = function () {
                for (var index = 0; index < 4; index++) {
                    var pageBox = this.pageBoxs[index];
                    var data = this.ctrl.lobbyData.data[index];
                    pageBox.setData(data);
                }
            };
            LobbyRoomBox.prototype.Show = function () {
                this.bindObj.visible = true;
                this.UpdateData();
                this.initView();
            };
            LobbyRoomBox.prototype.Hide = function () {
                this.clearBox();
            };
            return LobbyRoomBox;
        }(common.component.UIComponent));
        component.LobbyRoomBox = LobbyRoomBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyRoomBox.js.map