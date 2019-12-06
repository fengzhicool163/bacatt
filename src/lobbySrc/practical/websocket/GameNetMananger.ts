/**
* name 
*/
module net {

	import GameResponse = net.protocol.GameResponse;
	import GameRequest = net.protocol.GameRequest;

	/** 服务器消息顺序排序与分发层 */
	export class GameNetMananger extends GameNetEventMask {

		/** 服务器消息缓存队列 */
		protected severEventCacheQueue = [];
		/** 切换牌桌中 */
		public isChangeTable = false;

		/**
		 * 长连接打开的回调
		 */
		protected onSocketOpen() {
			//
			super.onSocketOpen();
			/** 获取大厅房间信息 */
			GameRequest.reqLobbyRoomData();
		}

		/**
		 * 长连接关闭的回调
		 */
		protected onSocketClose(e: any) {
			//
			super.onSocketClose(e);
			//

		}

		/**
		 * 连接失败
		 * @param e 
		 */
		protected onSocketError(e: Laya.Event) {
			//
			super.onSocketError(e);
			//
		}

		/**
		 * 描述:构造函数，该对象创建即连接，不需要调用额外的函数
		 * @param url 服务器的地址
		 * @param desc 此websocket的描述，也可以称之为别名用于处理在多个SOCKET的使用的时候排查问题
		 */
		public init(url: string, desc: string) {
			super.init(url, desc);
		}

		public clearSocket() {
			//
			this.severEventCacheQueue.length = 0;
			//
			this.isChangeTable = false;
			//告知网关断开socket
			if (this.socket && this.socket.connect) {
				if (GameMain.DEBUG) console.warn("send close!!!");
				var msgBytes = util.StringUtils.jsonObjectToArrayBuffer("close");
				this.addContent(msgBytes);
			}
			//
			super.clearSocket();
		}


		public broadcast(eventName: string, ...args) {
			if (GameMain.DEBUG && !GameMain.Release) {
				var eventID = parseInt(eventName);
				var eventNameStr = net.protocol.GameResponse.severCodeToStr(eventID);
				eventNameStr = !eventNameStr ? eventName : eventNameStr;
				var curTime = this.getCurTime();
				console.warn("[Event_Client][" + curTime + "][" + eventNameStr + "]", ...args);
			}
			super.broadcast(eventName, ...args);
		}

		/******************************************************* 服务器时间同步 *************************************************/
		/** 服务器与本地时间差值 */
		private severTimeOffect: number = 0;
		/** 同步服务器时间 */
		protected synchronizeSevetTime(data: net.protocol.PingPongBean) {
			if (data.serviceTimeStamp) {
				var localTime = Date.now();
				var severTime = data.serviceTimeStamp;
				this.severTimeOffect = localTime - severTime;
			} else {
				this.severTimeOffect = 0;
				if (GameMain.DEBUG) console.error("心跳同步服务器时间失败！");
			}
		}
		/** 获取服务器时间 */
		public getCurSeverTime() {
			var localTime = Date.now();
			var severTime = localTime - this.severTimeOffect;
			return severTime;
		}

		/******************************************************* 网络收发消息 *****************************************************/
		/** 消息处理 */
		protected dealTextMessage(message: string) {
			try {
				var data = super.dealTextMessage(message);
				if (!data) return null;

				if (data.code == 1) {
					//收到心跳消息同步服务器时间
					this.synchronizeSevetTime(data);
				}

				/*************************************** 消息排序 ********************************************/
				var code = data.code.toString();

				if (code == GameResponse.SNAPSHOT) {
					this.isChangeTable = false;
				}

				if (this.isChangeTable) {
					return null;
				}

				this.broadcast(code, data);

			} catch (e) {
				if (GameMain.DEBUG) console.warn("deal text error:" + e);
				return null;
			}
		}

		/**
		 * 发送消息
		 * @param msg 消息 
		 */
		public sendMessage(msgObj: any) {
			/** 未连接 不处理  */
			if (!this.socket || !this.socket.connected) return;

			//转换成Buffer
			var msgBytes = util.StringUtils.jsonObjectToArrayBuffer(msgObj)
			//发送消息到服务器
			this.addContent(msgBytes);
			//心跳不记录
			if (msgObj.code != 1) {
				this.addCodeAndSeverFlag(msgObj.code);
				//打印发送消息
				if (GameMain.DEBUG) {
					//记录网关流水号发送时间
					var str = GameRequest.clientCodeToStr(msgObj.code);
					if (GameMain.DEBUG) {
						console.error("[REQ_Sever][" + str + "]", msgObj)
					}
				};
			}
		}
	}
}