<template>
    <div class="base-linechart-contain" ref="baseLineChart" style="width: 100%">
        <!-- 折线图--基本语法 -->
        <div class="title" >baseLineChart</div>
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
                        text: 'Base Line EChart Example'
                    },
                    tooltip: {},
                    color: [],
                    legend: {
                        data: ['value']
                    },
                    xAxis: {
                        type: "category",
                        data: ['A', 'B', 'C', 'D', 'E']
                    },
                    yAxis: {
                        type: "value",
                        data: []
                    },
                    series: [
                        {
                            data: [10, 22, 28, 23, 19],
                            type: "line",
                            name: 'value',
                            label: {
                                show: true,
                                position: "bottom",
                                textStyle: {
                                    fontSize: 20,
                                },
                            },
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
            // 窗口尺寸改变时自动重绘图表
            window.onresize = this.myChart.resize;
            // window.onresize = () => this.myChart.resize();
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