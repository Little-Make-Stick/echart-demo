<template>
    <div class="contain">
        <div class="echary-demo" ref="echartDemo">
            
        </div>
    </div>
</template>
<script>
var echarts = require('echart')
    export default{
        data(){
            return{}
        },
        watch:{},
        computed:{},
        created(){
            var myChart = echarts.init(this.$refs.echartDemo);
            window.onresize = function() {
                myChart.resize();
            };
        },
        mounted(){},
        methods:{},
    }
</script>
<style scope>
</style>