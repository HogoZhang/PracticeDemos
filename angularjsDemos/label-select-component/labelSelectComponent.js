(function (angular) {
    angular.module('labelApp').component('labelSelectComponent', {
        templateUrl: "http://127.0.0.1:5500/label-select-component/labelSelectComponent.html",
        bindings:{
            labelConfig:'<',
            minRows:'<',
            maxRows:'<',
            getSelected:'&'
        },
        controller: function () {
            this.more = false;
            this.minRows = this.minRows || 1;
            this.activeLabels = [];
            this.getLabels = (()=>{
                let itemWidth = 126;
                let wrapWidth = document.getElementsByClassName('labels-box')[0].style.width-60;
                let initWrapWidth = wrapWidth*this.minRows;
                return {
                    labelsLength:Math.ceil(initWrapWidth/itemWidth),
                    currentRows:this.maxRows?this.maxRows:Math.ceil(itemWidth*this.labelConfig.list.length/wrapWidth)
                }
            });
            this.select = (selected=>{
                if(this.activeLabels.indexOf(selected)>-1) {
                    _.remove(this.activeLabels,item=>{
                        return item === selected;
                    });
                }else {
                    if(!this.labelConfig.type || this.labelConfig.type==='single') {
                        this.activeLabels = [selected];
                    }else if(this.labelConfig.type === 'multi') {
                        this.activeLabels.push(selected);
                    }else {
                        throw new Error('labelConfig.type String is not invalid in labelSelectComponent');
                    }
                }
                this.getSelected({selected:this.activeLabels});
            })
        }    
    });

    // let temp = require('./labelSelectComponent.html')

})(window.angular);