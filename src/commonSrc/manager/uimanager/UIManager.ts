
enum UIState {
	Error,
	UnInit,
	Destroy,
	Loading,
	WaitOpen,
	Hide,
	Show,
}

class UIUnit {
	/** ui实例 */
	public ui: any = null;
	/** ui实例状态 */
	public uiState: UIState = UIState.UnInit;
	/** 加载ui实例所需资源路径 */
	public uiResPaths: string[] = null;
	/** ui实例销毁后,资源缓存时间 0不销毁 */
	public uiReleaseTime: number = 0;
}

/** ui实例管理器 */
class UIManager extends ui.commonUI.UIManagerUI {

	//单例
	private static instance: UIManager;
	public static getInstance() {
		if (!this.instance) {
			this.instance = new UIManager();
		}
		return this.instance;
	}

	//参数
	protected uiResPaths: { [key: string]: string[] };

	/** ui单位 */
	private uiUnitMap: { [key: string]: UIUnit };

	/** 加载界面时的遮罩 */

	private resCheckTime: number = 1000;

	private maskAnim: boolean = false;
	private maskAlpha: number = 0.7;

	protected initComponents() {
		//
		Laya.stage.addChild(this);

		//
		this.uiUnitMap = {};
		//
		Laya.timer.loop(this.resCheckTime, this, this.checkRes);
		//
		Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
	}

	//销毁
	public destroy() {
		Laya.timer.clear(this, this.checkRes);
		Laya.stage.off(Laya.Event.RESIZE, this, this.resize);
		UIManager.instance = null;
		super.destroy();
	}

	//Sprite全屏
	protected setSpriteFullScreen(sp: Laya.View) {
		sp.width = Laya.stage.width;
		sp.height = Laya.stage.height;
		sp.centerX = 0;
		sp.centerY = 0;
		return sp;
	}

	public resize() {
		for (const key in this.uiUnitMap) {
			const uiUnit = this.uiUnitMap[key];
			if (uiUnit.ui) {
				this.setSpriteFullScreen(uiUnit.ui);
				uiUnit.ui.resize();
			}
		}
	}

	//
	private checkRes() {
		for (const key in this.uiUnitMap) {
			const uiUnit = this.uiUnitMap[key];
			if (uiUnit.uiState != UIState.Destroy) continue;
			if (uiUnit.uiResPaths && uiUnit.uiReleaseTime > 0) {
				uiUnit.uiReleaseTime -= this.resCheckTime;
				if (uiUnit.uiReleaseTime <= 0) {
					uiUnit.uiReleaseTime = 0;
					for (let index = 0; index < uiUnit.uiResPaths.length; index++) {
						const assetpath = uiUnit.uiResPaths[index];
						Laya.loader.clearTextureRes(assetpath);
					}
					uiUnit.uiResPaths = null;
				}
			}
		}
	}

	/**
	 * 获取uiUnit
	 * @param uiName UIPanel名称
	 */
	private getUIUnit(uiName: string) {
		var uiUnit = this.uiUnitMap[uiName];
		if (!uiUnit) {
			this.uiUnitMap[uiName] = uiUnit = new UIUnit();
		}
		return uiUnit;
	}

	/** 显示 */
	private showPanel<T>(uiScript: { new (): T; }, uiUnit: UIUnit, parentNode: Laya.Sprite) {
		//
		uiUnit.uiState = UIState.Show;
		//生成实例
		if (!uiUnit.ui) {
			uiUnit.ui = new uiScript();
			// uiUnit.ui.mouseEnabled = true;
			// uiUnit.ui.mouseThrough = false;
		}
		parentNode.addChild(uiUnit.ui);
		this.setSpriteFullScreen(uiUnit.ui);
		uiUnit.ui.Show();
		uiUnit.uiReleaseTime = 0;
	}

	/** 隐藏 */
	private hidePanel(uiUnit: UIUnit) {
		if (uiUnit.ui) {
			uiUnit.ui.Hide();
		}
	}

