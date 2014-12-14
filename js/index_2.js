        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('index_2'),e_macarons);
        var option = {
    title : {
        text: '比一比谁家的空气更新鲜！',
        subtext: '来源：中国环保部数据中心'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['PM2.5平均浓度','空气质量达标天数'],
        y:'10%'
    },
    grid : {
        x : '10%',
        x2: '10%',
        y : '20%'
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
            type : 'category',
            boundaryGap : true,
            data : ['杭州','宁波','温州','嘉兴','湖州','绍兴','金华','衢州','舟山','台州','丽水']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'left',
            //min: 0,
            max: 70,
            //splitNumber: 5,
            axisLabel : {
                show:true,
                interval: 'auto',    // {number}
                formatter: '{value} μg/m³'
            },
        },
        {
            type : 'value',
            splitNumber: 15,
            axisLabel : {
                formatter: function (value) {
                    // Function formatter
                    return value + ' 天'
                }
            },
            max : 365,
            splitLine : {
                show: false
            }
        }
    ],
    series : [
        {
            name: 'PM2.5平均浓度',
            type: 'bar',
            data:[59.6,42.4,44.6,54.1,61.1,61.0,63.0,56.5,27.8,44.3,56.5],
            markPoint : {
                data : [
                    {name: '温州省内排名', value: 4, xAxis: '温州', yAxis: 44.6}, 
                    {name: '台州省内排名', value: 3, xAxis: '台州', yAxis: 44.3}, 
                    {name: '舟山省内排名', value: 1, xAxis: '舟山', yAxis: 27.8}, 
                    {name: '宁波省内排名', value: 2, xAxis: '宁波', yAxis: 42.4}, 
                ]
            }
        },

        {
            name:'空气质量达标天数',
            type: 'bar',
            yAxisIndex: 1,
            data: [246,296,307,266,241,241,234,268,322,300,268],
            markPoint : {
                data : [
                    {name: '温州省内排名', value: 2, xAxis: '温州', yAxis:307}, 
                    {name: '台州省内排名', value: 3, xAxis: '台州', yAxis:300}, 
                    {name: '舟山省内排名', value: 1, xAxis: '舟山', yAxis: 322}, 
                ]
            }
        }
    ]
};

                    //option
        
        // 为echarts对象加载数据 
        myChart.setOption(option); 