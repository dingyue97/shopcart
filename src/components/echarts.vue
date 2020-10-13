<template>
  <div>
    <div>
      <el-button type="primary" @click="toggle">{{
        btn ? "图表" : "表格"
      }}</el-button>
    </div>
    <div>
      <ul :class="['look_page', btn ? 'active_page' : 'not_active_page']">
         <li>
           <div id="main" style="width:600px;height:400px"></div>
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
        },
        {
          id: 2,
          shoppingName: "香蕉",
          num: 40,
          price: 15,
        },
        {
          id: 3,
          shoppingName: "葡萄",
          num: 30,
          price: 30,
        },
        {
          id: 4,
          shoppingName: "提子",
          num: 8,
          price: 20,
        },
      ],
    };
  },
//   mounted:{
//     option = {
//     legend: {},
//     tooltip: {},
//     dataset: {
//         dimensions: ['product', '2015', '2016', '2017'],
//         source: [
//             {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
//             {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
//             {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
//             {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
//         ]
//     },
//     xAxis: {type: 'category'},
//     yAxis: {},
//     // Declare several bar series, each will be mapped
//     // to a column of dataset.source by default.
//     series: [
//         {type: 'bar'},
//         {type: 'bar'},
//         {type: 'bar'}
//     ]
// },

  // },
  methods: {
    toggle() {
      this.btn = !this.btn;
    },
  },
};
</script>
<style scoped>
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
  padding:20px 40px;
}
</style>