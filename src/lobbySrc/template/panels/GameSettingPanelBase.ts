

module lobby.panel {

	export abstract class GameSettingPanelBase extends ui.lobbyUI.Panels.GameSettingPanelUI {

		protected musicSliver : common.component.HSliderPlus;
		protected soundSliver : common.component.HSliderPlus;

		protected initComponents() {
			//
			this.musicSliver = this.bindScript(common.component.HSliderPlus,this.musicSliverObj);
			this.soundSliver = this.bindScript(common.component.HSliderPlus,this.soundSliverObj);
			//
			this.musicSliver.sliderValueChangeHandler = Laya.Handler.create(this,this.musicSliverChange,null,false);
			this.soundSliver.sliderValueChangeHandler = Laya.Handler.create(this,this.soundSliverChange,null,false);
			this.tgMusic.clickHandler = Laya.Handler.create(this,this.musicSwitchChange,null,false);
			this.tgSound.clickHandler = Laya.Handler.create(this,this.soundSwitchChange,null,false);
			//关闭按钮
			EventManager.addTouchScaleListener(this.closeBtn,this,this.closeBtnFunc);
		}		


		public Show(){
			super.Show();
			this.updateView();
			this.openAnim( this.bgFrame );
		}

		public Hide(){
			this.musicSwitchChange();
			this.soundSwitchChange();
			super.Hide();
		}

		public updateView(){
			//获取音乐开关
			var music_switch = SaveManager.getObj().get(SaveManager.KEY_MUSIC_SWITCH,1);
			this.tgMusic.selected = (music_switch == 1);
			//获取音乐音量
			var music_volume = SaveManager.getObj().get(SaveManager.KEY_MUSIC_VL,1);
			this.musicSliver.Value = this.tgMusic.selected ? music_volume : 0;
			Laya.SoundManager.musicVolume = this.musicSliver.Value;
			//获取音效开关
			var sound_switch = SaveManager.getObj().get(SaveManager.KEY_SFX_SWITCH,1);
			this.tgSound.selected = (sound_switch == 1);
			//获取音效音量
			var sound_volume = SaveManager.getObj().get( SaveManager.KEY_SFX_VL , 1 );
			this.soundSliver.Value = this.tgSound.selected ? sound_volume : 0;
			Laya.SoundManager.soundVolume = this.soundSliver.Value;
		}

		/** 设置音效音量 */
		private setSoundVolume( soundVolume : number ){
			Laya.SoundManager.setSoundVolume(soundVolume);
			console.log("Laya.SoundManager.soundVolume = " + Laya.SoundManager.soundVolume);
			SaveManager.getObj().set(SaveManager.KEY_SFX_VL,soundVolume);
		}

		/** 设置音乐音量 */
		private setMusicVolue( musicVolume : number){
			Laya.SoundManager.setMusicVolume(musicVolume)
			console.log("Laya.SoundManager.musicVolume = " + Laya.SoundManager.musicVolume);
			SaveManager.getObj().set(SaveManager.KEY_MUSIC_VL,musicVolume);
		}

		/** 设置音效开关 */
		private setSoundSwitch( sound_switch : boolean ){
			SaveManager.getObj().set(SaveManager.KEY_SFX_SWITCH,sound_switch ? 1 : 0);
		}

		/** 设置音乐开关 */
		private setMusicSwitch( music_switch : boolean ){	
			SaveManager.getObj().set(SaveManager.KEY_MUSIC_SWITCH,music_switch ? 1 : 0);
			SoundManager.PlayBGM();
		}

		/** 音乐音量滑动条变化 */
		protected musicSliverChange(music_volume : number){
			//刷新显示
			var music_switch = music_volume > 0;
			if(this.tgMusic.selected != music_switch){
				this.tgMusic.selected = music_switch;
				
			}
			//保存设置
			this.setMusicSwitch( music_switch );
			this.setMusicVolue( music_volume );
			SaveManager.getObj().saveData();
		}

		/** 音效音量滑动条变化 */
		protected soundSliverChange(sound_volume : number){
			//刷新显示
			var sound_switch = sound_volume > 0;
			if(this.tgSound.selected != sound_switch){
				this.tgSound.selected = sound_switch;
				this.setSoundSwitch( sound_switch );
			}
			//保存设置
			this.setSoundVolume( sound_volume );
			SaveManager.getObj().saveData();
		}

		/** 音乐开关变化 */
		protected musicSwitchChange(){
			//刷新显示
			var music_switch = this.tgMusic.selected;
			var music_volume = music_switch ? 1 : 0;
			this.musicSliver.justSetValue( music_volume );
			//保存设置
			this.setMusicVolue( music_volume );
			this.setMusicSwitch( music_switch );
			SaveManager.getObj().saveData();
		}

		/** 音效开关变化 */
		protected soundSwitchChange(){
			//刷新显示
			var sound_switch = this.tgSound.selected;
			var sound_volume = sound_switch ? 1 : 0;
			this.soundSliver.justSetValue( sound_volume );
			//保存设置
			this.setSoundSwitch( sound_switch );
			this.setSoundVolume( sound_volume );
			SaveManager.getObj().saveData();
		}

		protected closeBtnFunc(){
			SoundManager.PlayClose();
			UIManager.getInstance().HideUI(GameSettingPanel);
		}
	}
}