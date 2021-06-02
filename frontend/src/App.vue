<template>
  <v-app class="myFont">
    <TheHeader />
    <v-main>
      <router-view/>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<style>
.myFont {
  font-family: 'Mansalva', cursive;
}
</style>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data: () => ({
    //
  }),
};
</script>
