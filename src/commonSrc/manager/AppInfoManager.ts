
/** App信息管理器 */
class AppInfoManager {

    protected static jumpData: msgBean.jumpData = null;

    public static clearData(){
        this.jumpData = null;
    }

    /** 设置跳转数据 */
    public static setJumpData(paramsJson: msgBean.jumpData): void {
        //
        this.jumpData = paramsJson;
        //保存最新的本地缓存数据到本地
        SaveManager.getObj().initCommon(this.jumpData.token, this.jumpData.backUrl);
    }

    public static get Token(): string {
        return this.jumpData.token;
    }

    public static get GameId(): string {
        return this.jumpData.gameId.toString();
    }

    public static get ClientId() : string{
        return this.jumpData.clientId;
    }

    public static get jumpDataStr() : string{
        return JSON.stringify(this.jumpData);
    }
}