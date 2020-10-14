<template>
  <div class="body_div">
    <div>
      <el-button style="float:right" type="primary" @click="toggle">{{
        btn ? "图表" : "表格"
      }}</el-button>
    </div>
    <div>
      <ul style="overflow-x:hidden;" :class="['look_page', btn ? 'active_page' : 'not_active_page']" 
      
      >
         <li >
           <div id="main" style="width:1000px;height:500px;margin:auto"></div>
         </li>
        <li class="tableList">
          <el-table :data="shoppingList" stripe style="width: 100%">
            <el-table-column type="index" label="索引" width="230">
            </el-table-column>
            <el-table-column prop="shoppingName" label="水果" width="280">
            </el-table-column>
            <el-table-column prop="num" label="数量"  width="280"> </el-table-column>
            <el-table-column prop="price" label="价格"> </el-table-column>
          </el-table>
        </li>
       
      </ul>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      btn: true,
      shoppingList: [
        {
          id: 1,
          shoppingName: "苹果",
          num: 7,
          price: 12,
          warehouseNum:15
        },
        {
          id: 2,
          shoppingName: "香蕉",
          num: 40,
          price: 15,
          warehouseNum:28
        },
        {
          id: 3,
          shoppingName: "葡萄",
          num: 30,
          price: 30,
          warehouseNum:6
        },
      ],
    };
  },
  mounted(){
    var myChart = echarts.init(document.getElementById('main'));
    var  option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '苹果', '香蕉', '葡萄'],
        source: [
            {product: '第一天', '苹果': 43.3, '香蕉': 85.8, '葡萄': 93.7},
            {product: '第二天', '苹果': 83.1, '香蕉': 73.4, '葡萄': 55.1},
            {product: '第三天', '苹果': 86.4, '香蕉': 65.2, '葡萄': 82.5},
        ]
    },
       xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            // data: []
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};

myChart.setOption(option);

  },
  created(){
    // this. echartsTable()
  },
  methods: {
    toggle() {
      this.btn = !this.btn;
    },
    // echartsTable(){
    //             this.option.xAxis.data = this.shoppingList.map((item,index)=>{
    //               return item.shoppingName;
    //             })
    // }
  },
}
</script>
<style scoped>
body{
overflow-x:hidden; 
}
ul > li {
  list-style: none;
}
.look_page {
  width: 200%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
}

.look_page > li {
  width: 50%;
  float: left;
  height: 98%;
  box-sizing: border-box;
}
.active_page {
  transform: translateX(-50%);
  transition: all 1s ease-in-out;
}

.not_active_page {
  transition: all 1s ease-in-out;
}
.tableList{
  padding:100px 40px;

}
/* .body_div{
  scroll:none;
} */
</style>