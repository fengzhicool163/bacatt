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
var common;
(function (common) {
    var component;
    (function (component) {
        var MarqueeBox = /** @class */ (function (_super) {
            __extends(MarqueeBox, _super);
            function MarqueeBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.msgList = [];
                return _this;
            }
            MarqueeBox.prototype.initComponents = function () {
                //
                this.bindObj.noticeSp.scrollRect = new Laya.Rectangle(0, 0, this.bindObj.noticeSp.width, this.bindObj.noticeSp.height);
                //
                this.bindObj.msgTxt.text = "";
                this.bindObj.msgTxt.reCache();
                this.bindObj.msgTxt.x = this.bindObj.noticeSp.width;
                //
                this.showOneMsgItemHandler = Laya.Handler.create(this, this.showOneMsgItem, null, false);
            };
            //添加全部消息
            MarqueeBox.prototype.addMsgItems = function (list) {
                var _this = this;
                list.forEach(function (value) {
                    if (value.notice)
                        _this.msgList.push(value.notice);
                });
            };
            /** 显示一条信息 */
            MarqueeBox.prototype.showOneMsgItem = function () {
                if (this.msgTween) {
                    Laya.Tween.clear(this.msgTween);
                    this.msgTween = null;
                }
                if (this.msgList.length > 0) {
                    this.bindObj.msgTxt.text = this.msgList.shift();
                    this.bindObj.msgTxt.reCache();
                    this.bindObj.msgTxt.x = this.bindObj.noticeSp.width;
                    var targetX = -this.bindObj.msgTxt.textField.textWidth;
                    var moveTime = -targetX / 50 * 1000;
                    this.msgTween = Laya.Tween.to(this.bindObj.msgTxt, { x: targetX }, moveTime, Laya.Ease.linearNone, this.showOneMsgItemHandler);
                }
                else {
                    this.requestRollInfo();
                }
            };
            /** 10秒后请求一次跑马灯数据 */
            MarqueeBox.prototype.startRequestTimer = function (time) {
                if (time === void 0) { time = 10000; }
                this.bindObj.timer.once(time, this, this.requestRollInfo);
            };
            MarqueeBox.prototype.stopRequestTimer = function () {
                this.bindObj.timer.clear(this, this.requestRollInfo);
            };
            /** 请求跑马灯数据 */
            MarqueeBox.prototype.requestRollInfo = function () {
                var _this = this;
                var noticeOb = new net.DefaultNetObserver();
                noticeOb.onSuccess = function (noticeInfo) {
                    if (noticeInfo.datas && noticeInfo.datas.length > 0) {
                        _this.addMsgItems(noticeInfo.datas);
                        if (!_this.msgTween) { //没有缓动开始走消息
                            _this.showOneMsgItem();
                        }
                        _this.stopRequestTimer();
                    }
                    else {
                        _this.startRequestTimer();
                    }
                };
                noticeOb.onError = function (error, msg) {
                    _this.startRequestTimer(3000);
                };
                var noticeAction = new net.NoticeAction().bindObserver(noticeOb);
                noticeAction.excute();
            };
            MarqueeBox.prototype.resetBox = function () {
                this.msgList.length = 0;
                this.bindObj.timer.clear(this, this.requestRollInfo);
                if (this.msgTween) {
                    Laya.Tween.clear(this.msgTween);
                    this.msgTween = null;
                }
                this.bindObj.showAnim.stop();
                this.bindObj.visible = false;
            };
            MarqueeBox.prototype.clearBox = function () {
                this.resetBox();
            };
            MarqueeBox.prototype.setData = function (isAnim) {
                if (isAnim === void 0) { isAnim = true; }
                //
                this.requestRollInfo();
                this.bindObj.visible = true;
                //
                if (isAnim) {
                    this.bindObj.showAnim.play(0, false);
                }
                else {
                    this.bindObj.showAnim.play(15, false);
                }
            };
            return MarqueeBox;
        }(component.UIBox));
        component.MarqueeBox = MarqueeBox;
    })(component = common.component || (common.component = {}));
})(common || (common = {}));
//# sourceMappingURL=MarqueeBox.js.map