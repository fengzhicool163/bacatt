

module lobby.panel {

	export class LobbyPanel extends LobbyPanelBase {

		public static readonly assets = asset.AssetConfig.LobbyPanel;

		protected lobbyRoomBox : component.LobbyRoomBox;

		protected initComponents() {
			super.initComponents();
			//房间盒子
			this.lobbyRoomBox = this.bindScript(component.LobbyRoomBox,this.lobbyRoomBoxObj)
		}

		public resize(){
			super.resize();
			var wh = 16 / 9 + 0.01;
			if (Laya.stage.width / Laya.stage.height > wh) { //宽屏
				this.supermodel.left = 118;
			} else {
				this.supermodel.left = 16;
			}
		}

		/** 根据数据初始化显示 设置房间信息 */
		protected checkData() {
			//
			var rooms = this.ctrl.lobbyData;
			//
			if (!super.checkData() || !rooms ) return false;
			//
			return true;
		}

		public resetLobby(){
			super.resetLobby();
			this.logo.visible = false;
			this.lobbyRoomBox.Hide();
		}

		public updateView(){
			//
			if( !this.checkData()) {
				return false;
			}
			//
			if(!this.isUpdate){
				super.updateView();
				this.startAnim.play(0,false);
				this.lobbyRoomBox.Show();
			}else{
				this.lobbyRoomBox.UpdateData();
			}
			//
			return true;
		}

		protected loopReqRoomData(){
			net.protocol.GameRequest.reqLobbyRoomData();
		}

		public Show() {
			this.ctrl.addListener(this.ctrl.EVENT_SHOWROOMBOX,this,this.updateView);
			Laya.timer.loop(20000,this,this.loopReqRoomData);
			super.Show();
		}

		public Hide() {
			this.ctrl.removeListener(this.ctrl.EVENT_SHOWROOMBOX,this,this.updateView);
			Laya.timer.clear(this,this.loopReqRoomData);
			super.Hide();
		}

		/************************************************** 点击事件 *******************************************/
		protected exitBtnFunc() {
			super.exitBtnFunc();
			this.ctrl.gotoLobby();
		}

	}
}