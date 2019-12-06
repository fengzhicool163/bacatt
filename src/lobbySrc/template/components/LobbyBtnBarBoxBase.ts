
module lobby.component {
	
	/** 大厅底部按钮条模板 */
	export abstract class LobbyBtnBarBoxBase extends common.component.UIBox {
		
		protected bindObj : ui.lobbyUI.Boxs.LobbyBtnBarBoxUI;

		public initComponents(){
			//历史记录
			EventManager.addTouchScaleListener(this.bindObj.historyBtn, this, this.historyBtnFunc);
			//规则
			EventManager.addTouchScaleListener(this.bindObj.ruleBtn, this, this.ruleBtnFunc);
			//设置
			EventManager.addTouchScaleListener(this.bindObj.settingBtn, this, this.settingBtnFunc);
			//
			this.resetBox();
		}

		public resetBox(){
			this.bindObj.visible = false;
		}

		public clearBox() {
			this.resetBox();
		}

        public setData(isAnim : boolean = true){
			if(isAnim){
				this.bindObj.showAnim.play(0,false);
			}else{
				this.bindObj.showAnim.play(15,false);
			}
			this.bindObj.visible = true;
		}

		protected historyBtnFunc() {
			SoundManager.PlayClick();
			UIManager.getInstance().ShowPopUI( panel.GameHistoryPanel, panel.GameHistoryPanel.assets);
		}

		protected ruleBtnFunc() {
			SoundManager.PlayClick();
			UIManager.getInstance().ShowPopUI( panel.GameRulePanel, panel.GameRulePanel.assets);
		}

		protected settingBtnFunc() {
			SoundManager.PlayClick();
			UIManager.getInstance().ShowPopUI( panel.GameSettingPanel, panel.GameSettingPanel.assets);
		}
		
	}
}