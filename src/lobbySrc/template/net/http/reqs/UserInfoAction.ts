/**
* name 
*/
module net{
	export class UserInfoAction extends net.DefaultAction{
		
		public address():string{
			//return net.Path.GATE_WAY_BASE_URL + "/player/user";
			return net.Path.USER_GATE_WAY_BASE_URL + "/webapi/account/users/current"
		}

	}
}