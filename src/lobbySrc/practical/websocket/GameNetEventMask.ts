/**
* name 
*/
module net {

	import GameResponse = net.protocol.GameResponse;
	import GameRequest = net.protocol.GameRequest;

	/** 服务器消息延时状态与成对消息检测层 */
	export abstract class GameNetEventMask extends NetManagerBase {

		/** 等待服务器消息动画 */
		public static readonly WAITANIMUPDATE = "WAITANIMUPDATE";

		/** res 与 req 映射 */
		private static readonly resCodeAndreqCodeMap = {
			5000: [1001], //"玩家请求准备"
			5001: [1002], //"玩家请求换桌",
			5002: [1003], // "玩家请求跟注",
			5003: [1004], // "玩家请求看牌",
			5004: [1005], // "玩家请求弃牌",
			5005: [1006, 1009], // "玩家请求比牌","玩家请求孤注一掷",
			5009: [1008], // "玩家请求离开",
			5016: [1011], // "玩家请求超时托管",
		}

		/** 消息服务器映射 */
		private codeAndSeverMap: { [key: number]: number };

		/*************************************** 内部打印 *****************************************/
		/** 打印游戏服务器消息延时 */
		private printGameSeverDelay(data: any) {
			if(!GameMain.DEBUG) return;
			//计算消息延时
			var codes = null;
			var severCode = data.code;
			if (severCode == 6000) {
				codes = [];
				severCode = data.clientCode;
				codes.push(severCode);
			} else {
				codes = GameNetMananger.resCodeAndreqCodeMap[severCode];
			}
			if (!codes) return;
			var log = GameResponse.severCodeToStr(severCode);
			for (let index = 0; index < codes.length; index++) {
				const code = codes[index];
				var reqTime = this.codeAndSeverMap[code];
				if (reqTime) {
					var overTime = Date.now() - reqTime;
					if(GameMain.DEBUG) console.error("[Res_Sever][" + log + "][GetBackMsg!!!!!!! Use:" + overTime + "ms ]");
				}
			}
		}

		/** 打印收到的服务器消息 */
		private printSeverMsg(data: any, message: string) {
			//心跳不打印
			if(data.code == 1) return;
			//打印收到消息
			var log = GameResponse.severCodeToStr(data.code);
			log = !log ? data.code : log;
			var curTime = this.getCurTime();
			if (GameMain.Release) {
				if(GameMain.DEBUG) console.warn("[BC_Sever][" + curTime + "][" + log + "]",data);
			} else {
				if(GameMain.DEBUG) console.log("[BC_Sever][" + curTime + "][" + log + "]",data);
			}
		}

		/************************************** 网络监测 *****************************************/
		/**
		 * 更新流水号Mask
		 */
		private updateMaskShow(data?: any) {
			if(data){
				//服务器成对消息检测
				if (data.code == 6000) {
					const code = data.clientCode;
					delete this.codeAndSeverMap[code];
				} else {
					var codes = GameNetMananger.resCodeAndreqCodeMap[data.code];
					if (codes) {
						for (let index = 0; index < codes.length; index++) {
							const code = codes[index];
							delete this.codeAndSeverMap[code];
						}
					}
				}
			}
			//检测等待动画是否开启
			for (const key in this.codeAndSeverMap) {
				//showMask
				this.broadcast(GameNetEventMask.WAITANIMUPDATE,true);
				return;
			}
			this.broadcast(GameNetEventMask.WAITANIMUPDATE,false);
		}

		/**
		 * 描述:构造函数，该对象创建即连接，不需要调用额外的函数
		 * @param url 服务器的地址
		 * @param desc 此websocket的描述，也可以称之为别名用于处理在多个SOCKET的使用的时候排查问题
		 */
		public init(url: string, desc: string) {
			this.codeAndSeverMap = {};
			super.init(url, desc);
		}

		/******************************************************* 网络收发消息 *****************************************************/

		/** 消息处理 */
		protected dealTextMessage(message: string) {
			//TODO过滤一些有问题的东西,比如数据返回不是json，那么处理方式看怎么处理，服务器必须保证返回数据的合法性，如果不合法则需要处理
			//try {
				//
				var data = JSON.parse(message);

				//打印收到的服务器消息
				this.printSeverMsg(data, message);

				//收到服务器消息检测成对消息
				if (data.userId && data.userId == UserInfoManger.UserId) {
					//打印延时
					this.printGameSeverDelay(data);
					//检测成对消息动画显示
					this.updateMaskShow(data);
				}
				return data;
				
			// } catch (e) {
			// 	if (GameMain.DEBUG) console.warn("deal text error:" + e);
			// 	return null;
			// }
		}

		/** 记录成对消息发送 */
		protected addCodeAndSeverFlag( code : number){
			this.codeAndSeverMap[code] = Date.now();
		}



	}
}