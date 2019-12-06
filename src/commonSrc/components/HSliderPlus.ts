
module common.component {

	export class HSliderPlus extends UIComponent {

		protected bindObj : ui.commonUI.Components.HSliderPlusUI;

		protected value : number = null;

		protected bgFrameWidth : number;
		protected downMouseX = 0;
		protected downPointX = 0;
		protected startMove = false;

		public sliderValueChangeHandler : Laya.Handler;
		
		public initComponents() {
			//初始化数据
			this.bgFrameWidth = this.bindObj.width = this.bindObj.bgFrame.width;
			this.bindObj.height = this.bindObj.bgFrame.height;
			//设置初始值
			this.Value = 0;
			//
			this.bindObj.timer.frameLoop(1,this,this.ctrlPointMove);
			//
			this.bindObj.ctrlPoint.on(Laya.Event.MOUSE_DOWN,this,this.ctrlPointDown);
			Laya.stage.on(Laya.Event.MOUSE_UP,this,this.ctrlPointUp);
		}		

		public destroy(){
			this.bindObj.ctrlPoint.off(Laya.Event.MOUSE_DOWN,this,this.ctrlPointDown);
			Laya.stage.off(Laya.Event.MOUSE_UP,this,this.ctrlPointUp);

			this.bindObj.timer.clear(this,this.ctrlPointMove);
			super.destroy();
		}

		//滑动响应
		protected ctrlPointDown(){
			this.downMouseX = Laya.stage.mouseX;
			this.downPointX = this.bindObj.ctrlPoint.x;
			this.startMove = true;
		}

		//滑动响应
		protected ctrlPointMove(){
			if(this.startMove){
				var offectX = Laya.stage.mouseX - this.downMouseX;
				var pro = (this.downPointX + offectX) / this.bgFrameWidth;
				this.Value = pro;
			}
		}

		//滑动响应
		protected ctrlPointUp(){
			this.startMove = false;
		}

		/** 滑动条滑动百分比 */
		public set Value( value : number ){
			value = Math.max(0,Math.min(1,value));
			if(this.value == value) return;
			this.value = value
			//
			this.bindObj.sliderBar.width = this.bindObj.ctrlPoint.x = this.value * this.bgFrameWidth;
			//
			if(this.sliderValueChangeHandler){
				this.sliderValueChangeHandler.runWith(this.value);
			}
		}
		/** 滑动条滑动百分比 */
		public get Value(){
			return this.value;
		}

		public justSetValue( value : number ){
			value = Math.max(0,Math.min(1,value));
			if(this.value == value) return;
			this.value = value
			//
			this.bindObj.sliderBar.width = this.bindObj.ctrlPoint.x = this.value * this.bgFrameWidth;
		}
	}
}