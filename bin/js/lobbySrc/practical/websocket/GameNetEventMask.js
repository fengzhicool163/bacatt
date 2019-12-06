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
    var GameResponse = net.protocol.GameResponse;
    /** 服务器消息延时状态与成对消息检测层 */
    var GameNetEventMask = /** @class */ (function (_super) {
        __extends(GameNetEventMask, _super);
        function GameNetEventMask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /*************************************** 内部打印 *****************************************/
        /** 打印游戏服务器消息延时 */
        GameNetEventMask.prototype.printGameSeverDelay = function (data) {
            if (!GameMain.DEBUG)
                return;
            //计算消息延时
            var codes = null;
            var severCode = data.code;
            if (severCode == 6000) {
                codes = [];
                severCode = data.clientCode;
                codes.push(severCode);
            }
            else {
                codes = net.GameNetMananger.resCodeAndreqCodeMap[severCode];
            }
            if (!codes)
                return;
            var log = GameResponse.severCodeToStr(severCode);
            for (var index = 0; index < codes.length; index++) {
                var code = codes[index];
                var reqTime = this.codeAndSeverMap[code];
                if (reqTime) {
                    var overTime = Date.now() - reqTime;
                    if (GameMain.DEBUG)
                        console.error("[Res_Sever][" + log + "][GetBackMsg!!!!!!! Use:" + overTime + "ms ]");
                }
            }
        };
        /** 打印收到的服务器消息 */
        GameNetEventMask.prototype.printSeverMsg = function (data, message) {
            //心跳不打印
            if (data.code == 1)
                return;
            //打印收到消息
            var log = GameResponse.severCodeToStr(data.code);
            log = !log ? data.code : log;
            var curTime = this.getCurTime();
            if (GameMain.Release) {
                if (GameMain.DEBUG)
                    console.warn("[BC_Sever][" + curTime + "][" + log + "]", data);
            }
            else {
                if (GameMain.DEBUG)
                    console.log("[BC_Sever][" + curTime + "][" + log + "]", data);
            }
        };
        /************************************** 网络监测 *****************************************/
        /**
         * 更新流水号Mask
         */
        GameNetEventMask.prototype.updateMaskShow = function (data) {
            if (data) {
                //服务器成对消息检测
                if (data.code == 6000) {
                    var code = data.clientCode;
                    delete this.codeAndSeverMap[code];
                }
                else {
                    var codes = net.GameNetMananger.resCodeAndreqCodeMap[data.code];
                    if (codes) {
                        for (var index = 0; index < codes.length; index++) {
                            var code = codes[index];
                            delete this.codeAndSeverMap[code];
                        }
                    }
                }
            }
            //检测等待动画是否开启
            for (var key in this.codeAndSeverMap) {
                //showMask
                this.broadcast(GameNetEventMask.WAITANIMUPDATE, true);
                return;
            }
            this.broadcast(GameNetEventMask.WAITANIMUPDATE, false);
        };
        /**
         * 描述:构造函数，该对象创建即连接，不需要调用额外的函数
         * @param url 服务器的地址
         * @param desc 此websocket的描述，也可以称之为别名用于处理在多个SOCKET的使用的时候排查问题
         */
        GameNetEventMask.prototype.init = function (url, desc) {
            this.codeAndSeverMap = {};
            _super.prototype.init.call(this, url, desc);
        };
        /******************************************************* 网络收发消息 *****************************************************/
        /** 消息处理 */
        GameNetEventMask.prototype.dealTextMessage = function (message) {
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
        };
        /** 记录成对消息发送 */
        GameNetEventMask.prototype.addCodeAndSeverFlag = function (code) {
            this.codeAndSeverMap[code] = Date.now();
        };
        /** 等待服务器消息动画 */
        GameNetEventMask.WAITANIMUPDATE = "WAITANIMUPDATE";
        /** res 与 req 映射 */
        GameNetEventMask.resCodeAndreqCodeMap = {
            5000: [1001],
            5001: [1002],
            5002: [1003],
            5003: [1004],
            5004: [1005],
            5005: [1006, 1009],
            5009: [1008],
            5016: [1011],
        };
        return GameNetEventMask;
    }(net.NetManagerBase));
    net.GameNetEventMask = GameNetEventMask;
})(net || (net = {}));
//# sourceMappingURL=GameNetEventMask.js.map