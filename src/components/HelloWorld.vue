<template>
  <div id="shoppingCart">
    <!--<mt-checklist 
        v-model="value"
        :options="shoppingList">
    </mt-checklist>-->

  <el-row>
       <ul class="cartHeader">
      <li>
        <input
          type="checkbox"
          v-model="allChecked"
          class="mini-checkbox"
          id="selectAll"
          ref="allchecks"
          @click="allCheckedFn($event)"
        />
      </li>
      <li>商品</li>
      <li>数量</li>
      <li>单价</li>
      <li>编辑</li>
    </ul>
    <ul class="cartContains">
      <li class="jisuan" v-for="(item,index) in shoppingList" :key="item.id">
        <span>
          <input
            type="checkbox"
            class="sonSelect"
            v-model="item.sonChecked"
            @click="sonChecked($event)"
          />
        </span>
        <span style="transform:translateX(20px)">{{item.shoppingName}}</span>
        <span>
          <a href="#" class="reduce" @click="reduce(index)">-</a>
          <input type="number" class="num" v-model="numberNum" />
          <a href="#" class="plus" @click="plus(index)" :index="numberNum">+</a>
        </span>
        <span style="transform:translateX(-70px)">{{item.price}}</span>
        <button class="delete" style="transform:translateX(-32px) " @click="del(index)">删除</button>
      </li>
    </ul>

    <div class="shoppingBot">
      <span class="totalPrice">
        总价:
        <span @change="allPriceNum">{{allPrice}}</span>
      </span>
      <span class="totalNum" >
        数量:
        <span @change="totalNumChange(value)">{{totalNum}}</span>
      </span>
    </div>
  </el-row>
  </div>
</template>

<script>
 import {MessageBox} from "element-ui";

export default {
  data() {
    return {
      // 全选按钮状态
      allChecked: false,
      // 存放单个选中的按钮
      checkList: [],
      checkednum:0,
      numberNum:1,
      // 总价
      allPrice:0,
      // 数量
      totalNum:0,
      // 商品列表
      shoppingList: [
        {
          id: 1,
          shoppingName: "苹果",
          num: 1,
          price: 12,
          sonChecked: false,
        },
        {
          id: 2,
          shoppingName: "香蕉",
          num: 2,
          price: 13,
          sonChecked: false,
        },
        {
          id: 3,
          shoppingName: "葡萄",
          num: 3,
          price: 14,
          sonChecked: false,
        },
        {
          id: 4,
          shoppingName: "提子",
          num: 4,
          price: 15,
          sonChecked: false,
        },
      ],
    };
  },
  methods: {
    // 单个选中
    sonChecked(e) {
      let that = this
      // 把数据存起来
      let shoplen = this.shoppingList.length;
      // 被选中
      if (e.target.checked) {
        // 定义一个checkednum为0
        that.checkednum++
      }else{
        that.checkednum--
      }
      if(that.checkednum == shoplen){
        // 全选为true
        that.allChecked = true
      }else{
        that.allChecked = false
      }
    },
    // 全选
    allCheckedFn(e) {
      if(e.target.checked){
        this.checkedNum = this.shoppingList.length
        this.shoppingList.forEach((item,index) => {
        item.sonChecked = true;
        });
        }else{
          this.shoppingList.forEach((item, index) => {
          item.sonChecked = false;
         
        });
        }
      
        
      
    },
    // 总价
    allPriceNum(){
      this.allPrice = (this.checkednum+this.numberNum)*this.shoppingList.price
    },
    //删除
    del(value){
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(action == 'confirm'){
            this.shoppingList.numberNum - 1
          }
          this.$message({
            type: 'success',
            message: '删除成功!'
            
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

    },
    // 数量
    totalNumChange(value){
      console.log(value)
      this.totalNum = this.checkednum+this.numberNum
    },
    // 加
    plus(index){
      // this.numberNum=this.shoppingList.num
      this.numberNum++
      if(this.numberNum>9){
        this.numberNum = 9
      }
    },
    //减
    reduce(index) {
     if(this.numberNum == 0){
       this.numberNum == 0
     }else{
       if(this.numberNum > 0){
         this.numberNum--
       }else{
         this.numberNum == 0
       }
     }
    },
  },
};
</script>


<style scoped>
.button {
  background-color: #ccc;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
#shoppingCart {
  width: 100%;
}
.cartHeader {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.cartContains {
  width: 100%;
  padding-top: 50px;
}

.shoppingBot {
  transform: translate(370px, 330px);
}
.totalNum {
  padding-left: 30px;
}
.jisuan {
  width: 100%;
  padding-left: 20px;
  display: flex;
  justify-content: space-around;
  margin-top:20px;
}
</style>
