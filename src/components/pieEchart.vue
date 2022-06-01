<template>
    <div class="pie-echart-component-contain" ref="basePieChart" style="width: 100%">
        <!-- 饼图的二次封装 -->
        <div class="echart-demo" ref="echartDemo" style="width: 100%"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
    props: {
        titleText: { type: String, default: 'Base Pie EChart Example' },
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
                    text: 'Base Pie EChart Example',
                },
                tooltip: {},
                color: [],
                legend: {
                    data: ['value'],
                },
                xAxis: {
                    type: 'category',
                    data: [],
                },
                yAxis: {
                    type: 'value',
                    data: [],
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            // {
                            //     value: 335,
                            //     name: "直接访问",
                            // },
                        ],
                        radius: '50%',
                    },
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
            this.option.series[0].data.push({
                value: row.data,
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
