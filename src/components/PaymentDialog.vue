<template>
  <el-dialog :visible.sync="dialogVisible"
             :before-close="handleDialogClose">
    <p>{{type}}</p>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleDialogClose">取 消</el-button>
        <el-button type="primary" @click="handleDialogClose">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
  export default {
    name: 'PaymentDialog',
    props: {
      showPayment: Boolean,
      type: String
    },
    data () {
      return {
        dialogVisible: this.showPayment
      }
    },
    methods: {
      doPay () {
        // 在这里调支付接口
      },
      handleDialogClose () {
        this.$confirm('确认关闭？')
          .then(() => {
            this.$emit('update:show-payment', false)
            this.$message.error('支付失败')
          })
          .catch(() => {
            // 什么都不做
          })
      }
    }
  }
</script>

<style scoped>

</style>
