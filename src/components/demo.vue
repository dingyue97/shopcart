<template>
    <div id="shoppingCart"> 
         <!--<mt-checklist 
        v-model="value"
        :options="shoppingList">
        </mt-checklist>-->
        
        
        <ul class="cartHeader">
            <li>
                <input type="checkbox" class="mini-checkbox" id="selectAll" ref="allchecks" v-model="allChecked" @click="select()"/>
            </li>
            <li>商品</li>
            <li>数量</li>
            <li>单价</li>
            <li>编辑</li>
        </ul>
        <ul class="cartContains">
            <li v-for="(item,index) in shoppingList" :id="item.id" :price="item.price">
                <span>
                    <input type="checkbox" class="sonSelect" ref="sonchecks" v-model="item.sonChecked" @click="sonChecked($event)"/>
                </span>
                <span>
                    {{item.shoppingName}}
                </span>
                <span>
                    <a href="javascript:;" class="reduce" @click="reduce(index)">-</a>
                    <input type="number" class="num" v-model="item.num" ref="num"/>
                    <a href="javascript:;" class="plus" @click="plus(index)">+</a>
                    
                </span>
                <span>{{item.price}}</span>
                <span class="delete" @click="del(index)">删除</span>
            </li>
        </ul>
        <div class="shoppingBot">
            <span class="totalPrice">总价 {{totalPrice}}</span>
            <span class="totalNum">数量 {{totalNum}}</span>
        </div>
        <tabbar></tabbar>
    </div>
      
</template>

<script>
//  import Vue from 'vue'
    import Tabbar from '@/components/tabbar'
    import { MessageBox } from 'mint-ui';
    //复选框插件
//  import { Checklist } from 'mint-ui';
//  Vue.component(Checklist.name, Checklist);

export default {
    name: '',
    data () {
        return {    
            allChecked:false,
            totalPrice:0,
            totalNum:0,
            checkedNames:[],
            shoppingList:[
                {
                    'id':1,
                    'shoppingName':'第一个',
                    'num':1,
                    'price':12,
                    'sonChecked':false
                },
                {
                    'id':2,
                    'shoppingName':'第二个',
                    'num':2,
                    'price':13,
                    'sonChecked':false
                },
                {
                    'id':3,
                    'shoppingName':'第三个',
                    'num':3,
                    'price':14,
                    'sonChecked':false
                },
                {
                    'id':4,
                    'shoppingName':'第四个',
                    'num':4,
                    'price':15,
                    'sonChecked':false
                }
                
                
            ]
                
            
        }       
    },
    methods:{
        //减减index参数是下标
        reduce(index){
            var that=this;
            var list = this.shoppingList;
            var num = list[index].num;          
            if(num>1){
                num = num - 1;
                list[index].num = num;
            }
            setTimeout(function(){
                that.total();
            },500)
            
        },
        //加加 index是下标
        plus(index){
            var that=this;
            var list = this.shoppingList;
            var num = list[index].num;
            num = num + 1;
            list[index].num = num
            setTimeout(function(){
                that.total();
            },500)
        },
        //删除
        del(index){
            MessageBox.confirm('', { 
             message: '您确定删除这条数据么？~', 
             title: '删除', 
             confirmButtonText: '确认', 
             cancelButtonText: '取消' 
             }).then(action => { 
             if (action == 'confirm') {     //确认的回调
                  this.shoppingList.splice(index,1);//删除数组中的一个元素
             }
             }).catch(err => { 
             if (err == 'cancel') {     //取消的回调
                console.log(2);
             } 
             });

        },
        //全部选中事件处理
        select(){
            var that=this;
            if(that.$refs.allchecks.checked==true){
            
                that.shoppingList.forEach(function(val,index){
                    val.sonChecked=true;
                    setTimeout(function(){
                        that.total();
                    },500)
                })
            }else{
                that.shoppingList.forEach(function(val,index){
                    val.sonChecked=false;
                    setTimeout(function(){
                        that.total();
                    },500)
                })
            }
        },
        //单个选中
        sonChecked(e){
            var that=this;
            var soncheckLen=that.shoppingList.length;           
            //被选中的元素
            if(e.target.checked){//如果是被选中了那么添加在默认的数组里 以便最后去判断
                that.checkedNames.push(e.target.checked);
                if(that.checkedNames.length==soncheckLen){
                    that.allChecked=true;
                }else{
                    that.allChecked=false;
                }
            }else{
                that.allChecked=false;
            }
            setTimeout(function(){
                that.total();
            },500)
        },
        total() {
            var price=0;
            var numb=0;
            var list = this.shoppingList;
            for(var i = 0; i < list.length; i++) {
                if(list[i].sonChecked) {
                    price += list[i].num * list[i].price;
                    numb += list[i].num;
                }               
                this.totalPrice = price;
                this.totalNum = numb;
            }
        }
    },
    computed:{


    },
    components:{
        tabbar:Tabbar
    }
  }

</script>

<style lang="less">
    #shoppingCart{
        width:100%;
        .cartHeader{
            width: 100%;
            li{
                float: left;
                width:22%;
                text-align: center;
                line-height: 0.6rem;
            }
            li:nth-child(1){
                width:10%;
            }
        }   
        .cartContains{
            width:100%;
            li span{
                display: block;
                float: left;
                width:22%;
                text-align: center;
                line-height: 0.6rem;
                input{
                    width:0.4rem;
                    text-align: center;
                    border-left:0.02rem solid #ccc;
                }
            }
            li span:nth-child(1){
                width:10%;
            }
        }
    }
</style>