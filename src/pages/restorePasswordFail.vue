<template>
  <div>
    <Header/>
    <Form :form-info="formInfo"/>
    <div style="margin-bottom: 274px;">
      <Toaster :toaster-type="toasterType"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Form from "@/components/global/Form";
import Toaster from "@/components/global/Toaster";

export default {
  name: "restorePasswordFail",
  data() {
    return {
      formInfo: {
        login: 'RESTORE PASSWORD',
        enter: 'ENTER YOUR EMAIL TO RESTORE PASSWORD',
        disablePasswordField: true,
        disableForgotPassword: true,
        showCheckEmail: false,
      },
      toasterType: {
        title: 'WRONG',
        info: 'THIS EMAIL IS NOT REGISTERED IN THE APP. TRY AGAIN',
        borderColor: '#D91919'
      }
    }
  },
  components: {
    Header,
    Form,
    Toaster
  }
}
</script>

<style lang="scss">

</style>