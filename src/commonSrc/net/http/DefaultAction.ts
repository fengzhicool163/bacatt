/**
* name 
*/
module net{
	export abstract class DefaultAction extends NetAction{
		
		public abstract address():string;

		constructor(){
			super();
			var token = AppInfoManager.Token;
			this.setMethod("get").addParams("access_token", token).addHeader("access_token", token);
		}

		//请求完毕
		protected onHttpRequestComplete(e: any): void {
	
			if(GameMain.DEBUG) console.log( 'onHttpRequestComplete:' + this.hr.data );

			if( this.observer == null )
				return;

			var obj = JSON.parse(this.hr.data);
			if(GameMain.DEBUG) console.log( obj );
			
			this.observer.onSuccess.call( this.observer , obj );
		
			this.observer.onComplet.call( this.observer );
			
		}

	}
}