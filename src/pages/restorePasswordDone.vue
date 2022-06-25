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
  name: "restorePasswordDone",
  data() {
    return {
      formInfo: {
        login: 'RESTORE PASSWORD',
        enter: 'ENTER YOUR EMAIL TO RESTORE PASSWORD',
        disablePasswordField: true,
        disableForgotPassword: true,
      },
      toasterType: {
        title: 'success',
        info: 'NEW PASSWORD WAS SENDED TO YOUR EMAIL',
        borderColor: '#19D92C'
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