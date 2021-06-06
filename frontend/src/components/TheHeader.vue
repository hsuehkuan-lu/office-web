<template>
  <!--  <v-card class="mx-auto full-height">-->
  <div class="full-height flex-column">
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
              v-for="(link, router) in primaryLinks"
              :key="router"
              :to="router"
          >
            <v-list-item-title class="text-center">{{ link }}</v-list-item-title>
          </v-list-item>
          <v-list-item
              v-for="(link, router) in secondaryLinks"
              :key="router"
              :to="router"
          >
            <v-list-item-title class="text-center">{{ link }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div class="d-none d-sm-flex">
      <v-app-bar
          color="white"
          dark
      >
        <v-img
            alt="Company Logo"
            class="shrink mr-2"
            contain
            src="@/assets/images/和風logo.png"
            transition="scale-transition"
            width="40"
        />

        <v-toolbar-title class="black--text font-weight-bold">{{name}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
            v-for="(link, router) in primaryLinks"
            class="mr-2 justify-end"
            text
            :key="router"
            :to="router"
            color="primary"
        >
          {{link}}
        </v-btn>
        <v-btn
            v-for="(link, router) in secondaryLinks"
            class="mr-2 justify-end"
            text
            :key="router"
            :to="router"
            color="secondary"
        >
          {{link}}
        </v-btn>
      </v-app-bar>
    </div>
    <div class="d-sm-none">
      <v-app-bar>
        <v-app-bar-nav-icon color="black" @click="drawer = true"></v-app-bar-nav-icon>

        <v-row class="d-flex ml-0">
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
        </v-row></v-app-bar>
    </div>
  </div>

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
    },
    drawer: false,
    group: null,
  })
}
</script>

<style scoped>

</style>
