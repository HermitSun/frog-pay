<template>
  <!--充值表单-->
  <el-form :model="rechargeForm"
           :rules="rechargeRules"
           ref="paymentChildForm"
           label-width="100px"
           hide-required-asterisk>
    <!--充值金额-->
    <el-form-item label="充值金额：" prop="rechargeAmount">
      <el-col :span="4">
        <el-radio v-model="rechargeForm.rechargeAmount" label="10" border>10￥</el-radio>
      </el-col>
      <el-col :span="4">
        <el-radio v-model="rechargeForm.rechargeAmount" label="20" border>20￥</el-radio>
      </el-col>
      <el-col :span="4">
        <el-radio v-model="rechargeForm.rechargeAmount" label="50" border>50￥</el-radio>
      </el-col>
      <el-col :span="5">
        <el-input v-model="rechargeForm.rechargeAmount"
                  placeholder="其他金额..."
                  clearable></el-input>
      </el-col>
    </el-form-item>
    <!--支付方式-->
    <el-form-item label="支付方式：" prop="rechargeMethod">
      <el-radio-group v-model="rechargeForm.rechargeMethod">
        <el-radio label="wechat">
          <el-image :src="require('views/payment/images/wechatpay.png')"
                    class="has-border"
                    style="width: 100px; height: 30px"
                    alt="微信支付"></el-image>
        </el-radio>
        <el-radio label="zfb">
          <el-image :src="require('views/payment/images/zfbpay.png')"
                    class="has-border"
                    style="width: 100px; height: 30px"
                    alt="支付宝支付"></el-image>
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <!--应付金额-->
    <el-form-item label="应付金额：">
      <div class="important-title">{{paymentAmount|formatMoney}} 元
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'PaymentForm',
    filters: {
      formatMoney (money) {
        money = Number(money)
        return money.toFixed(2)
      }
    },
    data () {
      let rechargeValidator = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择充值金额'))
        } else if (Number(value) < 10) {
          callback(new Error('最小充值金额为10元'))
        } else {
          callback()
        }
      }
      return {
        rechargeForm: {
          rechargeAmount: '', // 充值金额
          rechargeMethod: '' // 支付方式
        },
        rechargeRules: {
          rechargeAmount: [
            { validator: rechargeValidator, trigger: 'change' }
          ],
          rechargeMethod: [
            { required: true, message: '请选择支付方式', trigger: 'change' }
          ]
        }
      }
    },
    computed: {
      // 应付金额
      paymentAmount () {
        const MAX_RECHARGE = 10 ** 20
        return this.rechargeForm.rechargeAmount > MAX_RECHARGE ? MAX_RECHARGE : this.rechargeForm.rechargeAmount
      },
      paymentMethod () {
        return this.rechargeForm.rechargeMethod
      }
    }
  }
</script>

<style scoped>

</style>
