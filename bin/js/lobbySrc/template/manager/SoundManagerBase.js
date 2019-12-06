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
    /** 大厅基础音效管理器 */
    var SoundManagerBase = /** @class */ (function (_super) {
        __extends(SoundManagerBase, _super);
        function SoundManagerBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /********************************** 通用音效播放接口 **************************************/
        SoundManagerBase.PlayBGM = function () {
            if (this.isPlayerMusic != 1)
                return;
            if (!common.SoundManagerBase.isBGMPlay) {
                common.SoundManagerBase.isBGMPlay = true;
                Laya.SoundManager.playMusic(this.lobby_bgm, 0);
            }
        };
        SoundManagerBase.StopBGM = function () {
            if (common.SoundManagerBase.isBGMPlay) {
                common.SoundManagerBase.isBGMPlay = false;
                Laya.SoundManager.stopMusic();
            }
        };
        /** 游戏进入音效 */
        SoundManagerBase.PlayWelcomeGame = function () {
            this.PlaySound(this.lobby_welcome);
        };
        /**
         * 播放打开Panel音效
         */
        SoundManagerBase.PlayOpenPanel = function () {
            this.PlaySound(this.enterPanelClick);
        };
        /**
         * 播放返回大厅音效
         */
        SoundManagerBase.PlayGoBackLobby = function () {
            this.PlaySound(this.sfx_returnLobbyClick);
        };
        SoundManagerBase.lobby_bgm = lobby.asset.AssetConfig.LobbyAssetsDir + "/audios/lobby_bgm.mp3"; //0     bgm
        SoundManagerBase.lobby_welcome = lobby.asset.AssetConfig.LobbyAssetsDir + "/audios/lobby_welcome.mp3"; //1     欢迎光临炸金花
        SoundManagerBase.enterPanelClick = lobby.asset.AssetConfig.LobbyAssetsDir + "/audios/enterPanelClick.mp3"; //     充值界面打开音效（充值按钮）
        SoundManagerBase.sfx_returnLobbyClick = lobby.asset.AssetConfig.LobbyAssetsDir + "/audios/sfx_returnLobbyClick.mp3"; //     返回大厅按钮
        return SoundManagerBase;
    }(common.SoundManagerBase));
    lobby.SoundManagerBase = SoundManagerBase;
})(lobby || (lobby = {}));
//# sourceMappingURL=SoundManagerBase.js.map