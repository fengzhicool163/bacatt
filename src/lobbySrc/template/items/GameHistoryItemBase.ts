

module items {
	export abstract class GameHistoryItemBase extends ui.lobbyUI.Items.GameHistoryItemUI {

		protected itemData : any;

		constructor(){
			super();
			EventManager.addTouchScaleListener(this.numberLabel,this,this.copyOrderNo);
		}

		public destroy(){
			super.destroy(true);
		}

		public removeSelf(){
			this.itemData = null;
			return super.removeSelf();
		}

		public setData( itemData: any ){
			this.itemData = itemData;
			this.indexLabel.changeText("" + itemData.index);
			this.numberLabel.changeText("" + itemData.orderNo);
			var amount = util.StringUtils.FormatMoney(itemData.amount,2);
			this.beniftLabel.changeText(amount);
			if (itemData.amount < 0)
				this.beniftLabel.color = "#df4218";
			else
				this.beniftLabel.color = "#9ed018";

			this.roomLabel.changeText("" + itemData.roomName);
			this.endTimeLabel.changeText("" + itemData.endTime);
		}

		/**
		 *  {action:"game_common", do: "copylink", type: "friend",
 			param: "需要复制到剪贴板的内容",hint:"复制完成后提醒文字"}
		 */
		protected copyOrderNo(){
			if(!this.itemData) return;
			var msg = JSON.stringify({action:"game_common", do: "copylink", type: "friend",
			param: this.itemData.orderNo , hint:"牌局编号已复制到您的剪切板"});
			window.top.postMessage(msg, "*");
			if(GameMain.DEBUG) console.log("尝试复制牌局号 msg = " + msg);
		}
	}
}