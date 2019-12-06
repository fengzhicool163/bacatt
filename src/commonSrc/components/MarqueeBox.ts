/**
* name 
*/
module common.component {

	export class MarqueeBox extends UIBox {

		protected bindObj : ui.commonUI.Boxs.MarqueeBoxUI;

		protected msgList: string[] = [];
		protected runTimerReq: boolean;
		protected runTimerRoll: boolean;
		protected showOneMsgItemHandler: Laya.Handler;
		protected msgTween: Laya.Tween;

		protected initComponents() {
			//
			this.bindObj.noticeSp.scrollRect = new Laya.Rectangle(0, 0, this.bindObj.noticeSp.width, this.bindObj.noticeSp.height);
			//
			this.bindObj.msgTxt.text = "";
			this.bindObj.msgTxt.reCache();
			this.bindObj.msgTxt.x = this.bindObj.noticeSp.width;
			//
			this.showOneMsgItemHandler = Laya.Handler.create(this, this.showOneMsgItem, null, false);
		}


		//添加全部消息
		protected addMsgItems(list: any[]) {
			list.forEach(value => {
				if (value.notice) this.msgList.push(value.notice);
			});
		}

		/** 显示一条信息 */
		protected showOneMsgItem() {
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
			} else {
				this.requestRollInfo();
			}
		}


		/** 10秒后请求一次跑马灯数据 */
		protected startRequestTimer(time: number = 10000) {
			this.bindObj.timer.once(time, this, this.requestRollInfo);
		}

		protected stopRequestTimer() {
			this.bindObj.timer.clear(this, this.requestRollInfo);
		}

		/** 请求跑马灯数据 */
		protected requestRollInfo() {
			var noticeOb = new net.DefaultNetObserver();
			noticeOb.onSuccess = (noticeInfo) => {
				if (noticeInfo.datas && noticeInfo.datas.length > 0) {
					this.addMsgItems(noticeInfo.datas);
					if (!this.msgTween) { //没有缓动开始走消息
						this.showOneMsgItem();
					}
					this.stopRequestTimer();
				} else {
					this.startRequestTimer();
				}
			};
			noticeOb.onError = (error: number, msg: string) => {
				this.startRequestTimer(3000);
			};
			var noticeAction = new net.NoticeAction().bindObserver(noticeOb);
			noticeAction.excute();
		}

		public resetBox() {
			this.msgList.length = 0;
			this.bindObj.timer.clear(this, this.requestRollInfo);
			if (this.msgTween) {
				Laya.Tween.clear(this.msgTween);
				this.msgTween = null;
			}
			this.bindObj.showAnim.stop();
			this.bindObj.visible = false;
		}

		public clearBox() {
			this.resetBox();
		}

		public setData(isAnim = true) {
			//
			this.requestRollInfo();
			this.bindObj.visible = true;
			//
			if(isAnim) {
				this.bindObj.showAnim.play(0,false);
			}else{
				this.bindObj.showAnim.play(15,false);
			}
		}


	}
}