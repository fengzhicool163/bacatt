/**
* name 
*/
module net{
	export class HistoryAction extends DefaultAction{
		constructor(){	
			super();
			this.addParams( "pageSize" , "10" ).addParams( "start" , "0" ).addParams( "gameId" , AppInfoManager.GameId );
		}	


		public address():string{
			return net.Path.GATE_WAY_BASE_URL + "/player/game/history";
		}
	
	}
}