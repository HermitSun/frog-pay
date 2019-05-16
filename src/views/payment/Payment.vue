<template>
  <el-card class="wrapper">
    <template #header>
      <el-row type="flex" justify="start">
        <el-col :span="1">
          <el-image :src="require('./images/coin.png')" alt="硬币图标"></el-image>
        </el-col>
        <el-col :span="4">
          <div class="header-title inline-block">充值中心</div>
        </el-col>
      </el-row>
      <br/>
      <el-row>
        <div class="text-left font-small">
          <p>1、xx币是xxx的虚拟货币，你可以使用xx币购买相应的虚拟物品和服务。</p>
          <br/>
          <p>2、xx币与人民币换算为1：1，即1元=1xx币，你可以选择支付宝或微信进行充值，xx币每次10个起充。</p>
        </div>
      </el-row>
    </template>
    <div class="body">
      <!--充值信息-->
      <div class="recharge-info">
        <el-row>
          <el-col :span="2">
            <el-image :src="userAvatar" alt="头像"></el-image>
          </el-col>
          <el-col :span="6">
            <div class="text-left font-small"
                 style="margin-top: 1vw; margin-left: 1vw;">
              <p>充值账号：<span class="recharge-font">{{username}}</span></p>
              <p>订单编号：<span class="recharge-font">{{$route.params.id}}</span></p>
            </div>
          </el-col>
          <el-col :span="1" :offset="11">
            <el-image :src="require('./images/coin.png')"
                      style="width: 20px; height: 20px; margin-top: 1.35vw"
                      alt="硬币图标"></el-image>
          </el-col>
          <el-col :span="4">
            <div class="font-small"
                 style="margin-top: 1.5vw; margin-left: -0.5vw">当前余额：{{balance}} xx币
            </div>
          </el-col>
        </el-row>
      </div>
      <br/>
      <br/>
      <!--支付表单-->
      <PaymentForm ref="paymentForm"></PaymentForm>
      <el-divider></el-divider>
      <!--底部支付栏-->
      <el-row>
        <el-col :span="4" :offset="1">
          <el-button type="primary"
                     @click="doPay">确认支付
          </el-button>
        </el-col>
        <el-col :span="18">
          <div class="font-small not-important"
               style="margin-top: 0.7vw">温馨提示：适度游戏，理性消费。遇到问题请拨打客服电话: 1234567890123。
          </div>
        </el-col>
      </el-row>
      <!--支付界面-->
      <!--利用v-if销毁来重建组件的生命周期，因为prop只会在生命周期开始时传递一次-->
      <PaymentDialog v-if="showPayment"
                     :show-payment.sync="showPayment"
                     :type="paymentMethod"
                     :amount="paymentAmount"></PaymentDialog>
    </div>
  </el-card>
</template>

<script>
  import { mapState } from 'vuex'
  import PaymentDialog from '@/components/PaymentDialog'
  import PaymentForm from '@/components/PaymentForm'

  export default {
    name: 'Payment',
    components: { PaymentForm, PaymentDialog },
    data () {
      return {
        username: '测试账号',
        userAvatar: require('./images/avatar.jpg'),
        balance: 1000, // 余额
        showPayment: false // 是否显示支付框
      }
    },
    computed: {
      ...mapState({
        paymentAmount: 'paymentAmount',
        paymentMethod: 'paymentMethod'
      })
    },
    methods: {
      doPay () {
        // 调支付接口在支付框里
        // 获取应付金额和进行表单验证
        // TODO:这里的内容耦合我解决不了。真的是语言机制的问题吗？
        const paymentForm = this.$refs['paymentForm']
        const paymentChildForm = paymentForm.$refs['paymentChildForm']
        paymentChildForm.validate((valid) => {
          if (valid) {
            this.showPayment = true
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 800px;
    margin: 4vw auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .header-title {
    margin-top: -0.2vw;
    font-size: 25px;
    font-weight: bold;
  }

  .body {
    text-align: left;
  }

  .recharge-info {
    background-color: rgba(39, 176, 214, .15);
    padding: 1vw;
  }

  .recharge-font {
    color: rgb(39, 176, 214);
  }

  .el-radio {
    margin-right: 3vw;
  }
</style>
