var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var net;
(function (net) {
    var Event = Laya.Event;
    var Socket = Laya.Socket;
    var Byte = Laya.Byte;
    var NetManagerBase = /** @class */ (function (_super) {
        __extends(NetManagerBase, _super);
        function NetManagerBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.Event = {
                onConnectOpen: "onConnectOpen",
                onConnectClose: "onConnectClose",
                onConnectError: "onConnectError",
            };
            return _this;
        }
        /**
         * 为消息添加消息头 暂时未使用
         * @param msg 消息的json
         */
        NetManagerBase.prototype.addHeader = function (action, byteLength) {
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
            for (var i = 0; i < dataView.byteLength; ++i) {
                this.socket.output.writeByte(dataView.getInt8(i));
            }
        };
        /**
         * 长连接打开的回调
         */
        NetManagerBase.prototype.onSocketOpen = function () {
            if (GameMain.DEBUG)
                console.log(this.desc + " onSocketOpen");
            this.broadcast(this.Event.onConnectOpen);
        };
        /**
         * 长连接关闭的回调
         */
        NetManagerBase.prototype.onSocketClose = function (e) {
            if (GameMain.DEBUG)
                console.log(e);
            if (GameMain.DEBUG)
                console.log(this.desc + " onSocketClose");
            this.broadcast(this.Event.onConnectClose, e);
        };
        /**
         * 连接失败
         * @param e
         */
        NetManagerBase.prototype.onSocketError = function (e) {
            if (GameMain.DEBUG)
                console.log(this.desc + " onConnectError:" + e);
            this.broadcast(this.Event.onConnectError, e);
        };
        //当消息发送过来的回调
        NetManagerBase.prototype.onMessageReveived = function (message) {
            if (typeof message == "string") {
                this.dealTextMessage(message);
            }
            else if (message instanceof ArrayBuffer) {
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
        };
        /** 初始化并连接 */
        NetManagerBase.prototype.initAndConnect = function () {
            this.socket = new Socket();
            if (GameMain.DEBUG)
                console.log(this.url);
            this.socket.connectByUrl(this.url);
            //设置当连接成功的监听
            this.socket.on(Event.OPEN, this, this.onSocketOpen);
            //设置当连接被关闭后的监听
            this.socket.on(Event.CLOSE, this, this.onSocketClose);
            //设置Server发送消息达到的监听
            this.socket.on(Event.MESSAGE, this, this.onMessageReveived);
            //设置连接出错的监听
            this.socket.on(Event.ERROR, this, this.onSocketError);
        };
        /**
         * 描述:构造函数，该对象创建即连接，不需要调用额外的函数
         * @param url 服务器的地址
         * @param desc 此websocket的描述，也可以称之为别名用于处理在多个SOCKET的使用的时候排查问题
         */
        NetManagerBase.prototype.init = function (url, desc) {
            this.url = url;
            this.desc = desc;
            this.initAndConnect();
        };
        /** */
        NetManagerBase.prototype.destroy = function () {
            this.clearSocket();
        };
        /**  */
        NetManagerBase.prototype.isConnected = function () {
            return this.socket.connected;
        };
        /**
         * 清除Socket
         */
        NetManagerBase.prototype.clearSocket = function () {
            if (this.socket) {
                if (GameMain.DEBUG)
                    console.warn("手动断开socket!");
                //删除所有的监听器
                this.socket.offAll();
                //关闭socket
                this.socket.close();
                //清理socket
                this.socket.cleanSocket();
                //置为null
                this.socket = null;
            }
        };
        /**
         * 重连函数:
         * 描述:该方法将会将原有的Socket关闭再次连接
         */
        NetManagerBase.prototype.restart = function () {
            //清除Socket
            this.clearSocket();
            //重新连接
            this.initAndConnect();
        };
        /**
         * 写入消息体
         */
        NetManagerBase.prototype.addContent = function (buffer) {
            for (var i = 0; i < buffer.byteLength; ++i) {
                this.socket.output.writeByte(buffer[i]);
            }
            //发送
            this.socket.flush();
        };
        return NetManagerBase;
    }(ctrl.UICtrl));
    net.NetManagerBase = NetManagerBase;
})(net || (net = {}));
//# sourceMappingURL=NetManagerBase.js.map