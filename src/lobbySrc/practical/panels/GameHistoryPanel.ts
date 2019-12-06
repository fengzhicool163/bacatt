

module lobby.panel {

	export class GameHistoryPanel extends GameHistoryPanelBase{
		

		public static assets : string[] = asset.AssetConfig.GameHistoryPanel;

		protected sendReq() {
			this.noData.visible = false;
			//请求数据
			var historyOb = new net.DefaultNetObserver();
            historyOb.onSuccess = ( historyData )=>{
				var dataArray = historyData.datas;

				this.noData.visible = (dataArray.length == 0);
				this.updateHistoryView( dataArray );
				
				common.panel.LoadingPanel.Hide();
				this.closeBtn.disabled = false;
            };
            historyOb.onError = ( error:number,msg:string )=>{
				//TODO发生错误了

				//关闭遮罩
				common.panel.LoadingPanel.Hide();
				this.closeBtn.disabled = false;
			};
			//发送消息
            var balanceAction = new net.HistoryAction().bindObserver( historyOb );
            balanceAction.excute();
		}

	}

}