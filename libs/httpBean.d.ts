declare module httpBean {

    class UserHeadBean {
        "avatar": string;
        "firstLogin": true;
        "nickname": string;
        "userId": number;
        "userState": string;
    }

    class UserInfoBean {
        "id": number;
        "username": string;
        "signInCount": 0;
        "currentSignInAt": "2019-08-16 15:44:44";
        "lastSignInAt": "2019-08-15 18:57:56";
        "currentSignInIp": "192.168.11.106";
        "lastSignInIp": "192.168.11.106";
        "state": "NORMAL";
        "createTime": "2019-06-24 14:21:43";
        "modifyTime": "2019-08-16 15:44:43";
        "agentId": 3;
        "adminId": 31;
        "levelId": 1;
        "levelLock": false;
        "ifStopBetting": false;
        "registerIp": "192.168.14.58";
        "depth": 2;
        "prizeGroup": 1961;
        "role": "AGENT";
        "loginPlatform": "ANDROID";
        "isSigned": false;
        "keepSignInDays": 0;
        "minMemberPrizeGroup": 1900;
        "userType": 1;
        "needResetPwd": false;
        "certifiedPhone": false;
        "certifiedWeChat": false
    }

    class UserBalanceInfoBean {
        "balance": number;
    }

    
    class GameSocketBean{
        wsUrl: "ws://sqp01game.sit01.com/game/stake";
    }

    

}