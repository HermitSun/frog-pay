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
      <!--充值金额-->
      <el-row>
        <el-col :span="3">
          <span class="font-small recharge-prompt">充值金额：</span>
        </el-col>
        <el-col :span="3">
          <el-radio v-model="rechargeAmount" label="10" border>10￥</el-radio>
        </el-col>
        <el-col :span="3">
          <el-radio v-model="rechargeAmount" label="20" border>20￥</el-radio>
        </el-col>
        <el-col :span="3">
          <el-radio v-model="rechargeAmount" label="50" border>50￥</el-radio>
        </el-col>
        <el-col :span="4">
          <el-input v-model="customRechargeAmount" placeholder="其他金额..."></el-input>
        </el-col>
      </el-row>
      <br/>
      <br/>
      <!--支付方式-->
      <el-row type="flex">
        <el-col :span="3">
          <span class="font-small recharge-prompt">支付方式：</span>
        </el-col>
        <el-radio-group v-model="rechargeMethod">
          <el-radio label="wechat">
            <el-image :src="require('./images/wechatpay.png')"
                      class="has-border"
                      style="width: 100px; height: 30px"
                      alt="微信支付"></el-image>
          </el-radio>
          <el-radio label="zfb">
            <el-image :src="require('./images/zfbpay.png')"
                      class="has-border"
                      style="width: 100px; height: 30px"
                      alt="微信支付"></el-image>
          </el-radio>
        </el-radio-group>
      </el-row>
      <br/>
      <br/>
      <!--应付金额-->
      <el-row type="flex">
        <el-col :span="24">
          <span class="font-small recharge-prompt">应付金额：</span>
          <span class="important-title"
                style="margin-left: 2vw">{{paymentAmount|formatMoney}} 元</span>
        </el-col>
      </el-row>
      <el-divider></el-divider>
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
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'Payment',
    filters: {
      formatMoney (money) {
        money = Number(money)
        return money.toFixed(2)
      }
    },
    data () {
      return {
        username: '测试账号',
        userAvatar: require('./images/avatar.jpg'),
        balance: 1000, // 余额
        rechargeAmount: '10', // 充值金额
        customRechargeAmount: '', // 自定义充值金额，分开是为了页面效果
        rechargeMethod: '' // 支付方式
      }
    },
    computed: {
      // 应付金额，可能需要加个上限
      // TODO: 超过一定量时会出现科学计数法，可能需要修改
      paymentAmount () {
        return this.customRechargeAmount ? this.customRechargeAmount : this.rechargeAmount
      }
    },
    watch: {
      customRechargeAmount (newVal) {
        if (newVal) {
          this.rechargeAmount = ''
        }
      }
    },
    methods: {
      doPay () {
        // 调支付接口
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
