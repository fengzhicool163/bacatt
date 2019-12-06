/**
* name 
*/
module net.protocol{

	export class GameResponse{
		
		/**心跳 0*/
		public static PINGPONG:string = "0"; //

		/**大厅房间数据 5021*/
		public static RoomInfo:string = "5021"; //

		/** 牌桌快照 4000*/
		public static SNAPSHOT:string = "4000"; //

		private static severCodeMap = {

			5021:"收到房间桌台信息更新",
			
			4000:"房间快照/进入房间",
			
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

		public static severCodeToStr( code : number ) : string {
			var str = this.severCodeMap[code];
			return str;
		}


		/************************************** 错误码 *******************************************/

		private static codeToMessageMap = {
			//child code
			4000 : "您的余额不足，请前往游戏大厅充值",  //余额不足
			4001 : "服务器开小差了，请重新进入~", //参数错误
			4002 : "服务器开小差了，请重新进入~",//服务错误
			4003 : "长久未操作，自动退出房间",//超时未操作
			4004 : "匹配不成功，请重新匹配",//匹配错误
			4005 : "请重新进入~",	//token错误
			4006 : "您已离开房间",	//用户离开
			4007 : "匹配不成功，请重新匹配",//用户换台失败
			4008 : "长久未操作，自动退出房间",	//游戏踢出
			4009 : "您已经登录，请勿重复操作",//用户已登录
			4010 : "用户不存在，请重新尝试",//用户不存在
			4011 : "匹配不成功，请重新匹配",//用户状态错误
			4012 : "匹配不成功，请重新匹配",//用户状态错误
		}
	
		//将4999的错误code转换为字符串
		public static codeToMessage( code:number ):string{
			var content:string = this.codeToMessageMap[code];
			return content;
		}
		
	}
}