
/** 主玩家信息管理器 */
class UserInfoManger {

    /************ 玩家数据 *****************/
    /** 玩家头像 */
    protected static avatar: string;
    /** 玩家名称 */
    protected static userName: string;
    /** 玩家id */
    protected static userId: string;
    /** 玩家金币 */
    protected static balance: number;

    public static clearData(){
        this.avatar = null;
        this.userName = null;
        this.userId = null;
        this.balance = null;
    }

    /** 设置玩家数据 */
    public static setUserData(userData: httpBean.UserInfoBean) {
        this.userName = userData.username;
        this.userId = userData.id.toString();
    }

    /** 设置玩家头像 */
    public static setUserHeadData( userData: httpBean.UserHeadBean ){
        this.avatar = userData.avatar || "05";
    }

    /** 设置玩家金币数 */
    public static setUserBalance( userData : httpBean.UserBalanceInfoBean){
        this.balance = userData.balance;
    }

    public static get Avatar(): string {
        return this.avatar;
    }

    public static get UserName(): string {
        return this.userName;
    }

    public static get UserId(): string {
        return this.userId;
    }

    public static get Balance(): number {
        return this.balance;
    }
}