<template>
    <div class="second-package-contain" ref="baseLineChart" style="width: 100%">
        <!-- 封装折线图的使用 -->
        <div class="title">baseLineChart</div>
        <line-echart
            :titleText="titleText"
            :color="color"
            :legendData="legendData"
            :xAxisData="xAxisData"
            :yAxisData="yAxisData"
            :seriesData="seriesData"
        ></line-echart>
    </div>
</template>
<script>
import lineEchart from '@/components/lineEchart'
export default {
    components: {
        lineEchart,
    },
    data() {
        return {
            titleText: 'Base Line EChart Example',
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
