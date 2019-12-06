/**
* name 
*/
module net{
	
	export abstract class NetObserver{

		constructor(){

		}

		/**
		 * Api开始调用实现的函数
		 */
		public abstract onStart():void;

		/**
		 * Api调用完成的函数，不管成功与失败都会调用该函数
		 */
		public abstract onComplet():void;

		/**
		 * 当本次Api调用成功回调的函数
		 * @param data 返回数据
		 */
		public abstract onSuccess( data : any ):void;

		/**
		 * 当本次Api调用失败回调的函数
		 * @param error 失败的Code
		 * @param msg   失败的信息
		 */
		public abstract onError( error : number , msg:string ):void;

	}

}