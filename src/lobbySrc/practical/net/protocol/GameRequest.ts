/**
* name 
*/
module net.protocol{

	export class GameRequest{

		private static clientCodeMap = {

			0:"心跳",

			1010:"requestRoomList房间列表 请求房间桌台信息",

			1111:"requestJoinRoom玩家加入桌台{code:1111,gameId:31,roomId:205,tableId:305}",
			4000:"onRoomAllInfo房间快照/进入房间",

			1101:"requestQuitRoom请求离开房间{code:1101,userId:1233455}",
			
			5109:"onQuitRoom离开房间{code:5109,content:xxxxx,userId:xxxxx}",
			4111:"onAlertInfo提示信息",

			5200:"onRoadmap路图信息",

			7203:"onReady开局",
			7204:"onSendPoker开始发牌",
			7205:"onStartBet开始投注",
			7206:"onStopBet开牌中/停止下注",
			7207:"onShowPoker亮牌",
			
			7208:"onXiazhu所有人的投注信息",

			1102:"requestJiesuan请求结算",
			7210:"onJiesuan结算",
			
			7022:"onGetinTable收到进入桌台",
			1000:"requestOnline玩家上线",
			1100:"requestTouzhu投注",
			
			1103:"requestOtherUser获取桌面玩家",
			1105:"requestPlayerslist获取玩家列表",
			7211:"onPlayerslist拿到玩家列表"
		}

		public static clientCodeToStr( code : number ) : string {
			var str = this.clientCodeMap[code];
			str = str || "empty";
			return str;
		}

		/**
		 * @param msg 发送消息
		 */
		private static sendMsg( data : any ){
			//统一添加userId
			var userId = UserInfoManger.UserId;
			data.userId = userId;
			//发送消息
			var gameNet = UICtrlManager.getInstance().GetCtrl(GameNetMananger);
			gameNet.sendMessage( data );
		}

		/** 服务器延时心跳 */
		public static reqPingPong(){
			var reqData : any = {
				code:0
			};
			this.sendMsg(reqData);
		}

		/** 请求房间大厅数据 */
		public static reqLobbyRoomData(){
			var reqData : any = {
				code:1010
			};
			this.sendMsg(reqData);
		}


		/** 玩家准备 */
		public static reqReadyGame(){
			var reqData : any = {
				code:1001
			};
			this.sendMsg(reqData);
		}

		/**
		 * 更换桌子
		 */
		public static reqChangeTable():any{
			var reqData : any = {
				code:1002
			};
			this.sendMsg(reqData);
		}

		/**
		 * 下注
		 * @param betValue 下注值
		 * @param baseBet 底注
		 */
		public static reqBet( betValue:number , baseBet:number ):any{
			var reqData : any = {
				code:1003,
				v:betValue,
				baseBet:baseBet
			};
			this.sendMsg(reqData);
		}

		/**
		 * 看牌
		 */
		public static reqLookCard():any{
			var reqData : any = {
				code:1004
			};
			this.sendMsg(reqData);
		}

		/**
		 * 弃牌
		 */
		public static reqAbandon():any{
			var reqData : any = {
				code:1005
			};
			this.sendMsg(reqData);
		}

		/**
		 * 比牌
		 * @param uid 对手uid
		 */
		public static reqCompare( uid:string ):any{
			var reqData : any = {
				code:1006,
				i:uid
			};
			this.sendMsg(reqData);
		}

		/**
		 * 离开(区别换桌)
		 */
		public static reqExitGame():any{
			var reqData : any = {
				code:1008
			};
			this.sendMsg(reqData);
		}

		/**
		 * 孤注一掷
		 */
		public static reqLastFight():any{
			var reqData : any = {
				code:1009
			};
			this.sendMsg(reqData);
		}

		/**
		 * 超时托管
		 * @param overHost 
		 */
		public static reqOverHost(overHost : boolean){
			var reqData : any = {
				code:1011,
				overHost: overHost,
			};
			this.sendMsg(reqData);
		}

		

		



	}

}