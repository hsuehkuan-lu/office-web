<template>
  <v-card height="50">
    <v-footer
        fixed
        padless
    >
      <v-card
          flat
          tile
          no-gutters
          width="100%"
          class="black lighten-1 text-center"
      >
<!--        <v-card-text>-->
<!--          <v-btn-->
<!--              v-for="(icon, router) in icons"-->
<!--              :key="router"-->
<!--              :to="router"-->
<!--              class="mx-4 white&#45;&#45;text"-->
<!--              icon-->
<!--          >-->
<!--            <v-icon size="24px">-->
<!--              {{ icon }}-->
<!--            </v-icon>-->
<!--          </v-btn>-->
<!--        </v-card-text>-->

<!--        <v-divider></v-divider>-->

        <v-card-text class="white--text">
          <strong>{{ name }}</strong> - {{ new Date().getFullYear() }} &copy;
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>


<script>
import Global from "@/components/Global";
export default {
  name: "TheFooter",
  data: () => ({
    name: Global.firmName,
    links: [
      '主頁',
      '關於我們',
      '團隊資訊',
      '提供服務',
      '聯絡我們',
    ],
    icons: {
      '/': 'mdi-home',
      '/contact': 'mdi-phone',
      '/location': 'mdi-map'
    }
  }),
}
</script>

<style scoped>

</style>
