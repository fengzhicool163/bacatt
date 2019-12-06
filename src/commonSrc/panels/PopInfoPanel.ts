
module common.panel {
    /*
    * 消息弹窗
    */
    export class PopInfoPanel extends ui.commonUI.Panels.PopInfoPanelUI {

        public static assets: string[] = asset.AssetConfig.PopInfoPanel;

        onConfirm: Function;
        onCancel: Function;
        onClose: Function;

        protected initComponents() {
            this.onConfirm = null;
            this.onCancel = null;
            this.onClose = null;

            EventManager.addTouchScaleListener(this.confirmBtn, this, this.confirmBtnFunc);
            EventManager.addTouchScaleListener(this.confirmBtn1, this, this.confirmBtnFunc);
            EventManager.addTouchScaleListener(this.cancelBtn, this, this.cancelBtnFunc);
            EventManager.addTouchScaleListener(this.closeBtn, this, this.cancelBtnFunc);
        }

        private confirmBtnFunc() {

            if (this.onConfirm != null) {
                if (this.onConfirm()) {
                    return;
                }
            } else {
                SoundManagerBase.PlayClick();
            }
            UIManager.getInstance().HideUI(PopInfoPanel);
        }

        private cancelBtnFunc() {
            if (this.onCancel != null) {
                if (this.onCancel()) {
                    return;
                }
            } else {
                SoundManagerBase.PlayClose();
            }
            UIManager.getInstance().HideUI(PopInfoPanel);
        }

        public Hide() {
            if (this.onClose != null) {
                this.onClose();
            }
            super.Hide();
        }

        /**
         * 设置弹窗文本
         * @param content 
         */
        public setContent(content: string): void {
            this.contentLabel.changeText(content);
        }

        /**
         * 点击确定按钮的回调，如果设置了，那么窗口将不会自动关闭
         * @param callBack 
         */
        public setOnConfirmCallback(callBack: Function): void {
            this.onConfirm = callBack;
        }

        /**
         * 点击确定取消的回调，如果设置了，那么窗口将不会自动关闭
         * @param callBack 
         */
        public setOnCancelCallback(callBack: Function): void {
            this.onCancel = callBack;
            if (this.onCancel) {
                this.confirmBtn.visible = true;
                this.confirmBtn1.visible = false;
                this.cancelBtn.visible = true;
            } else {
                this.confirmBtn.visible = false;
                this.confirmBtn1.visible = true;
                this.cancelBtn.visible = false;
            }
        }

        /**
         * 点击确定关闭的回调，如果设置了，那么窗口将不会自动关闭
         * @param callBack 
         */
        public setOnCloseCallback(callBack: Function): void {
            this.onClose = callBack;
        }

        /**
         * 显示通用弹窗提示
         * @param content 
         * @param callBackConfirm 
         * @param callBackCancel 
         * @param callBackClose 
         */
        public static Show(content: string, callBackConfirm: Function = null, callBackCancel: Function = null, callBackClose: Function = null) {
            UIManager.getInstance().ShowPopUI(PopInfoPanel, PopInfoPanel.assets, this, (self: PopInfoPanel) => {
                self.setOnConfirmCallback(callBackConfirm);
                self.setOnCancelCallback(callBackCancel);
                self.setOnCloseCallback(callBackClose);
                self.setContent(content);
            });
        }

        public static Hide() {
            UIManager.getInstance().HideUI(PopInfoPanel);
        }
    }
}