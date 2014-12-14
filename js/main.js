        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('main'),e_macarons);
        var option = {
    title : {
        text: '这些年我们身边的环境都发生了哪些你不知道的变化',
        subtext: '来源:温州市环保局'
    },
    grid : {
        x:'10%',
        x2:'10%',
        y:'25%'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['水质综合评价','空气质量优良率%','市区环境噪音/分贝','交通噪音/分贝'],
        y:'15%'
    },
    toolbox: {
        show : true,
            orient:'vertical',
            feature : {
            mark : {show: true},

            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true},
            y : 'center'
        },
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : [2010,2011,2012,2013,'2014·11月止']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        },
        {
            type : 'value',
            axisLabel : {
                formatter: '百分比%'
            }
        }
    ],
    series : [
        {
            name:'水质综合评价',
            type:'line',
            data:[70,70,70,70,100],
            markPoint : {
                data : [
                    {name: '优秀：温州首次从良好变为优秀。', value: 100, xAxis: '2014·11月止', yAxis: 100}, 
                ]
            }
        },
        {
            name:'空气质量优良率%',
            type:'line',
            data:[92.60,92.05,94.25,68.77,91.10],
            markPoint : {
                data : [
                    {type : 'min', name: '2013年是温州空气质量最差的一年'}
                ]
            }
        },
        {
            name:'市区环境噪音/分贝',
            type:'line',
            data:[60,58,55.9,54.8],
            markPoint : {
                data : [
                    {type : 'max', name: '噪音的最大值，每年都在降低'}
                ]
            }
        },
        {
            name:'交通噪音/分贝',
            type:'line',
            data:[73.3,70.8,69.7,68.1],
            markPoint : {
                data : [
                    {type : 'max', name: '噪音的最大值，每年都在降低'}
                ]
            }
        },
    ]
};
                    
                    //option
        
        // 为echarts对象加载数据 
        myChart.setOption(option); 