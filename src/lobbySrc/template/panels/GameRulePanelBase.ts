
module lobby.panel {

	export abstract class GameRulePanelBase extends ui.lobbyUI.Panels.GameRulePanelUI {

		protected contentList: Laya.Sprite[];
		protected checkGroup : common.component.CheckGroupBox;

		protected initComponents() {
			//
			this.contentList = [];
			for (let index = 1; index <= 4; index++) {
				const content = this["content" + index];
				this.contentList.push(content);
			}
			//
			this.checkGroup = this.bindScript(common.component.CheckGroupBox,this.checkGroupObj);
			//关闭按钮
			EventManager.addTouchScaleListener(this.closeBtn, this, this.closeBtnFunc);
		}


		protected initView(){
			this.checkGroup.selectIndex = 0;
			this.selectContent( 0 );
			this.checkGroup.setToggleChangeFunc(this, this.menuChangeFunc);
		}

		protected selectContent( selectIndex : number ){
			for (let index = 0; index < this.contentList.length; index++) {
				const content = this.contentList[index];
				content.visible = (index == selectIndex);
			}
		}

		protected menuChangeFunc() {
			SoundManager.PlayClick();
			var selectIndex = this.checkGroup.selectIndex;
			this.selectContent( selectIndex );
		}

		protected closeBtnFunc() {
			SoundManager.PlayClose();
			UIManager.getInstance().HideUI(GameRulePanel);
		}

		public Show(){
			this.initView();
			super.Show();
			this.openAnim( this.bgFrame );
		}

		public Hide(){
			this.checkGroup.setToggleChangeFunc(null, null);
			super.Hide();
		}
	}
}