<template>
    <div class="base-scatterchart-contain" ref="baseScatterChart" style="width: 100%">
        <div class="title">baseScatterChart</div>
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
                    xAxis: {},
                    yAxis: {},
                    series: [
                        {
                            type: "scatter",
                            data: [
                                [10, 5],
                                [0, 8],
                                [6, 10],
                                [2, 12],
                                [8, 9],
                            ],
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