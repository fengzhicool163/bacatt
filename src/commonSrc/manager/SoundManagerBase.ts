

module common {

    /** 大厅基础音效管理器 */
    export class SoundManagerBase {

        /** 点击(打开界面) */
        public static readonly sfx_click = "commonRes/audios/sfx_click.mp3";            //     
        /** 关闭界面 */
        public static readonly sfx_close = "commonRes/audios/sfx_close.mp3";            //     点击(打开界面)

        protected static get isPlayerMusic() {
            return SaveManager.getObj().get(SaveManager.KEY_MUSIC_SWITCH, 1);
        }

        protected static get isPlayEffect() {
            return SaveManager.getObj().get(SaveManager.KEY_SFX_SWITCH, 1);
        }

        protected static isBGMPlay = false;

        //初始化
        public static init() {
            Laya.SoundManager.autoStopMusic = true;
            Laya.SoundManager.autoReleaseSound = false;
            //获取背景音乐大小
            var music_volume = SaveManager.getObj().get(SaveManager.KEY_MUSIC_VL, 1);
            Laya.SoundManager.setMusicVolume(music_volume);

            var effect_volume = SaveManager.getObj().get(SaveManager.KEY_SFX_VL, 1);
            Laya.SoundManager.setSoundVolume(effect_volume);
        }

        public static PlaySound(soundName: string) {
            if (this.isPlayEffect != 1) return;
            Laya.SoundManager.playSound(soundName);
        }

        public static StopSound(soundName: string) {
            Laya.SoundManager.stopSound(soundName);
        }

       
        /********************************** 通用音效播放接口 **************************************/
        /**
         * 播放点击音效
         */
        public static PlayClick() {
            this.PlaySound(this.sfx_click);
        }

        /**
         * 播放关闭音效
         */
        public static PlayClose() {
            this.PlaySound(this.sfx_close);
        }

       

    }
}
