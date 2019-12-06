/**
* name 
*/
module net{

	export class UserBalanceAction extends DefaultAction{
		constructor(){	
			super();
		}	

		public address():string{
			return net.Path.GATE_WAY_BASE_URL + "/player/user/balance";
		}
	}

}