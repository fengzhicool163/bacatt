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
    var panel;
    (function (panel) {
        var GameSettingPanelBase = /** @class */ (function (_super) {
            __extends(GameSettingPanelBase, _super);
            function GameSettingPanelBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameSettingPanelBase.prototype.initComponents = function () {
                //
                this.musicSliver = this.bindScript(common.component.HSliderPlus, this.musicSliverObj);
                this.soundSliver = this.bindScript(common.component.HSliderPlus, this.soundSliverObj);
                //
                this.musicSliver.sliderValueChangeHandler = Laya.Handler.create(this, this.musicSliverChange, null, false);
                this.soundSliver.sliderValueChangeHandler = Laya.Handler.create(this, this.soundSliverChange, null, false);
                this.tgMusic.clickHandler = Laya.Handler.create(this, this.musicSwitchChange, null, false);
                this.tgSound.clickHandler = Laya.Handler.create(this, this.soundSwitchChange, null, false);
                //关闭按钮
                EventManager.addTouchScaleListener(this.closeBtn, this, this.closeBtnFunc);
            };
            GameSettingPanelBase.prototype.Show = function () {
                _super.prototype.Show.call(this);
                this.updateView();
                this.openAnim(this.bgFrame);
            };
            GameSettingPanelBase.prototype.Hide = function () {
                this.musicSwitchChange();
                this.soundSwitchChange();
                _super.prototype.Hide.call(this);
            };
            GameSettingPanelBase.prototype.updateView = function () {
                //获取音乐开关
                var music_switch = SaveManager.getObj().get(SaveManager.KEY_MUSIC_SWITCH, 1);
                this.tgMusic.selected = (music_switch == 1);
                //获取音乐音量
                var music_volume = SaveManager.getObj().get(SaveManager.KEY_MUSIC_VL, 1);
                this.musicSliver.Value = this.tgMusic.selected ? music_volume : 0;
                Laya.SoundManager.musicVolume = this.musicSliver.Value;
                //获取音效开关
                var sound_switch = SaveManager.getObj().get(SaveManager.KEY_SFX_SWITCH, 1);
                this.tgSound.selected = (sound_switch == 1);
                //获取音效音量
                var sound_volume = SaveManager.getObj().get(SaveManager.KEY_SFX_VL, 1);
                this.soundSliver.Value = this.tgSound.selected ? sound_volume : 0;
                Laya.SoundManager.soundVolume = this.soundSliver.Value;
            };
            /** 设置音效音量 */
            GameSettingPanelBase.prototype.setSoundVolume = function (soundVolume) {
                Laya.SoundManager.setSoundVolume(soundVolume);
                console.log("Laya.SoundManager.soundVolume = " + Laya.SoundManager.soundVolume);
                SaveManager.getObj().set(SaveManager.KEY_SFX_VL, soundVolume);
            };
            /** 设置音乐音量 */
            GameSettingPanelBase.prototype.setMusicVolue = function (musicVolume) {
                Laya.SoundManager.setMusicVolume(musicVolume);
                console.log("Laya.SoundManager.musicVolume = " + Laya.SoundManager.musicVolume);
                SaveManager.getObj().set(SaveManager.KEY_MUSIC_VL, musicVolume);
            };
            /** 设置音效开关 */
            GameSettingPanelBase.prototype.setSoundSwitch = function (sound_switch) {
                SaveManager.getObj().set(SaveManager.KEY_SFX_SWITCH, sound_switch ? 1 : 0);
            };
            /** 设置音乐开关 */
            GameSettingPanelBase.prototype.setMusicSwitch = function (music_switch) {
                SaveManager.getObj().set(SaveManager.KEY_MUSIC_SWITCH, music_switch ? 1 : 0);
                lobby.SoundManager.PlayBGM();
            };
            /** 音乐音量滑动条变化 */
            GameSettingPanelBase.prototype.musicSliverChange = function (music_volume) {
                //刷新显示
                var music_switch = music_volume > 0;
                if (this.tgMusic.selected != music_switch) {
                    this.tgMusic.selected = music_switch;
                }
                //保存设置
                this.setMusicSwitch(music_switch);
                this.setMusicVolue(music_volume);
                SaveManager.getObj().saveData();
            };
            /** 音效音量滑动条变化 */
            GameSettingPanelBase.prototype.soundSliverChange = function (sound_volume) {
                //刷新显示
                var sound_switch = sound_volume > 0;
                if (this.tgSound.selected != sound_switch) {
                    this.tgSound.selected = sound_switch;
                    this.setSoundSwitch(sound_switch);
                }
                //保存设置
                this.setSoundVolume(sound_volume);
                SaveManager.getObj().saveData();
            };
            /** 音乐开关变化 */
            GameSettingPanelBase.prototype.musicSwitchChange = function () {
                //刷新显示
                var music_switch = this.tgMusic.selected;
                var music_volume = music_switch ? 1 : 0;
                this.musicSliver.justSetValue(music_volume);
                //保存设置
                this.setMusicVolue(music_volume);
                this.setMusicSwitch(music_switch);
                SaveManager.getObj().saveData();
            };
            /** 音效开关变化 */
            GameSettingPanelBase.prototype.soundSwitchChange = function () {
                //刷新显示
                var sound_switch = this.tgSound.selected;
                var sound_volume = sound_switch ? 1 : 0;
                this.soundSliver.justSetValue(sound_volume);
                //保存设置
                this.setSoundSwitch(sound_switch);
                this.setSoundVolume(sound_volume);
                SaveManager.getObj().saveData();
            };
            GameSettingPanelBase.prototype.closeBtnFunc = function () {
                lobby.SoundManager.PlayClose();
                UIManager.getInstance().HideUI(panel.GameSettingPanel);
            };
            return GameSettingPanelBase;
        }(ui.lobbyUI.Panels.GameSettingPanelUI));
        panel.GameSettingPanelBase = GameSettingPanelBase;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=GameSettingPanelBase.js.map