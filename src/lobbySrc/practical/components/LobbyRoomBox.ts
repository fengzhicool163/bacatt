module lobby.component{

    /** 游戏房间盒子 */
    export class LobbyRoomBox extends common.component.UIComponent{

        protected bindObj : ui.lobbyUI.Boxs.LobbyRoomBoxUI;

        protected pageBoxs : {[key : number] : LobbyTabelPageBox};

        protected checkGroup : common.component.CheckGroupBox;

        protected ctrl : ctrl.RoomLobbyCtrl;

        protected initComponents() {
            //菜单组
            this.checkGroup = this.bindScript(common.component.CheckGroupBox,this.bindObj.checkGroupObj);
            //页面盒子
            this.pageBoxs = {};
            for (let index = 0; index < 4; index++) {
                const obj = this.bindObj["lobbyTabelPageBoxObj" + index];
                const pageBox = this.bindScript(LobbyTabelPageBox,obj);
                this.pageBoxs[index] = pageBox;
            }
            //管理器
            this.ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
        }

        public resetBox() {
            for (let index = 0; index < 4; index++) {
                const pageBox = this.pageBoxs[index];
                pageBox.resetBox();
            }
        }

        public clearBox() {
            for (let index = 0; index < 4; index++) {
                const pageBox = this.pageBoxs[index];
                pageBox.clearBox();
            }
            this.bindObj.visible = false;
        }
 
        /** 初始化显示新手房 */
        protected initView(){
			this.checkGroup.selectIndex = 0;
			this.selectContent( 0 );
            this.checkGroup.setToggleChangeFunc(this, this.menuChangeFunc);
            this.bindObj.visible = true;
		}

        /** 选择显示页面刷新 */
		protected selectContent( selectIndex : number ){
			for (let index = 0; index < 4; index++) {
                const pageBox = this.pageBoxs[index];
                if(index != selectIndex){
                    pageBox.bindObj.visible = false;
                }else{
                    pageBox.bindObj.visible = true;
                }
			}
		}

        /** 菜单按钮点击事件 */
		protected menuChangeFunc() {
			SoundManager.PlayClick();
			var selectIndex = this.checkGroup.selectIndex;
			this.selectContent( selectIndex );
        }

        public UpdateData(){
            for (let index = 0; index < 4; index++) {
                const pageBox = this.pageBoxs[index];
                const data = this.ctrl.lobbyData.data[index];
                pageBox.setData(data);
            }
        }
        
        public Show(){
            this.bindObj.visible = true;
            this.UpdateData();
            this.initView();
        }

        public Hide(){
            this.clearBox();
        }
        
    }
}