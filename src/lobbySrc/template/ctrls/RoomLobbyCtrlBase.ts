/**
* name 
*/
module ctrl {

	export abstract class RoomLobbyCtrlBase extends UICtrl {

		/** 大厅显示消息 */
		public EVENT_SHOWLOBBY = "EVENT_SHOWLOBBY";

		/** 获取用户钱包信息  */
		protected getUserBalanceInfo(): void {
			if (GameMain.DEBUG) console.log("重新获取玩家余额");

			var balanceOb = new net.DefaultNetObserver();
			balanceOb.onSuccess = (balanceInfo: httpBean.UserBalanceInfoBean) => {
				//
				UserInfoManger.setUserBalance(balanceInfo);
				//广播房间数据更新
				this.broadcast(this.EVENT_SHOWLOBBY);
			};
			//消息返回处理
			balanceOb.onError = this.errorCodeFunc.bind(this);
			var balanceAction = new net.UserBalanceAction().bindObserver(balanceOb);
			balanceAction.excute();
		}

		/** 获取玩家ID信息与名称信息 */
		protected getUserInfo() {
			//获取用户基本信息
			var userInfoOb = new net.DefaultNetObserver();
			userInfoOb.onSuccess = (userInfo: httpBean.UserInfoBean) => {
				//保存玩家数据
				UserInfoManger.setUserData(userInfo);
				//广播房间数据更新
				this.broadcast(this.EVENT_SHOWLOBBY);
			};
			//消息返回处理
			userInfoOb.onError = this.errorCodeFunc.bind(this);
			//
			var userInfoAction = new net.UserInfoAction().bindObserver(userInfoOb);
			userInfoAction.excute();
		}

		/** 获取玩家ID信息与名称信息 */
		protected getHeadInfo() {
			//获取用户基本信息
			var headerOb = new net.DefaultNetObserver();
			headerOb.onSuccess = (headerInfo: httpBean.UserHeadBean) => {
				//保存玩家数据
				UserInfoManger.setUserHeadData(headerInfo);
				//广播房间数据更新
				this.broadcast(this.EVENT_SHOWLOBBY);
			};
			//消息返回处理
			headerOb.onError = this.errorCodeFunc.bind(this);
			//
			var userHeadAction = new net.UserHeadAction().bindObserver(headerOb);
			userHeadAction.excute();
		}


		/** 就问取个用户数据三条消息骚不骚 */
		protected getAllInfo() {
			//获取用户信息
			this.getUserInfo();
			//获取用户信息
			this.getUserBalanceInfo();
			//获取用户信息
			this.getHeadInfo();
		}

		/** 
		 * 401 "登录过期,请重新登录"
		 * 422 msg
		 * 503 && other "网络异常请重试"
		 */
		protected errorCodeFunc(error: number, msg: string) {
			//
			common.panel.LoadingPanel.Hide();
			var self = this;
			var msg : string = error == 401 ? "登录过期,请重新登录" : error.toString();
			if(error == 401){
				//todo
				common.panel.PopInfoPanel.Show(msg, () => {
					self.gotoLobby();
				});
			}else{
				self.gotoLobby();
			}
			console.error(msg);
		}

		/** 进入游戏大厅 */
		public intoGameLobby() {
			//获取必要数据
			common.panel.LoadingPanel.Show();
			//先把老数据清空
			UserInfoManger.clearData();
			//
			this.getAllInfo();
			//打开房间大厅界面
			UIManager.getInstance().ShowUI( lobby.panel.LobbyPanel, lobby.panel.LobbyPanel.assets );
		}

		/** 退出游戏大厅 */
		public exitGameLobby() {
			//打开房间大厅界面
			UIManager.getInstance().HideUI( lobby.panel.LobbyPanel );
		}

		/** 返回游戏列表大厅 */
		public gotoLobby() {
			//跳转到大厅
			// window.location.href = AppInfo.getInstance().getBackUrl() + "?token=" + AppInfo.getInstance().getToken();
			var msg = JSON.stringify({ action: "game_back" });
			window.top.postMessage(msg, "*");
		}

	}
}