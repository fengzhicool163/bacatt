

module lobby {

    /** 大厅基础音效管理器 */
    export class SoundManagerBase extends common.SoundManagerBase {

        public static readonly lobby_bgm = asset.AssetConfig.LobbyAssetsDir + "/audios/lobby_bgm.mp3";                           //0     bgm
        public static readonly lobby_welcome = asset.AssetConfig.LobbyAssetsDir + "/audios/lobby_welcome.mp3";                   //1     欢迎光临炸金花

        public static readonly enterPanelClick = asset.AssetConfig.LobbyAssetsDir + "/audios/enterPanelClick.mp3";               //     充值界面打开音效（充值按钮）
        public static readonly sfx_returnLobbyClick = asset.AssetConfig.LobbyAssetsDir + "/audios/sfx_returnLobbyClick.mp3";     //     返回大厅按钮

        /********************************** 通用音效播放接口 **************************************/
        public static PlayBGM() {
            if (this.isPlayerMusic != 1) return;
            if (!common.SoundManagerBase.isBGMPlay) {
                common.SoundManagerBase.isBGMPlay = true;
                Laya.SoundManager.playMusic(this.lobby_bgm, 0);
            }

        }

        public static StopBGM() {
            if (common.SoundManagerBase.isBGMPlay) {
                common.SoundManagerBase.isBGMPlay = false;
                Laya.SoundManager.stopMusic();
            }
        }

        /** 游戏进入音效 */
        public static PlayWelcomeGame() {
            this.PlaySound(this.lobby_welcome);
        }

     
        /**
         * 播放打开Panel音效
         */
        public static PlayOpenPanel() {
            this.PlaySound(this.enterPanelClick);
        }

        /**
         * 播放返回大厅音效
         */
        public static PlayGoBackLobby() {
            this.PlaySound(this.sfx_returnLobbyClick);
        }

    }
}
