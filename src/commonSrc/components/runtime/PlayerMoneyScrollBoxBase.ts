module common.component {

    export abstract class PlayerMoneyScrollBoxBase extends common.component.ScrollLabel{

        protected pointIndex : number = -1;

        /**
         * 默认转换方法，子类重写
         * @param curNum 
         */
        protected getCurTargetNumString( curNum : number ){
            var string = util.StringUtils.FormatGameMoney(curNum , this.pointIndex);
            return string;
        }

         /**
         * 直接完成滚动
         */
        public finish(){
            this.stopUpdate();
            this.curNum = this.targetNum;
            var str = util.StringUtils.FormatGameMoney(this.curNum , 2);
            this.text = str;
            if(this.finishCallBack){
                this.finishCallBack.run();
                this.finishCallBack = null;
            }
        }

        /**
         * 开始滚动数字
         * @param startNum 开始数字
         * @param targetNum 目标数字
         * @param duration 滚动时间 单位毫秒！！
         * @param prefix 滚动数字前缀
         * @param suffix 滚动数字后缀
         */
        public ScrollNum(targetNum : number,duration : number,finishCallBack : Laya.Handler,prefix : string = null,suffix : string = null){
            var startNum = parseFloat(this.text);
            var startStr = startNum.toString();
            this.pointIndex = startStr.indexOf(".");
            if(this.pointIndex == -1){
                this.pointIndex = 0;
            }else{
                this.pointIndex = startStr.length - 1 - this.pointIndex;
            }
            super.ScrollToNum(startNum,targetNum,duration,finishCallBack,prefix,suffix);
        }

    }

}