/**
* name 
*/
module net {

	import Event = Laya.Event;
	import Socket = Laya.Socket;
	import Byte = Laya.Byte;

	export abstract class NetManagerBase extends ctrl.UICtrl {

		public Event = {
			onConnectOpen: "onConnectOpen",
			onConnectClose: "onConnectClose",
			onConnectError: "onConnectError",
		}

		/** Socket 地址 */
		protected url: string;
		/**这个socket的描述 */
		protected desc: string;
		/**Socket对象 */
		protected socket: Socket;

		/**
		 * 为消息添加消息头 暂时未使用
		 * @param msg 消息的json
		 */
		private addHeader(action: number, byteLength: number): void {

			//长度设置前面8位+消息的长度
			var buffer = new ArrayBuffer(8);
			var dataView = new DataView(buffer);

			//固定值
			dataView.setInt16(0, 0x71ab);

			//后面数据的长度
			dataView.setInt16(2, byteLength);

			//此消息的命令类型
			dataView.setInt32(4, action);

			//写入消息头
			for (var i: number = 0; i < dataView.byteLength; ++i) {
				this.socket.output.writeByte(dataView.getInt8(i));
			}

		}

		/**
		 * 长连接打开的回调
		 */
		protected onSocketOpen() {
			if (GameMain.DEBUG) console.log(this.desc + " onSocketOpen");

			this.broadcast(this.Event.onConnectOpen);
		}


		/**
		 * 长连接关闭的回调
		 */
		protected onSocketClose(e: any) {
			if (GameMain.DEBUG) console.log(e);
			if (GameMain.DEBUG) console.log(this.desc + " onSocketClose");

			this.broadcast(this.Event.onConnectClose, e);
		}

		/**
		 * 连接失败
		 * @param e 
		 */
		protected onSocketError(e: Event) {

			if (GameMain.DEBUG) console.log(this.desc + " onConnectError:" + e);

			this.broadcast(this.Event.onConnectError, e);
		}

		//当消息发送过来的回调
		protected onMessageReveived(message: any): void {
			if (typeof message == "string") {
				this.dealTextMessage(message);
			} else if (message instanceof ArrayBuffer) {

				//应该是以前有包头的逻辑
				// var dataView : DataView = new DataView( message );
				// console.log("头信息固定值0x71ab:" + dataView.getInt16(0));
				// console.log("数据长度:" + dataView.getInt16(2));
				// var code : number = dataView.getInt32( 4 );
				//	bytes.readUTFBytes(8);

				//现在逻辑无包头
				var bytes = new Byte(message);
				var json = bytes.readUTFBytes();
				this.dealTextMessage(json);
			}
		}

		/** 消息具体处理方法 */
		protected abstract dealTextMessage(message: string) : any;


		/** 初始化并连接 */
		protected initAndConnect(): void {

			this.socket = new Socket();

			if (GameMain.DEBUG) console.log(this.url);
			this.socket.connectByUrl(this.url);

			//设置当连接成功的监听
			this.socket.on(Event.OPEN, this, this.onSocketOpen);

			//设置当连接被关闭后的监听
			this.socket.on(Event.CLOSE, this, this.onSocketClose);

			//设置Server发送消息达到的监听
			this.socket.on(Event.MESSAGE, this, this.onMessageReveived);

			//设置连接出错的监听
			this.socket.on(Event.ERROR, this, this.onSocketError);
		}

		/**
		 * 描述:构造函数，该对象创建即连接，不需要调用额外的函数
		 * @param url 服务器的地址
		 * @param desc 此websocket的描述，也可以称之为别名用于处理在多个SOCKET的使用的时候排查问题
		 */
		public init(url: string, desc: string) {
			this.url = url;
			this.desc = desc;
			this.initAndConnect();
		}

		/** */
		public destroy() {
			this.clearSocket();
		}

		/**  */
		public isConnected(): boolean {
			return this.socket.connected;
		}

		/**
		 * 清除Socket
		 */
		public clearSocket(): void {
			if (this.socket) {
				if(GameMain.DEBUG) console.warn("手动断开socket!");
				//删除所有的监听器
				this.socket.offAll();
				//关闭socket
				this.socket.close();
				//清理socket
				this.socket.cleanSocket();
				//置为null
				this.socket = null;
			}
		}

		/**
		 * 重连函数:
		 * 描述:该方法将会将原有的Socket关闭再次连接
		 */
		public restart(): void {
			//清除Socket
			this.clearSocket();
			//重新连接
			this.initAndConnect();
		}

		/**
		 * 写入消息体
		 */
		protected addContent(buffer: ArrayBuffer): void {
			for( var i:number = 0; i < buffer.byteLength ; ++i ){
				this.socket.output.writeByte( buffer[i] );
			}
			//发送
			this.socket.flush();
		}

		/**
		 * 发送消息
		 * @param msg 消息 
		 */
		public abstract sendMessage(code: number, msg: ArrayBuffer);
	}

}