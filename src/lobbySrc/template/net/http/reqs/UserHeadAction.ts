/**
* name 
*/
module net{
	export class UserHeadAction extends net.DefaultAction{
		
		public address():string{
			return net.Path.GATE_WAY_BASE_URL + "/player/user";
		}

	}
}