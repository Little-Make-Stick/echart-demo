<template>
    <div class="base-barchart-contain" ref="baseBarChart" style="width: 100%;">
        <!-- 柱状图--基本语法 -->
        <div class="title" style="line-height: 5vh;">baseBarChart</div>
        <div class="echart-demo" ref="echartDemo" style="width: 100%;"></div>
    </div>
</template>
<script>
    import * as echarts from 'echarts';
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
                        data: ['2015','2016','2017']
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
                    },
                    yAxis: {},
                    series: [
                        {
                            type: 'bar',
                            name: '2015',
                            data: [89.3, 92.1, 94.4, 85.4]
                        },
                        {
                            type: 'bar',
                            name: '2016',
                            data: [95.8, 89.4, 91.2, 76.9]
                        },
                        {
                            type: 'bar',
                            name: '2017',
                            data: [97.7, 83.1, 92.5, 78.1]
                        }
                    ]
                }
            }
        },
        watch: {
        },
        computed: {},
        created() {
        },
        mounted() {
            this.myChart = echarts.init(this.$refs.echartDemo, null, {
                height: 400
            });
            this.$nextTick(function () {
                this.draw();
            })
            // 窗口尺寸改变时自动重绘图表
            window.onresize = this.myChart.resize;
            // window.onresize = () => this.myChart.resize();

        },
        methods: {
            draw() {
                // 绘制图表
                this.myChart.setOption(this.option);
            }
        },
    }
</script>
<style scope></style>