
module common.panel {

	export class LoadingPanel extends ui.commonUI.Panels.LoadingPanelUI {

		public static readonly assets = asset.AssetConfig.LoadingPanel;
        
        protected initComponents() {
            
        }

        public setMask(showMask : boolean){
            this.bgMask.alpha = showMask ? 1 : 0;
        }

		public Show() {
            if(GameMain) console.log("LoadingPanel Show");
			this.loadingAnim.play(0,true);
			this.visible = true;
		}

		public Hide(){
            if(GameMain) console.log("LoadingPanel Hide");
			this.loadingAnim.stop();
			this.visible = false;
		}
		
		
        /**
         * 显示Loading遮罩
         * @param showMask 
         */
        public static Show( showMask : boolean = true){
            UIManager.getInstance().ShowMaskUI(LoadingPanel,LoadingPanel.assets,this,( ui )=>{
                ui.setMask( showMask );
            })
        }

        /**
         * 隐藏Loading遮罩
         * @param destroy 
         */
        public static Hide( destroy : boolean = false ){
            UIManager.getInstance().HideUI(LoadingPanel,destroy);
        }
        
        
	}
}