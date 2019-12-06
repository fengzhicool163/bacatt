/**
* name 
*/
module net {

	export class Path {

		private static init(){
			// 用户相关接口的根地址(开发环境)
			// Path.USER_GATE_WAY_BASE_URL = "http://106games.com:89/api/v1/account";

			// 网关基础地址赋值
			// Path.GATE_WAY_BASE_URL = "http://106games.com:89/api/v1/gamecenter";

			// 用户相关接口的根地址(测试环境)
			// Path.USER_GATE_WAY_BASE_URL = "http://sit.106games.com/api/v1/account";

			// //网关基础地址赋值
			// Path.GATE_WAY_BASE_URL = "http://sit.106games.com/api/v1/gamecenter";

			// 用户相关接口的根地址(测试环境)
			// Path.USER_GATE_WAY_BASE_URL = "http://sit.106games.com/api/v1/account";

			// 网关基础地址赋值
			// Path.GATE_WAY_BASE_URL = "http://192.168.9.205:8090/api/v1/gamecenter";

			// 用户相关接口的根地址(dev)
			// Path.USER_GATE_WAY_BASE_URL = "http://106games.com:90/api/v1/account";

			// 网关基础地址赋值
			// Path.GATE_WAY_BASE_URL = "http://106games.com:90/api/v1/gamecenter";


			var jumpData = util.StringUtils.getQueryVariable("jumpData");

			if (!jumpData) {//本地开发调试用
				this._USER_GATE_WAY_BASE_URL = "http://sqp01game.sit01.com/api/v1/account";
				this._GATE_WAY_BASE_URL = "http://sqp01game.sit01.com/api/v1/gamecenter";
				//Path.USER_GATE_WAY_BASE_URL = "http://game.dev02.com/api/v1/account";
				//Path.GATE_WAY_BASE_URL = "http://game.dev02.com/api/v1/gamecenter";
			} else {
				//用户相关接口的根地址(nat)
				this._USER_GATE_WAY_BASE_URL = "../api/v1/account";
				//网关基础地址赋值
				this._GATE_WAY_BASE_URL = "../api/v1/gamecenter";
			}
		}

		/** 用户相关API基础地址 */
		public static get USER_GATE_WAY_BASE_URL(){
			if(!this._USER_GATE_WAY_BASE_URL){
				this.init();
			}
			return this._USER_GATE_WAY_BASE_URL;
		}

		public static set USER_GATE_WAY_BASE_URL( value ){
			this._USER_GATE_WAY_BASE_URL = value;
		}
		private static _USER_GATE_WAY_BASE_URL: string;

		/** 网关基础地址 */
		public static get GATE_WAY_BASE_URL() {
			if(!this._GATE_WAY_BASE_URL){
				this.init();
			}
			return this._GATE_WAY_BASE_URL;
		}

		public static set GATE_WAY_BASE_URL( value ){
			this._GATE_WAY_BASE_URL = value;
		}
		private static _GATE_WAY_BASE_URL : string;

	}

}