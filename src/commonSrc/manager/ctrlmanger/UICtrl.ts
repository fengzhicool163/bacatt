/**
* name 
*/
module ctrl {

	export abstract class UICtrl {

		public getCurTime() {
			var date = new Date();
			var curTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
			return curTime;
		}

		//管理器ID
		private static ctrlID = 0;
		private _ctrlID = 0;
		constructor() {
			++UICtrl.ctrlID;
			this._ctrlID = UICtrl.ctrlID;
		}

		//监听事件ID
		private eventID = 0;
		private getEventID() {
			var eventID = this._ctrlID + "_" + (++this.eventID);
			return eventID;
		}

		//事件Map
		private eventMap = {};

		/**
		 * 注册对管理器的监听
		 * @param eventName 事件
		 * @param caller 	监听者caller
		 * @param callBack  监听者callBack
		 */
		public addListener(eventName: string, caller: any, callBack: any) {
			if (callBack == null) return;
			var eventID = callBack.__eventID = callBack.__eventID ? callBack.__eventID : this.getEventID();
			this.eventMap[eventName] = this.eventMap[eventName] || {};
			this.eventMap[eventName][eventID] = this.eventMap[eventName][eventID] || {};
			this.eventMap[eventName][eventID] = { "c": caller, "f": callBack };
		}

		/**
		 * 移除对管理器的监听
		 * @param eventName 
		 * @param caller 
		 * @param callBack 
		 */
		public removeListener(eventName: string, caller: any, callBack: any) {
			if (callBack == null || callBack.__eventID == null) return;
			if (this.eventMap[eventName]) {
				var events = this.eventMap[eventName];
				delete events[callBack.__eventID];
			};
		}

		/**
		 * 管理器广播消息 
		 * @param eventName 
		 * @param args 
		 */
		public broadcast(eventName: string, ...args) {
			if (this.eventMap[eventName]) {
				var events = this.eventMap[eventName];
				for (const eventID in events) {
					var eventObj = events[eventID];
					eventObj.f.apply(eventObj.c, args);
				}
			}
		}

		public clearAllListener() {
			this.eventID = 0;
			this.eventMap = {};
		}

		public abstract init(...args);
		public abstract destroy();
	}
}