module common.component {

    export class ScrollLabel extends laya.ui.Label{

        protected isUpdate = false;

        protected prefix : string = null;
        protected suffix : string = null;

        protected startNum : number = 0;
        protected targetNum : number = 0;
        protected addNum : number = 0;
        public curNum : number = 0;
        protected duration : number = 0;
        protected curOverTime : number = 0;

        protected finishCallBack : Laya.Handler;

        /**
         * 默认转换方法，子类重写
         * @param curNum 
         */
        protected getCurTargetNumString( curNum : number ){
            return curNum.toFixed(2).toString();
        }

        protected setCurTargetNum( curNum : number , isLayout : boolean = false ){
            var curString = this.getCurTargetNumString(curNum);
            if(this.prefix) curString = this.prefix + curString;
            if(this.suffix) curString = curString + this.suffix;
            if(isLayout){
                this.text = curString;
            }else{
                this.changeText(curString);
            }
            
        }

        protected scrollUpdate(){
            var dt = this.timer.delta; //该帧执行时间
            this.curOverTime += dt;
            if(this.curOverTime >= this.duration){
                this.finish();
            }else{
                this.curNum = this.startNum + this.curOverTime / this.duration * this.addNum;
                this.setCurTargetNum( this.curNum );
            }
        }

        protected startUpdate(){
            if(!this.isUpdate){
                this.isUpdate = true;
                this.timer.frameLoop(1,this,this.scrollUpdate);
            }
        }

        protected stopUpdate(){
            if(this.isUpdate){
                this.isUpdate = false;
                this.timer.clear(this,this.scrollUpdate);
            }
        }

        protected startScroll(){
            this.curOverTime = 0;
            this.setCurTargetNum(this.startNum,true);
            this.startUpdate();
        }

        /**
         * 开始滚动数字
         * @param startNum 开始数字
         * @param targetNum 目标数字
         * @param duration 滚动时间 单位毫秒！！
         * @param prefix 滚动数字前缀
         * @param suffix 滚动数字后缀
         */
        public ScrollToNum(startNum : number,targetNum : number,duration : number,finishCallBack : Laya.Handler,prefix : string = null,suffix : string = null){
            this.finishCallBack = finishCallBack;
            this.prefix = prefix;
            this.suffix = suffix;
            this.curNum = this.startNum = startNum;
            this.targetNum = targetNum;
            this.addNum = this.targetNum - this.startNum;
            this.duration = duration;
            if(duration == 0){
                this.setCurTargetNum(targetNum);
            }else{
                this.startScroll();
            }
        }

        /**
         * 直接完成滚动
         */
        public finish(){
            this.stopUpdate();
            this.curNum = this.targetNum;
            this.setCurTargetNum(this.curNum,true);
            if(this.finishCallBack){
                this.finishCallBack.run();
                this.finishCallBack = null;
            }
        }

    }

}