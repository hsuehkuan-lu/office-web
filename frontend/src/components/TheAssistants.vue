<template>
  <v-row class="ma-3">
    <v-col
        v-for="(item, idx) in assistants"
        :key="idx"
        :order="item.order"
        cols="12"
    >
      <v-card
          class="mx-auto"
          max-width="850"
          elevation="1"
          outlined
      >
        <v-list>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                <h3>{{item.title}}</h3>
              </v-list-item-title>
              <v-list-item-title class="mb-1">
                <h2>{{item.name}}</h2>
              </v-list-item-title>

              <v-list-item-content v-show="item.educations.length > 0">
                <v-list-item-subtitle>學歷</v-list-item-subtitle>
                <v-list-item-title class="text-wrap" v-for="i in item.educations" :key="i">{{i}}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-subtitle>經歷</v-list-item-subtitle>
                <v-list-item-title class="text-wrap" v-for="i in item.experiences.slice(0, 5)" :key="i">
                  {{i}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                height="350"
                width="280"
            >
              <v-img
                  :src="item.image"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              icon
              @click="item.show = !item.show"
          >
            <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-list v-show="item.show">
            <v-divider></v-divider>

            <v-list-item v-show="item.experiences.length > 5">
              <v-list-item-content>
                <v-list-item-subtitle>完整經歷</v-list-item-subtitle>
                <v-list-item-title
                    v-for="(i, idx) in item.experiences.slice(5, item.experiences.length)"
                    :key="idx"
                >{{i}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-show="item.introductionText.length > 0">
              <v-list-item-content>
                <v-list-item-subtitle>自我介紹</v-list-item-subtitle>
                <v-list-item-title class="text-wrap">{{item.introductionText}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheAssistants",
  data: () => ({
    "assistants": [
      {
        "name": "徐裕仁",
        "order": 1,
        "title": "事務所主任",
        "show": false,
        "image": require("@/assets/images/徐裕仁.jpg"),
        "experiences": [
          "臺灣桃園地方檢察署書記官兼科長",
        ],
        "educations": [
          "私立開南大學碩士",
          "國立空中大學學士",
        ],
        "expertises": [
        ],
        "introductionText": ""
      },
      {
        "name": "陳俐君",
        "order": 2,
        "title": "秘書",
        "show": false,
        "image": require("@/assets/images/陳俐君.jpg"),
        "experiences": [
          "曾任職於香港匯豐銀行總行法務部門",
          "曾任職於民營企業之人事及財務部門",
          "曾擔任民營企業董事長特助多年"
        ],
        "educations": [
          "台北大學法律系財經法組",
        ],
        "introductionText": "",
      },
      {
        "name": "陳偉相",
        "order": 3,
        "title": "律師助理",
        "show": false,
        "image": require("@/assets/images/陳偉相.jpg"),
        "experiences": [
        ],
        "educations": [
            "漳州科技大學市場營銷系"
        ],
        "introductionText": "",
      }
    ]
  })
}
</script>

<style scoped>

</style>
