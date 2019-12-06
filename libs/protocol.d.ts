declare module net.protocol {

     /** 心跳 0*/
     class PingPongBean {
        code: 0;
        serviceTimeStamp: 1566812500448;
        time: 1566812500448;
        userId: "34808101";
    }

    class BaseMsgBean {
        code : number;
        /** "info" */
        level : string;
        /** "success" */
        content: string;
    }

    module lobby {

        /** 牌桌状态信息配置 */
        class TableStateConfigBean{
            id: number;
            remainTime: number;
            statusName: string;
        }

         /** 牌桌状态信息 */
        class TableSateBean {
            id: number;
            name: string; 
            remainTime: number;
            tickTime: number;
            timeName: string;
            /** 牌桌状态信息配置 */
            config : Array<TableStateConfigBean>;
        }

        /** 牌桌信息 */
        class TableInfoBean{
            betamount: "投注限额：500";
            id: "213";
            name: "A桌";
            /** 牌桌状态信息 */
            status: TableSateBean;
        }

        /** 牌桌数据信息 */
        class TableDataBean{
            /** 牌桌信息 */
            tableinfo : TableInfoBean;
            /** 牌桌历史记录 0和 1庄 2闲 4庄对 8闲对*/
            originalList : Array<number>;
        }

        /** 房间信息 */
        class RoomDataBean{
            /** 房间名称 */
            desc: "新手房";
            /** */
            levelId: 0;
            /** 房间ID */
            roomid: "3982";
            /** 房间状态 */
            state: "NORMAL";
            /** 房间牌桌列表 */
            tables : Array<TableDataBean>;
        }

        /** {"code":5021,"cmd":"onRoomInfo","desc":"收到房间桌台信息更新"} */
        class LobbyDataBean extends BaseMsgBean{
            /** 玩家uuid */
            userId: string;
            /** 玩家金币 */
            balance : number;
            /** 房间信息列表 */
            data : Array<RoomDataBean>;
        }
    }

    
   
}