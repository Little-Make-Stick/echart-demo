<template>
    <div class="second-package-contain" ref="basePieChart" style="width: 100%">
        <!-- 封装饼图的使用 -->
        <div class="title">basePieChart</div>
        <pie-echart
            :titleText="titleText"
            :color="color"
            :legendData="legendData"
            :xAxisData="xAxisData"
            :yAxisData="yAxisData"
            :seriesData="seriesData"
        ></pie-echart>
    </div>
</template>
<script>
import pieEchart from '@/components/pieEchart'
export default {
    components: {
        pieEchart,
    },
    data() {
        return {
            titleText: 'Base Pie EChart Example',
            color: ['lightblue', 'green', 'brown', 'orange', 'cyan'],
            legendData: ['milk', 'tea', 'coffee'],
            xAxisData: [],
            yAxisData: [],
            seriesData: [
                {
                    name: 'milk',
                    data: 33
                },
                {
                    name: 'tea',
                    data: 54
                },
                {
                    name: 'coffee',
                    data: 13
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
