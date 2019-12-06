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
var common;
(function (common) {
    var panel;
    (function (panel) {
        /*
        * 消息弹窗
        */
        var PopInfoPanel = /** @class */ (function (_super) {
            __extends(PopInfoPanel, _super);
            function PopInfoPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PopInfoPanel.prototype.initComponents = function () {
                this.onConfirm = null;
                this.onCancel = null;
                this.onClose = null;
                EventManager.addTouchScaleListener(this.confirmBtn, this, this.confirmBtnFunc);
                EventManager.addTouchScaleListener(this.confirmBtn1, this, this.confirmBtnFunc);
                EventManager.addTouchScaleListener(this.cancelBtn, this, this.cancelBtnFunc);
                EventManager.addTouchScaleListener(this.closeBtn, this, this.cancelBtnFunc);
            };
            PopInfoPanel.prototype.confirmBtnFunc = function () {
                if (this.onConfirm != null) {
                    if (this.onConfirm()) {
                        return;
                    }
                }
                else {
                    common.SoundManagerBase.PlayClick();
                }
                UIManager.getInstance().HideUI(PopInfoPanel);
            };
            PopInfoPanel.prototype.cancelBtnFunc = function () {
                if (this.onCancel != null) {
                    if (this.onCancel()) {
                        return;
                    }
                }
                else {
                    common.SoundManagerBase.PlayClose();
                }
                UIManager.getInstance().HideUI(PopInfoPanel);
            };
            PopInfoPanel.prototype.Hide = function () {
                if (this.onClose != null) {
                    this.onClose();
                }
                _super.prototype.Hide.call(this);
            };
            /**
             * 设置弹窗文本
             * @param content
             */
            PopInfoPanel.prototype.setContent = function (content) {
                this.contentLabel.changeText(content);
            };
            /**
             * 点击确定按钮的回调，如果设置了，那么窗口将不会自动关闭
             * @param callBack
             */
            PopInfoPanel.prototype.setOnConfirmCallback = function (callBack) {
                this.onConfirm = callBack;
            };
            /**
             * 点击确定取消的回调，如果设置了，那么窗口将不会自动关闭
             * @param callBack
             */
            PopInfoPanel.prototype.setOnCancelCallback = function (callBack) {
                this.onCancel = callBack;
                if (this.onCancel) {
                    this.confirmBtn.visible = true;
                    this.confirmBtn1.visible = false;
                    this.cancelBtn.visible = true;
                }
                else {
                    this.confirmBtn.visible = false;
                    this.confirmBtn1.visible = true;
                    this.cancelBtn.visible = false;
                }
            };
            /**
             * 点击确定关闭的回调，如果设置了，那么窗口将不会自动关闭
             * @param callBack
             */
            PopInfoPanel.prototype.setOnCloseCallback = function (callBack) {
                this.onClose = callBack;
            };
            /**
             * 显示通用弹窗提示
             * @param content
             * @param callBackConfirm
             * @param callBackCancel
             * @param callBackClose
             */
            PopInfoPanel.Show = function (content, callBackConfirm, callBackCancel, callBackClose) {
                if (callBackConfirm === void 0) { callBackConfirm = null; }
                if (callBackCancel === void 0) { callBackCancel = null; }
                if (callBackClose === void 0) { callBackClose = null; }
                UIManager.getInstance().ShowPopUI(PopInfoPanel, PopInfoPanel.assets, this, function (self) {
                    self.setOnConfirmCallback(callBackConfirm);
                    self.setOnCancelCallback(callBackCancel);
                    self.setOnCloseCallback(callBackClose);
                    self.setContent(content);
                });
            };
            PopInfoPanel.Hide = function () {
                UIManager.getInstance().HideUI(PopInfoPanel);
            };
            PopInfoPanel.assets = common.asset.AssetConfig.PopInfoPanel;
            return PopInfoPanel;
        }(ui.commonUI.Panels.PopInfoPanelUI));
        panel.PopInfoPanel = PopInfoPanel;
    })(panel = common.panel || (common.panel = {}));
})(common || (common = {}));
//# sourceMappingURL=PopInfoPanel.js.map