<template>
  <v-app-bar
      app
      color="white"
      dark
  >
    <div class="d-flex align-center">
      <v-img
          alt="Company Logo"
          class="shrink mr-2"
          absolute
          contain
          src="@/assets/images/和風logo.png"
          transition="scale-transition"
          width="40"
      />

      <v-toolbar-title class="black--text font-weight-bold">{{name}}</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn
        v-for="(link, router) in primaryLinks"
        class="mr-2"
        text
        :key="router"
        :to="router"
        color="primary"
    >
      {{link}}
    </v-btn>
    <v-btn
        v-for="(link, router) in secondaryLinks"
        class="mr-2"
        text
        :key="router"
        :to="router"
        color="secondary"
    >
      {{link}}
    </v-btn>
  </v-app-bar>
</template>

<script>
import Global from "@/components/Global";

export default {
  name: "TheHeader",
  data: () => ({
    name: Global.firmName,
    primaryLinks: {
      '/': '主頁',
    },
    secondaryLinks: {
      '/partners': '專業團隊',
      '/contactus': '聯絡我們',
    }
  })
}
</script>

<style scoped>

</style>
