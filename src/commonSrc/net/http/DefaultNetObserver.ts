/**
* name 
*/
module net{

	export class DefaultNetObserver extends NetObserver{
		constructor(){
			super();
		}

		/**
		 * Api开始调用实现的函数
		 */
		public onStart():void{

		}

		/**
		 * Api调用完成的函数，不管成功与失败都会调用该函数
		 */
		public onComplet():void{

		}

		/**
		 * 当本次Api调用成功回调的函数
		 * @param data 返回数据
		 */
		public onSuccess( data : any ):void{

		}

		/**
		 * 当本次Api调用失败回调的函数
		 * @param error 失败的Code
		 * @param msg   失败的信息
		 */
		public onError( error : number , msg:string ):void{
			
		}

	}
}