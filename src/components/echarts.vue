<template>
  <div class="body_div">
    <div>
      <el-button style="float: right" type="primary" @click="toggle">{{
        btn ? "图表" : "表格"
      }}</el-button>
    </div>
    <div>
      <ul
        style="overflow-x: hidden"
        :class="['look_page', btn ? 'active_page' : 'not_active_page']"
      >
        <li>
          <div
            id="main"
            style="width: 100%; height: 500px; margin: 0 auto;overflow-x: hidden"
          ></div>
        </li>
        <li class="tableList">
          <el-table :data="shoppingList" stripe style="width: 100%">
            <el-table-column type="index" label="索引" width="230">
            </el-table-column>
            <el-table-column prop="shoppingName" label="水果" width="280">
            </el-table-column>
            <el-table-column prop="num" label="数量" width="200">
            </el-table-column>
            <el-table-column prop="warehouseNum" label="库存" width="200">
            </el-table-column>
            <el-table-column prop="price" label="平均价格"> </el-table-column>
          </el-table>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      btn: true,
      shoppingList: [
        {
          id: 1,
          shoppingName: "苹果",
          num: 7,
          price1: 12,
          price2: 32,
          price3: 19,
          price:0,
          warehouseNum: 15,
        },
        {
          id: 2,
          shoppingName: "香蕉",
          num: 40,
          price1: 27,
          price2: 45,
          price3: 25,
          price:0,
          warehouseNum: 28,
        },
        {
          id: 3,
          shoppingName: "葡萄",
          num: 30,
          price1: 12,
          price2: 54,
          price3: 60,
          price:0,
          warehouseNum: 6,
        },
      ],
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    var option = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ["product", "苹果", "香蕉", "葡萄"],
        source: [
          { product: "第一天价格", 苹果: this.shoppingList[0].price1, 香蕉:this.shoppingList[1].price1, 葡萄: this.shoppingList[2].price1},
          { product: "第二天价格", 苹果: this.shoppingList[0].price2, 香蕉:this.shoppingList[1].price2, 葡萄: this.shoppingList[2].price2},
          { product: "第三天价格", 苹果: this.shoppingList[0].price3, 香蕉: this.shoppingList[1].price3, 葡萄: this.shoppingList[2].price3},
        ],
      },
      xAxis: [
        {
          type: "category",
          axisTick: { show: false },
          // data: []
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    };

    myChart.setOption(option);
  },
  created() {
 this.publicPrice()

  },
  methods: {
    toggle() {
      this.btn = !this.btn;
    },
    publicPrice(){
      let publicPrice = 0;
     this.shoppingList.map((item,index)=>{
         publicPrice = (item.price1+item.price2+item.price3)/3
         console.log(parseInt(publicPrice),'6554643')
         
      })
      this.shoppingList.map((item,index)=>{
        item.price = parseInt(publicPrice)
        console.log( item.price,)
      })
      // this.shoppingList.price = parseInt(publicPrice)
      // console.log(this.shoppingList.price,'123132121')
     
    }

  },
};
</script>
<style scoped>
body {
  overflow-x: hidden;
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
.tableList {
  padding: 100px 40px;
}
.body_div{
  scroll:no;
}
</style>