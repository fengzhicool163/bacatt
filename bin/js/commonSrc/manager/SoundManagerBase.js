var common;
(function (common) {
    /** 大厅基础音效管理器 */
    var SoundManagerBase = /** @class */ (function () {
        function SoundManagerBase() {
        }
        Object.defineProperty(SoundManagerBase, "isPlayerMusic", {
            get: function () {
                return SaveManager.getObj().get(SaveManager.KEY_MUSIC_SWITCH, 1);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManagerBase, "isPlayEffect", {
            get: function () {
                return SaveManager.getObj().get(SaveManager.KEY_SFX_SWITCH, 1);
            },
            enumerable: true,
            configurable: true
        });
        //初始化
        SoundManagerBase.init = function () {
            Laya.SoundManager.autoStopMusic = true;
            Laya.SoundManager.autoReleaseSound = false;
            //获取背景音乐大小
            var music_volume = SaveManager.getObj().get(SaveManager.KEY_MUSIC_VL, 1);
            Laya.SoundManager.setMusicVolume(music_volume);
            var effect_volume = SaveManager.getObj().get(SaveManager.KEY_SFX_VL, 1);
            Laya.SoundManager.setSoundVolume(effect_volume);
        };
        SoundManagerBase.PlaySound = function (soundName) {
            if (this.isPlayEffect != 1)
                return;
            Laya.SoundManager.playSound(soundName);
        };
        SoundManagerBase.StopSound = function (soundName) {
            Laya.SoundManager.stopSound(soundName);
        };
        /********************************** 通用音效播放接口 **************************************/
        /**
         * 播放点击音效
         */
        SoundManagerBase.PlayClick = function () {
            this.PlaySound(this.sfx_click);
        };
        /**
         * 播放关闭音效
         */
        SoundManagerBase.PlayClose = function () {
            this.PlaySound(this.sfx_close);
        };
        /** 点击(打开界面) */
        SoundManagerBase.sfx_click = "commonRes/audios/sfx_click.mp3"; //     
        /** 关闭界面 */
        SoundManagerBase.sfx_close = "commonRes/audios/sfx_close.mp3"; //     点击(打开界面)
        SoundManagerBase.isBGMPlay = false;
        return SoundManagerBase;
    }());
    common.SoundManagerBase = SoundManagerBase;
})(common || (common = {}));
//# sourceMappingURL=SoundManagerBase.js.map