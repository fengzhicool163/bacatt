/**
* name 
*/
module net{

	export class GameSocketAction extends DefaultAction{
		constructor(){	
			super();
		}	

		public address():string{
			/** http://sqp01game.sit01.com/api/v1/gamecenter/player/game/wsUrl/32?access_token=0367384c-9c95-4f09-909e-068fd9646b19 **/
			return net.Path.GATE_WAY_BASE_URL + "/player/game/wsUrl/" + AppInfoManager.GameId;
		}
	}

}