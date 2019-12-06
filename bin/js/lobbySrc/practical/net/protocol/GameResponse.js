/**
* name
*/
var net;
(function (net) {
    var protocol;
    (function (protocol) {
        var GameResponse = /** @class */ (function () {
            function GameResponse() {
            }
            GameResponse.severCodeToStr = function (code) {
                var str = this.severCodeMap[code];
                return str;
            };
            //将4999的错误code转换为字符串
            GameResponse.codeToMessage = function (code) {
                var content = this.codeToMessageMap[code];
                return content;
            };
            /**心跳 0*/
            GameResponse.PINGPONG = "0"; //
            /**大厅房间数据 5021*/
            GameResponse.RoomInfo = "5021"; //
            /** 牌桌快照 4000*/
            GameResponse.SNAPSHOT = "4000"; //
            GameResponse.severCodeMap = {
                5021: "收到房间桌台信息更新",
                4000: "房间快照/进入房间",
                5109: "onQuitRoom离开房间{code:5109,content:xxxxx,userId:xxxxx}",
                4111: "onAlertInfo提示信息",
                5200: "onRoadmap路图信息",
                7203: "onReady开局",
                7204: "onSendPoker开始发牌",
                7205: "onStartBet开始投注",
                7206: "onStopBet开牌中/停止下注",
                7207: "onShowPoker亮牌",
                7208: "onXiazhu所有人的投注信息",
                1102: "requestJiesuan请求结算",
                7210: "onJiesuan结算",
                7022: "onGetinTable收到进入桌台",
                1000: "requestOnline玩家上线",
                1100: "requestTouzhu投注",
                1103: "requestOtherUser获取桌面玩家",
                1105: "requestPlayerslist获取玩家列表",
                7211: "onPlayerslist拿到玩家列表"
            };
            /************************************** 错误码 *******************************************/
            GameResponse.codeToMessageMap = {
                //child code
                4000: "您的余额不足，请前往游戏大厅充值",
                4001: "服务器开小差了，请重新进入~",
                4002: "服务器开小差了，请重新进入~",
                4003: "长久未操作，自动退出房间",
                4004: "匹配不成功，请重新匹配",
                4005: "请重新进入~",
                4006: "您已离开房间",
                4007: "匹配不成功，请重新匹配",
                4008: "长久未操作，自动退出房间",
                4009: "您已经登录，请勿重复操作",
                4010: "用户不存在，请重新尝试",
                4011: "匹配不成功，请重新匹配",
                4012: "匹配不成功，请重新匹配",
            };
            return GameResponse;
        }());
        protocol.GameResponse = GameResponse;
    })(protocol = net.protocol || (net.protocol = {}));
})(net || (net = {}));
//# sourceMappingURL=GameResponse.js.map