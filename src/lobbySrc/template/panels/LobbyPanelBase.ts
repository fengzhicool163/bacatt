/**
* name 
*/
module lobby.panel {

	export abstract class LobbyPanelBase extends ui.lobbyUI.Panels.LobbyPanelUI {

		//玩家信息
		protected playerInfoBox_oldx: number;
		protected playerInfoBox: component.PlayerHeadInfoBox;

		//玩家钱包
		protected playerWalletBox: component.PlayerWalletBox;

		//底部按钮条
		protected btnBarBox : component.LobbyBtnBarBox;

		//跑马灯盒子
		protected marqueeBox : common.component.MarqueeBox;

		//
		protected isUpdate = false;

		//控制器
		protected ctrl: ctrl.RoomLobbyCtrl;

		//初始化控件（获取控件，加载动态控件，注册点击事件等）
		protected initComponents() {
			//获取管理器
			this.ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);

			//显示游戏版本号
			this.versionLabel.changeText("版本号:" + GameMain.VERSION);

			//玩家信息
			this.playerInfoBox = this.bindScript(component.PlayerHeadInfoBox, this.playerInfoBoxObj);
			this.playerInfoBox_oldx = this.playerInfoBoxObj.x;

			//玩家钱包
			this.playerWalletBox = this.bindScript(component.PlayerWalletBox, this.playerWalletBoxObj);

			//底部按钮条
			this.btnBarBox = this.bindScript(component.LobbyBtnBarBox, this.btnBarObj);

			//跑马灯盒子
			this.marqueeBox = this.bindScript(common.component.MarqueeBox, this.marqueeBoxObj);

			//退出按钮
			EventManager.addTouchScaleListener(this.exitBtn, this, this.exitBtnFunc);

			//
			var msg = JSON.stringify({ action: "game_start", gameId: AppInfoManager.GameId });
			window.top.postMessage(msg, "*");

			//
			this.resize();
		}

		public resize() {
			this.playerInfoBoxObj.x = this.playerInfoBox_oldx + util.GameUtils.posOffset;
		}

		//注册监听
		public initlistener() {
			this.ctrl.addListener(this.ctrl.EVENT_SHOWLOBBY, this, this.updateView);
		}
		//注销监听           
		public unInitlistener() {
			this.ctrl.removeListener(this.ctrl.EVENT_SHOWLOBBY, this, this.updateView);
		}

		public resetLobby() {
			//
			this.isUpdate = false;
			//
			this.playerInfoBox.resetBox();
			this.playerWalletBox.resetBox();
			//
			this.marqueeBox.resetBox();
			//
			this.centerNode.visible = false;
		}

		/** 根据数据初始化显示 设置房间信息 */
		protected checkData() {
			var balance = UserInfoManger.Balance;
			var userName = UserInfoManger.UserName;
			var avatar = UserInfoManger.Avatar;	
			//
			if (!balance || !userName || !avatar) return false;
			//
			return true;
		}

		public updateView(){
			//
			if(this.isUpdate || !this.checkData()) return false;
			//
			var balance = UserInfoManger.Balance;
			var userName = UserInfoManger.UserName;
			var avatar = UserInfoManger.Avatar;	
			//显示跑马灯
			this.marqueeBox.setData(true);
			//头像
			this.playerInfoBox.setData(avatar, userName, true);
			//钱包
			this.playerWalletBox.setData(balance, true);
			//
			this.btnBarBox.setData(true);
			//
			common.panel.LoadingPanel.Hide();
			//
			this.isUpdate = true;
			//
			this.centerNode.visible = true;

			return true;
		}


		public Show() {
			this.resetLobby();
			//
			this.updateView();
			//
			super.Show();
		}

		public Hide() {
			this.resetLobby();
			super.Hide();
		}

		/************************************************** 点击事件 *******************************************/
		protected exitBtnFunc() {
			SoundManager.PlayGoBackLobby();
		}
	}
}