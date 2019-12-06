
module lobby.panel {

	export abstract class MatchPanelBase extends ui.lobbyUI.Panels.MatchPanelUI {
        
        protected initComponents() {
            
        }

        public setMask(showMask : boolean){
            this.bgMask.alpha = showMask ? 1 : 0;
        }

		public Show() {
            if(GameMain) console.log("LoadingPanel Show");
			this.visible = true;
		}

		public Hide(){
            if(GameMain) console.log("LoadingPanel Hide");
			this.visible = false;
		}
		
        /**
         * 显示Loading遮罩
         * @param showMask 
         */
        public static Show( showMask : boolean = false){
            UIManager.getInstance().ShowMaskUI(MatchPanel,MatchPanel.assets,this,( ui )=>{
                ui.setMask( showMask );
            })
        }

        /**
         * 隐藏Loading遮罩
         * @param destroy 
         */
        public static Hide( destroy : boolean = false ){
            UIManager.getInstance().HideUI(MatchPanel,destroy);
        }
        
        
	}
}