	private tryShowUI<T>(uiScript: { new (): T; }, uiResPaths: string[], caller: any, callBack: Function, parentNode: Laya.Sprite) {
		var uiName = uiScript.toString();		//UIPanel脚本名称
		var uiUnit = this.getUIUnit(uiName);	//获取ui管理单位,没有会生成一个
		//
		if (uiUnit.uiState == UIState.Hide) {
			this.showPanel(uiScript, uiUnit, parentNode);
			if (caller && callBack) callBack.apply(caller, [uiUnit.ui]);
			//
		} else if (uiUnit.uiState > UIState.Error && uiUnit.uiState < UIState.WaitOpen) {
			uiUnit.uiResPaths = uiResPaths;
			uiUnit.uiState = UIState.WaitOpen;
			uiUnit.uiReleaseTime = 0;
			//this.ShowLoadingMask(250);
			if(uiUnit.uiResPaths.length > 0){
				Laya.loader.load(uiUnit.uiResPaths, Laya.Handler.create(this, () => {
					//this.HideLoadingMask();
					if (uiUnit.uiState == UIState.WaitOpen) {
						this.showPanel(uiScript, uiUnit, parentNode);
						if (caller && callBack) callBack.apply(caller, [uiUnit.ui]);
					}
				}))
			}else{
				this.showPanel(uiScript, uiUnit, parentNode);
				if (caller && callBack) callBack.apply(caller, [uiUnit.ui]);
			}
		}
	}

	/**
	 * 预加载UI
	 * @param uiScript 
	 * @param uiResPaths 
	 */
	public PreLoadUI<T>(uiScript: { new (): T; }, uiResPaths: string[], parentNode: Laya.Sprite = this.uiNode) {
		var uiName = uiScript.toString();		//UIPanel脚本名称
		var uiUnit = this.getUIUnit(uiName);	//获取ui管理单位,没有会生成一个
		//
		if (uiUnit.uiState > UIState.Error && uiUnit.uiState < UIState.Loading) {
			uiUnit.uiResPaths = uiResPaths;
			uiUnit.uiState = UIState.Loading;
			uiUnit.uiReleaseTime = 0;
			Laya.loader.load(uiUnit.uiResPaths, Laya.Handler.create(this, () => {
				if (uiUnit.uiState == UIState.Loading) {
					//生成实例
					if (!uiUnit.ui) {
						uiUnit.ui = new uiScript();
						// uiUnit.ui.mouseEnabled = true;
						// uiUnit.ui.mouseThrough = false;
					}
					parentNode.addChild(uiUnit.ui);
					this.setSpriteFullScreen(uiUnit.ui);
					uiUnit.ui.hide();
					uiUnit.ui.visible = false;
				}
			}))
		}
	}


	/**
	 * 显示Panel
	 * @param uiName ui名称
	 * @param args 开启参数
	 * @param uiReleaseTime UIPanel资源生存时间
	 */
	public ShowUI<T>(uiScript: { new (): T; }, uiResPaths: string[], caller: any = null, callBack: Function = null) {
		this.tryShowUI(uiScript, uiResPaths, caller, callBack, this.uiNode);
	}

	/**
	 * 显示Panel
	 * @param uiName ui名称
	 * @param args 开启参数
	 * @param uiReleaseTime UIPanel资源生存时间
	 */
	public ShowPopUI<T>(uiScript: { new (): T; }, uiResPaths: string[], caller: any = null, callBack: Function = null) {
		this.tryShowUI(uiScript, uiResPaths, caller, callBack, this.popNode);
	}

	/**
	 * 显示Panel
	 * @param uiName ui名称
	 * @param args 开启参数
	 * @param uiReleaseTime UIPanel资源生存时间
	 */
	public ShowMaskUI<T>(uiScript: { new (): T; }, uiResPaths: string[], caller: any = null, callBack: Function = null) {
		this.tryShowUI(uiScript, uiResPaths, caller, callBack, this.maskNode);
	}

	/**
	 * 关闭Panel
	 * @param uiScript ui脚本
	 * @param destroy 是否在关闭时销毁界面（默认不销毁）
	 */
	public HideUI<T>(uiScript: { new (): T; }, destroy: boolean = false, releaseTime: number = 15000) {
		var uiName = uiScript.toString();
		var uiUnit = this.getUIUnit(uiName);
		uiUnit.uiState = UIState.Hide;
		this.hidePanel(uiUnit);
		if (destroy) this.DestroyUI(uiScript, releaseTime);
	}

	/**
	 * 销毁Panel
	 * @param uiScript ui脚本
	 */
	public DestroyUI<T>(uiScript: { new (): T; }, releaseTime: number) {
		var uiName = uiScript.toString();
		var uiUnit = this.getUIUnit(uiName);
		if (uiUnit.ui) {
			uiUnit.ui.destroy();
			uiUnit.ui = null;
		}
		uiUnit.uiReleaseTime = releaseTime;
		uiUnit.uiState = UIState.Destroy;
	}

	/**
	 * 获取UIPanel控制脚本
	 * @param uiScript 
	 */
	public GetUI<T>(uiScript: { new (): T; }): T {
		var uiName = uiScript.toString();
		var uiUnit = this.getUIUnit(uiName);
		return uiUnit.ui as T;
	}
}