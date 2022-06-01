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
                    title: {
                        text: 'Base Bar EChart Example'
                    },
                    tooltip: {},
                    legend: {
                        data: ['value']
                    },
                    xAxis: {
                        type: 'category',
                        data: ['2022-01','2022-02','2022-03', '2022-04', '2022-05', '2022-06', '2022-07']
                    },
                    yAxis: {},
                    series: [
                        {
                            type: "scatter",
                            name: 'value',
                            // 这里以data形式则需要x轴的data组成一个点
                            data: [ 6, 9, 7, 3, 10, 12, 0 ],
                            // 以点集合则不需要x轴的data
                            // data: [ 
                            //     [10, 5],
                            //     [0, 8],
                            //     [6, 10],
                            //     [2, 12],
                            //     [8, 9],
                            // ],
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