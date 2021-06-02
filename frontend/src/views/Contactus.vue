<template>
  <v-container>
    <v-row class="ma-3">
      <v-col cols="6">
        <h1
            class="text-center"
        >聯絡方式</h1>
      </v-col>
      <v-col cols="6">
        <h1
            class="text-center"
        >地址</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card
            class="regularFont mx-auto"
            max-width="500"
            elevation="2"
            outlined
        >
          <v-list>
            <v-list-item v-for="(item, idx) in information" :key="idx">
              <v-list-item-icon>
                <v-icon color="indigo">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{item.value}}</v-list-item-title>
                <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.8255209248464!2d121.28367871471977!3d25.006044045566075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f0ab1f6b65b%3A0x9688546a5b9f6d86!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5ZyL6Zqb6Lev5LqM5q61NTU56JmfMw!5e0!3m2!1szh-TW!2stw!4v1622298266729!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Contactus",
  data: () => ({
    information: [
      {
        "icon": "mdi-phone",
        "value": "(03) 216-0363",
        "title": "電話"
      },
      {
        "icon": "mdi-fax",
        "value": "(03) 216-0727",
        "title": "傳真"
      },
      {
        "icon": "mdi-email",
        "value": "gw032160363@gmail.com",
        "title": "電子郵件"
      },
      {
        "icon": "mdi-map",
        "value": "桃園市桃園區國際路二段559號3樓",
        "title": "地址"
      },
    ]
  })
}
</script>

<style scoped>
.regularFont {
  font-family: 'serif';
}
</style>
