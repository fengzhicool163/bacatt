
module lobby.component {

	/** 玩家头像与名称盒子模板 */
	export abstract class PlayerHeadInfoBoxBase extends common.component.UIBox {

		protected bindObj : ui.lobbyUI.Boxs.MainPlayerInfoBoxUI;

		public initComponents() {
			this.resetBox();
		}

		public resetBox(){
			this.bindObj.showAnim.stop();
			this.bindObj.visible = false;
		}

		public clearBox() {
			this.resetBox();
		}

		/**
		 * 设置玩家头像与名称盒子显示
		 * @param avatar 头像
		 * @param username 名称
		 * @param isAnim 是否播放进场动画
		 */
		public setData(avatar : string , username : string ,isAnim = false) {
			//设置名称
			this.bindObj.nameLabel.text = util.StringUtils.starString(username, "****");

			//设置头像
			var url = asset.AssetConfig.GetHeadAsset( avatar );
			this.bindObj.header.loadImage(url, 0, 0, 90, 90);

			//显示并刷新缓存
			this.bindObj.visible = true;

			//动画
			if(isAnim) {
				this.bindObj.showAnim.play(0,false);
			}else{
				this.bindObj.showAnim.play(15,false);
			}
			
		}

	}
}