<template>
    <div class="base-piechart-contain" ref="basePieChart" style="width: 100%">
        <div class="title">basePieChart</div>
        <div class="echart-demo" ref="echartDemo" style="width: 100%"></div>
    </div>
</template>
<script>
    import * as echarts from "echarts";
    export default {
        data() {
            return {
                myChart: null,
                option: {
                    // xAxis: {},
                    // yAxis: {},
                    series: [
                        {
                            type: "pie",
                            data: [
                                {
                                    value: 335,
                                    name: "直接访问",
                                },
                                {
                                    value: 234,
                                    name: "联盟广告",
                                },
                                {
                                    value: 1548,
                                    name: "搜索引擎",
                                },
                            ],
                            radius: "50%",
                        },
                    ],
                },
            };
        },
        watch: {},
        computed: {},
        created() { },
        mounted() {
            this.myChart = echarts.init(this.$refs.echartDemo, null, {
                height: 400,
            });
            this.$nextTick(function () {
                this.draw();
            });
            window.onresize = () => this.myChart.resize();
        },
        methods: {
            draw() {
                // 绘制图表
                this.myChart.setOption(this.option);
            },
        },
    };
</script>
<style scope></style>