/**
* name 
*/
module net{
	export class NoticeAction extends DefaultAction {

		constructor(){	
			super();
			this.addParams("start", "0").addParams("pageSize", "20");
		}	

		public address():string{
			return net.Path.GATE_WAY_BASE_URL + "/player/notice/list";
		}
	
		//请求完毕
		protected onHttpRequestComplete(e: any): void {

			if( this.observer == null )
				return;

			var obj = JSON.parse(this.hr.data);

			this.observer.onSuccess( obj );
		
			this.observer.onComplet();
			
		}
	}
}