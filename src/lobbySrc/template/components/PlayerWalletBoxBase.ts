
module lobby.component {
	
	/** 玩家钱包Box模板 */
	export abstract class PlayerWalletBoxBase extends common.component.UIBox {
		
		protected bindObj : ui.lobbyUI.Boxs.MainPlayerWalletBoxUI;

		public initComponents(){
			//
			EventManager.addTouchScaleListener(this.bindObj.rechargeBtn,this,this.rechargeBtnFunc);
			//
			this.resetBox();
		}

		public resetBox(){
			this.bindObj.visible = false;
		}

		public clearBox() {
			this.resetBox();
		}

		/**
		 * 设置钱包金钱显示
		 * @param money 
		 * @param isAnim 
		 */
		public setData(money : number ,isAnim = false) {
			this.bindObj.moneyLabel.text = util.StringUtils.FormatMoney(money, 2);
			if(isAnim){
				this.bindObj.showAnim.play(0,false);
			}
			this.bindObj.visible = true;
		}

		/** 充值按钮点击事件 */
		protected rechargeBtnFunc(){
			//
			SoundManager.PlayOpenPanel();
			//跳转充值 
			util.PostTool.jumpToRecharge();
		}
		
	}
}