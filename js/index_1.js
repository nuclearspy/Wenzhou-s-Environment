        // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('index_1'),e_macarons);
    var option = {
    title : {
        text: '比一比谁家的空气更新鲜！',
        subtext: '来源：中国环保部数据中心'
    },
    legend: {
        data:['杭州','宁波','温州','嘉兴','湖州','绍兴','金华','衢州','舟山','台州','丽水'],
        y:'10%'
    },
    grid : {
        x : '10%',
        x2: '10%',
        y : '20%'
    },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        orient:'vertical',
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        },
        y:'center'
    },
    xAxis : [
        {
            type : 'value',
            min : 0,
            max: 12,
            scale:true,
            splitNumber : 12,
            axisLabel : {
                formatter: '{value} 月'
            }
        }
    ],
    yAxis : [
        {
            name : '空气质量达标天数',
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} 天'
            }
        }
    ],
    series : [
        {
            name:'杭州',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,11,103.2 ,6],
[2,21,59.3 ,8],
[3,23,60.1 ,7],
[4,24,58.1 ,7],
[5,20,58.5 ,9],
[6,24,52.7 ,11],
[7,29,43.3 ,10],
[8,28,44.3 ,9],
[9,27,45.1 ,9],
[10,25,58.4 ,10],
[11,14,73.1 ,10],
            ],
        },
        {
            name:'湖州',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,10,116.8 ,8],
[2,16,70.1 ,11],
[3,22,67.1 ,11],
[4,23,55.7 ,6],
[5,18,66.1 ,11],
[6,26,51.2 ,9],
[7,26,45.4 ,11],
[8,28,38.9 ,7],
[9,29,38.1 ,6],
[10,25,52.5 ,8],
[11,18,70.5 ,9],

            ],
        },
        {
            name:'嘉兴',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
    
            ],
        },
        {
            name:'金华',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,6,132.0 ,11],
[2,19,61.0 ,9],
[3,24,63.4 ,8],
[4,21,62.2 ,9],
[5,24,57.6 ,8],
[6,23,52.6 ,10],
[7,27,39.3 ,7],
[8,26,44.6 ,10],
[9,24,53.7 ,11],
[10,19,66.6 ,11],
[11,21,61.8 ,7],

            ],
        },
        {
            name:'丽水',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,7,130.2 ,9],
[2,20,57.8 ,6],
[3,22,63.5 ,9],
[4,21,62.8 ,10],
[5,25,54.7 ,5],
[6,24,46.1 ,6],
[7,31,34.3 ,5],
[8,29,34.5 ,5],
[9,30,40.2 ,7],
[10,29,49.5 ,6],
[11,30,49.4 ,4],

            ],
        },
        {
            name:'宁波',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,17,75.0 ,2],
[2,23,46.6 ,4],
[3,26,45.8 ,2],
[4,29,41.0 ,2],
[5,27,46.5 ,2],
[6,30,30.9 ,2],
[7,32,27.8 ,4],
[8,29,29.1 ,2],
[9,29,31.5 ,3],
[10,28,38.5 ,2],
[11,26,53.6 ,6],

            ],
        },
        {
            name:'衢州',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,7,130.2 ,10],
[2,20,57.8 ,7],
[3,22,63.5 ,10],
[4,21,62.8 ,11],
[5,25,54.7 ,6],
[6,24,46.1 ,7],
[7,31,34.3 ,6],
[8,29,34.5 ,6],
[9,30,40.2 ,8],
[10,29,49.5 ,7],
[11,30,49.4 ,5],

            ],
        },
        {
            name:'绍兴',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,12,109.8 ,7],
[2,19,65.1 ,10],
[3,25,59.8 ,6],
[4,23,60.6 ,8],
[5,22,56.7 ,7],
[6,22,49.0 ,8],
[7,25,43.3 ,9],
[8,26,45.8 ,11],
[9,27,45.4 ,10],
[10,24,58.0 ,9],
[11,16,79.2 ,11],

            ],
        },
        {
            name:'台州',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,18,77.8 ,4],
[2,26,42.3 ,3],
[3,23,54.7 ,3],
[4,29,44.3 ,3],
[5,29,52.3 ,3],
[6,30,35.1 ,3],
[7,32,27.1 ,2],
[8,28,29.8 ,3],
[9,29,32.8 ,4],
[10,28,42.9 ,3],
[11,28,48.2 ,3],

            ],
        },
        {
            name:'温州',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'rectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,18,76.1 ,3],
[2,28,38.0 ,2],
[3,25,55.3 ,4],
[4,29,49.5 ,5],
[5,28,52.8 ,4],
[6,31,36.2 ,4],
[7,32,27.6 ,3],
[8,29,30.4 ,4],
[9,30,31.1 ,2],
[10,28,46.3 ,4],
[11,29,46.0 ,2],

            ],
        },
        {
            name:'舟山',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                        return params.seriesName + ' :<br/>'
                           + params.value[0] + '月 ' + '排名：'
                           + params.value[3] + '<br/>' 
                           + '空气质量达标' + params.value[1] + '天 ' + '<br/>' 
                           + 'PM2.5浓度：' + params.value[2] + 'μg/m3 ';
                }
            },
            symbol: 'emptyrectangle',
            symbolSize:function (value){
                return Math.round(value[2] / 5);
            },
            data: [
[1,25,47.3 ,1],
[2,26,29.6 ,1],
[3,29,29.5 ,1],
[4,31,27.8 ,1],
[5,29,38.7 ,1],
[6,31,24.1 ,1],
[7,32,19.8 ,1],
[8,29,19.7 ,1],
[9,30,21.4 ,1],
[10,30,22.6 ,1],
[11,30,25.3 ,1],

            ],

        },

    ]
};
                    
                    
                    
                    
                    
                    //option
        
        // 为echarts对象加载数据 
        myChart.setOption(option); 