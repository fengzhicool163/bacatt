/**
* name 
*/
module net{

	import HttpRequest = Laya.HttpRequest;
	import NetObserver = net.NetObserver;
	import Event = Laya.Event;
	import Su = util.StringUtils;

	export abstract class NetAction{

		//用于保存本次请求的参数
		private params : Object;

		private headers : Object;

		//网络回调
		protected observer : NetObserver;

		//http请求类
		protected hr: HttpRequest;

		//请求方法
		private method:string = "post";

		//构造函数，暂时什么都不做，等待协议确定公共参数后处理
		constructor(){

			//构造HttpRequest
			this.hr = new HttpRequest();

			//头信息
			this.headers = {};

			//参数
			this.params = {};

			//注册请求回调
			this.hr.on( Event.COMPLETE , this , this.onHttpRequestComplete );

			this.hr.on( Event.ERROR , this , this.onHttpRequestError );

			//默认观察者对象是null 如果本次请求未绑定观察者对象 那么请求回来全部都不会调用
			this.observer = null;

		}

		//基类函数，获取地址
		public abstract address():string;

		//获取本次请求的方式，是post还是get 默认是post
		public requestMethod():string{
			
			return this.method;

		}

		//设置请求方法
		public setMethod( method:string ):NetAction{

			this.method = method;
			return this;

		}

		//添加请求头
		public addHeader( key:string , value:string ):NetAction{

			this.headers[key] = value;
			return this;

		}

		//添加参数链式
		public addParams( key:string , value:string ):NetAction{

			this.params[key] = value;
			return this;

		}

		//绑定观察者对象
		public bindObserver( aObserver:NetObserver ):NetAction{

			this.observer = aObserver;
			return this;

		}

		//发送请求
		public excute():void{
			
			if( this.observer != null )
				this.observer.onStart();

			var address = this.address() as string;
			
			//地址判空检查
			if(Su.isEmpty( address )){
				
				if( this.observer != null ){
					this.observer.onError(  -1 ,"request none address" );
					this.observer.onComplet();
				}
				return;

			}

			//发送请求
			var paramsData = this.createParams();
			this.hr.send( address + "?" + paramsData ,paramsData,this.requestMethod(),"text" , this.createHeaders() );

		}

		//请求完毕
		protected onHttpRequestComplete(e: any): void {

			if(	this.hr.http.status == 200 || this.hr.http.status == 203  || this.hr.http.static == 204 )
			{
				if(GameMain.DEBUG) console.log( 'onHttpRequestComplete:' + this.hr.data );

				if( this.observer == null )
					return;
				
				var obj = null;
 
				if( this.hr.http.status == 200 ){
					obj = JSON.parse(this.hr.data);
					if( obj.code == undefined ){
						//没有code手动加一个200被认为是成功
						obj.code = 0;
					}
				}
				else{
					//空数据填充   203数据一定是正确的
					obj = {code:0};
					obj.data = {};
				}

				if( obj.code == 0 ){
					this.observer.onSuccess.call( this.observer , obj.data );
				}
				else{
					//code不为0那就是失败
					this.observer.onError.call(this.observer, obj.code , obj.err );
				}
				
				this.observer.onComplet.call( this.observer );
			}
		}

		//网络请求发生错误
		protected onHttpRequestError(e: any): void {

			if(GameMain.DEBUG) console.log( "onHttpRequestError:" + e );
			if( this.observer != null ){
				this.observer.onError( this.hr.http.status , e );
				this.observer.onComplet();
			}

		}

		//创建请求头
		private createHeaders():Array<any>{

			var auth_headers = [];

			for( const key of Object.keys( this.params ) ){
				
				auth_headers.push(key);
				auth_headers.push(this.params[key]);

			}

			return auth_headers;

		}

		//构造请求参数
		private createParams():string{

			//默认没有参数
			let paramsString = '';
			var isFirst = true;
			for( const key of Object.keys( this.params ) ){

				if( isFirst ){
					paramsString += key + "=" + this.params[key] as string;
					isFirst = false;
				}
				else{
					paramsString += '&' +  key + "=" + this.params[key] as string;
				}
				
			}
			return paramsString;
			
		}

	}
}