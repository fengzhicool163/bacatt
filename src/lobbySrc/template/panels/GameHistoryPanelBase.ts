

module lobby.panel {

	export abstract class GameHistoryPanelBase extends ui.lobbyUI.Panels.GameHistoryPanelUI{

		protected itemPool : util.PoolUtil<items.GameHistoryItem>;
		protected itemList : Array<items.GameHistoryItem>;

		protected initComponents() {
			//关闭按钮
			EventManager.addTouchScaleListener(this.closeBtn,this,this.closeBtnFunc);
			//
			this.itemPool = new util.PoolUtil(items.GameHistoryItem,10,10);
			this.itemList = [];
		}

		public Show(){
			super.Show();
			//请求数据
			this.reqHistoryData();
			//
			this.openAnim( this.bgFrame );
		}

		public Hide(){
			//清空界面
			for (let index = 0; index < this.itemList.length; index++) {
				const item = this.itemList[index];
				this.itemPool.recover(item);
			}
			this.itemList.length = 0;
			//设置节点缓存
			this.container.reCache();
			super.Hide();
		}

		public destroy(){
			this.itemPool.destroy();
			super.destroy();
		}

		protected reqHistoryData():void{
			//关闭按钮点击
			this.closeBtn.disabled = true;
			//延时打开遮罩
			common.panel.LoadingPanel.Show();
			//
			this.sendReq();
		}

		protected abstract sendReq();

		protected updateHistoryView( datas:Array<any> ):void{
			//如果界面已经销毁了
			if(this.destroyed) return;
			//设置item显示
			for( var i = 0 ; i < datas.length ; i++ ){
				var itemData = datas[i];
				itemData.index = i + 1;
				//
				var item = this.itemPool.getItem();
				item.setData( itemData );
				item.pos( 0  , i * 50 );
				item.visible = true;
				//
				this.container.addChild( item );
				this.itemList.push( item );
			}
			//重置节点大小
			this.container.size( 678  , datas.length * 50 - 10 );
			this.container.event( "resize" );
			//设置节点缓存
			this.container.reCache();
		}

		/******************************************************* 按钮点击事件 *********************************************/
		protected closeBtnFunc(){
			SoundManager.PlayClose();
			UIManager.getInstance().HideUI(GameHistoryPanel);
		}

	}

}