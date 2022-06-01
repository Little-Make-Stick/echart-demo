<template>
    <div class="second-package-contain" ref="baseBarChart" style="width: 100%">
        <!-- 封装柱状图的使用 -->
        <div class="title">baseBarChart</div>
        <bar-echart
            :titleText="titleText"
            :color="color"
            :legendData="legendData"
            :xAxisData="xAxisData"
            :yAxisData="yAxisData"
            :seriesData="seriesData"
        ></bar-echart>
    </div>
</template>
<script>
import barEchart from '@/components/barEchart'
export default {
    components: {
        barEchart,
    },
    data() {
        return {
            titleText: 'Base Bar EChart Example',
            color: ['lightblue', 'green', 'brown', 'orange', 'cyan'],
            legendData: ['milk', 'tea', 'coffee'],
            xAxisData: ['2022-02', '2022-03', '2022-04', '2022-05', '2022-06'],
            yAxisData: [],
            seriesData: [
                {
                    name: 'milk',
                    data: [10, 22, 28, 23, 19],
                },
                {
                    name: 'tea',
                    data: [90, 34, 12, 56, 76],
                },
                {
                    name: 'coffee',
                    data: [3, 54, 65, 44, 24],
                },
            ],
        }
    },
    watch: {},
    computed: {},
    created() {},
    mounted() {},
    methods: {},
}
</script>
<style scope></style>
