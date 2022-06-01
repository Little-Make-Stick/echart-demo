<template>
    <div class="line-echart-component-contain" ref="baseLineChart" style="width: 100%">
        <!-- 折线图二次封装 -->
        <div class="echart-demo" ref="echartDemo" style="width: 100%"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
    props: {
        titleText: { type: String, default: 'Base Line EChart Example' },
        color: { type: Array },
        legendData: { type: Array },
        xAxisData: { type: Array },
        yAxisData: { type: Array },
        labelVisible: { type: Boolean, default: true },
        labelPosition: { type: String, default: 'bottom' },
        seriesData: { type: Array },
    },
    data() {
        return {
            myChart: null,
            option: {
                title: {
                    text: 'Base Line EChart Example',
                },
                tooltip: {},
                color: [],
                legend: {
                    data: ['value'],
                },
                xAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D', 'E'],
                },
                yAxis: {
                    type: 'value',
                    data: [],
                },
                series: [
                    // {
                    //     data: [10, 22, 28, 23, 19],
                    //     type: "line",
                    //     name: 'value',
                    //     label: {
                    //         show: true,
                    //         position: "bottom",
                    //         textStyle: {
                    //             fontSize: 20,
                    //         },
                    //     },
                    // },
                ],
            },
        }
    },
    watch: {},
    computed: {},
    created() {
        this.option.title.text = this.titleText
        this.option.color = this.color
        this.option.legend.data = this.legendData
        this.option.xAxis.data = this.xAxisData
        this.option.yAxis.data = this.yAxisData
        this.seriesData.forEach((row) => {
            this.option.series.push({
                data: row.data,
                type: 'line',
                name: row.name,
                label: {
                    show: this.labelVisible,
                    position: this.labelPosition,
                    textStyle: {
                        fontSize: 20,
                    },
                },
            })
        })
        console.log(this.option)
    },
    mounted() {
        this.myChart = echarts.init(this.$refs.echartDemo, null, {
            height: 400,
        })
        this.$nextTick(function () {
            this.draw()
        })
        // 窗口尺寸改变时自动重绘图表
        window.onresize = this.myChart.resize
        // window.onresize = () => this.myChart.resize();
    },
    methods: {
        draw() {
            // 绘制图表
            this.option && this.myChart.setOption(this.option)
        },
    },
}
</script>
<style scope></style>
