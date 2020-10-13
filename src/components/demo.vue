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
          <input type="number" class="num" v-model="item.num" />
          <a href="#" class="plus" @click="plus(index)" >+</a>
        </span>
        <span style="transform:translateX(-70px)">{{item.price}}</span>
        <button class="delete" style="transform:translateX(-32px) " @click="del(index)">删除</button>
      </li>
    </ul>

    <div class="shoppingBot">
      <span class="totalPrice">
        总价:
        <span >{{allPrice}}</span>
      </span>
      <span class="totalNum" >
        数量:
        <span >{{totalNum}}</span>
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
      totalNum:10,
      // 商品列表
      shoppingList: [
        {
          id: 1,
          shoppingName: "苹果",
          num: 1,
          price: 12,
          sonChecked: false,
          warehouseNum:4
        },
        {
          id: 2,
          shoppingName: "香蕉",
          num: 1,
          price: 13.01,
          sonChecked: false,
          warehouseNum:7
        },
        {
          id: 3,
          shoppingName: "葡萄",
          num: 1,
          price: 14.35,
          sonChecked: false,
          warehouseNum:6
        },
        {
          id: 4,
          shoppingName: "提子",
          num: 1,
          price: 15.24,
          sonChecked: false,
          warehouseNum:8
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
       setTimeout(function(){
          that.allPriceMoney();
        },500)

      
    },
    // 全选
    allCheckedFn(e) {
      if(e.target.checked){
        this.checkedNum = this.shoppingList.length
        this.shoppingList.forEach((item,index) => {
        item.sonChecked = true;
          setTimeout(()=>{
             this.allPriceMoney();
          },500)
        });
        
        }else{
          this.shoppingList.forEach((item, index) => {
          item.sonChecked = false;
          setTimeout(function(){
          this.allPriceMoney();
        },500)
         
        });
        }
      
        
      
    },
    // 总价和总数量
   allPriceMoney(){
      let numb=0
      let price=0
      // 获取购物车列表
      let list = this.shoppingList
      // 遍历列表长度
      for(let i = 0;i<list.length;i++){
        // 如果被选中了
        if(list[i].sonChecked){
           price += list[i].num*list[i].price
           numb += list[i].num
        } 
        // 总价
        this.allPrice = price
        // 总数量
        this.totalNum = numb
        
      }

    },

    
     
    //删除
    del(index){
      
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            console.log(this.shoppingList[index])
            this.shoppingList.splice(index,1);
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
    // 加
    plus(index){
      // 当前点击这行的商品数量存起来
      let warehouse =this.shoppingList[index].warehouseNum
      // 如果当点击的这行的数量超过库存
      if(this.shoppingList[index].num>=warehouse){
        // 就会等于这行数量
        this.shoppingList[index].num=warehouse
        alert('库存不够了')
      }else{
        // 当前点击的就会加加
        this.shoppingList[index].num++
      }
        setTimeout(()=>{
             this.allPriceMoney();
          },500)
     
    },
    // 减
    reduce(index) {
       if(this.shoppingList[index].num<=0){
         this.shoppingList[index].num=0
       }else{
         this.shoppingList[index].num--
       }
       setTimeout(()=>{
             this.allPriceMoney();
          },500)
    }
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
  transform: translate(370px, 300px);
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
