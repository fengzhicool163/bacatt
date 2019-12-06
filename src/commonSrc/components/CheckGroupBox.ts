
module common.component{
    
    export class CheckGroupBox extends UIComponent {

        protected bindObj : Laya.Box;

        private checkGroup: Laya.CheckBox[];
        private caller: any;
        private callback: Function;
        private index: number = 0;
        private prev: Laya.CheckBox;

        public initComponents(){
            //
            this.checkGroup = [];
            for (let index = 0; index < this.bindObj.numChildren; index++) {
                const child = this.bindObj.getChildAt(index);
                var checkBox = child as Laya.CheckBox;
                if(checkBox) {
                    this.checkGroup.push(checkBox)
                    checkBox.selected = false;
                    checkBox.on(Laya.Event.CHANGE, this, this.changeState, [checkBox]);
                }
            }
        }

        public destory() {
            this.checkGroup.forEach(value => {
                value.off(Laya.Event.CHANGE, this, this.changeState);
            });
            this.checkGroup = null;
            super.destroy();
        }

        private changeState(item: Laya.CheckBox) {
            if (this.prev && this.prev != item) {
                this.prev.selected = false;
                this.prev.mouseEnabled = true;
            }
            item.mouseEnabled = false;
            this.index = this.checkGroup.indexOf(item);
            let bl = this.prev ? this.prev.mouseEnabled : true;
            if (this.caller && this.callback && bl) {
                this.callback.apply(this.caller);
            }
            this.prev = item;
        }


        public set selectIndex(value: number) {
            let cb = this.checkGroup[value];
            cb.selected = true;
        }
        public get selectIndex(): number {
            return this.index;
        }

        public setGrayIndex(value: number, gray: boolean) {
            let cb = this.checkGroup[value];
            cb.mouseEnabled = !gray;
            cb.gray = gray;
            if (gray) cb.selected = false;
        }

        public reset() {
            this.checkGroup.forEach(value => {
                value.selected = false;
                value.gray = false;
                value.mouseEnabled = true;
            });
            if (this.prev) {
                this.prev = null;
            }
        }

        public setToggleChangeFunc( caller: any, callback: Function ){
            this.caller = caller;
            this.callback = callback;
        }

    }
}