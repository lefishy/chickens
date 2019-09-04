var model = {
    resources = {
        corn:{
            name:'corn',
            amount:0,
            known:false,
            rate:0,
        },
        chicken:{
            name:'chicken',
            amount:0,
            known:false,
            rate:0,
        },
        egg:{
            name:'egg',
            amount:0,
            known:false,
            rate:0,
        },
        feather:{
            name:'feather',
            amount:0,
            known:false,
            rate:0,
        },
        meat:{
            name:'meat',
            amount:0,
            known:false,
            rate:0,
        }
    },
    spouts = [],
};

var app = new Vue({
    el:'#app',
    data:model,
    methods: {
        forage:'doForage',
    }
});

function checkKnown() {
    Object.keys(model.resources).forEach(e => {
        if(model.resources[e].amount > 0) {
            model.resources[e].known = true;
        }
    });
}

function doForage() {
   model.resources.corn.amount += 1;
}