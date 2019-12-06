
module ctrl {

	import GameRequest = net.protocol.GameRequest;
	import GameResponse = net.protocol.GameResponse;

	export class RoomLobbyCtrl extends RoomLobbyCtrlBase {

		/** 房间显示消息 */
		public EVENT_SHOWROOMBOX = "EVENT_SHOWROOMBOX";

		/** 游戏房间信息 */
		public lobbyData: net.protocol.lobby.LobbyDataBean = null;

		protected gameWsurl : string;

		protected gameNet : net.GameNetMananger;

		//
		public clearData() {
			this.lobbyData = null;
		}

		public init() { 
			this.gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
			this.conectSever();	//连接游戏服务器
			this.getAllInfo(); //获取玩家数据
			this.addListenerNetMsg();
		}

		/** 链接游戏服务器 */
		protected conectSever(){
			if(!this.gameWsurl){
				if (GameMain.DEBUG) console.log("获取游戏服务器地址");
				var gameWsOb = new net.DefaultNetObserver();
				//
				gameWsOb.onSuccess = (data: httpBean.GameSocketBean) => {
					this.gameWsurl = data.wsUrl + "/" + AppInfoManager.Token + "/" + AppInfoManager.GameId;
					this.gameNet.init(this.gameWsurl,"");
					if (GameMain.DEBUG) console.log("游戏服务器地址:" + this.gameWsurl);
				};
				//消息返回处理
				gameWsOb.onError = (error: number, msg: string) => {
					this.errorCodeFunc(error,msg);
					
				};
				//
				var gameWsAction = new net.GameSocketAction().bindObserver(gameWsOb);
				gameWsAction.excute();
			}else{
				this.gameNet.init(this.gameWsurl,"");
			}
		}

		/**
		 * 清除对象所有的定时器
		 */
		public destroy(): void {
			this.clearData();
		}

		/*************************************** 网络事件 ****************************************/
		protected addListenerNetMsg(){
			//
			this.gameNet.addListener(GameResponse.RoomInfo,this,this.updateRoomBox);
		}

		/**  */
		protected updateRoomBox( data : net.protocol.lobby.LobbyDataBean ){
			this.lobbyData = data;
			this.broadcast(this.EVENT_SHOWROOMBOX);
		}
	}
}