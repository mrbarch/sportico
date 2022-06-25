<template>
  <div>
    <Header/>
    <Form :form-info="formInfo" />
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Form from "@/components/global/Form";

export default {
  name: "mainPage",
  data() {
    return {
      formInfo: {
        login: 'LOG IN',
        enter: 'ENTER THE APP TO CONTINUE',
        disablePasswordField: false
      }
    }
  },
  components: {
    Header,
    Form
  }
}
</script>

<style lang="scss">

</style>