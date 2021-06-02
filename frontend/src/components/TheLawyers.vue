<template>
  <v-row class="ma-3">
    <v-col
        v-for="(item, idx) in lawyers"
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
              <v-list-item-title class="mb-2">
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

            <v-list-item v-show="item.expertises.length > 0">
              <v-list-item-content>
                <v-list-item-subtitle>專業領域</v-list-item-subtitle>
                <v-list-item-title v-for="(i, idx) in item.expertises" :key="idx">{{i}}</v-list-item-title>
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
  name: "TheLawyers",
  data: () => ({
    lawyers: [
      {
        "name": "呂理銘",
        "order": 1,
        "title": "所長",
        "show": false,
        "image": require("@/assets/images/呂理銘.jpg"),
        "experiences": [
          "曾任 新竹地檢署檢察官",
          "曾任 台南地檢署檢察官",
          "曾任 桃園地檢署主任檢察官",
        ],
        "educations": [
        ],
        "introductionText": "",
        "expertises": [
        ]
      },
      {
        "name": "胡世光",
        "order": 4,
        "title": "律師",
        "show": false,
        "image": require("@/assets/images/胡世光.jpg"),
        "experiences": [
          "93-106年 臺灣桃園地方檢察署檢察事務官、檢察事務官組長",
          "100年 律師高考及格",
          "106-108年 進豐聯合法律事務所律師",
          "108年-迄今 和風聯合法律事務所律師"
        ],
        "educations": [
          "87年 國立中興大學法律系畢業",
        ],
        "introductionText": "",
        "expertises": [
          "一般民刑事訴訟"
        ]
      },
      {
        "name": "江婕妤",
        "order": 5,
        "title": "律師",
        "show": false,
        "image": require("@/assets/images/江婕妤.png"),
        "experiences": [
            "101年 律師高考及格",
            "102年 立詳法律事務所律師",
            "105年 弘正聯合法律事務所律師",
            "110-迄今 和風聯合法律事務所律師"
        ],
        "educations": [
            "110年 瑞典斯德哥爾摩大學歐洲智慧財產權法碩士",
            "109年 瑞典斯德哥爾摩大學歐洲經濟法碩士",
            "100年 國立台灣大學法律系司法組畢業"
        ],
        "expertises": [
          "一般民刑事訴訟"
        ],
        "introductionText": ""
      },
      {
        "name": "楊晴文",
        "order": 4,
        "title": "律師",
        "show": false,
        "image": require("@/assets/images/楊晴文.png"),
        "experiences": [
          "98-101年 臺灣桃園地方法院書記官",
          "100年 律師高考及格",
          "102-103年 宏宇法律事務所律師",
          "103-105年 弘正聯合法律事務所律師",
          "105-108年 恆業法律事務所律師",
          "108-迄今 和風聯合法律事務所律師"
        ],
        "educations": [
          "109年 國立中央大學產業經濟研究所在職專班畢業",
          "98年 私立東吳大學法律系畢業",
        ],
        "expertises": [
          "一般民刑事訴訟"
        ],
        "introductionText": ""
      },
      {
        "name": "蔡正傑",
        "order": 2,
        "title": "律師",
        "show": false,
        "image": require("@/assets/images/蔡正傑.jpg"),
        "experiences": [
          "89年 法務部調查局偵查實務組錄取",
          "89年 專門技術人員律師高考及格",
          "90年 司法官特考錄取",
          "臺灣基隆地方檢察署重大刑案專組主任檢察官",
          "臺灣基隆地方檢察署婦幼專組主任檢察官",
          "臺灣桃園地方檢察署重大刑案兼軍法專組主任檢察官",
          "臺灣桃園地方檢察署緝毒專組主任檢察官",
          "臺灣桃園地方檢察署公訴組主任檢察官",
          "臺灣桃園地方檢察署肅貪專組檢察官",
          "臺灣桃園地方檢察署企業犯罪兼智慧財產專組檢察官",
          "臺灣桃園地方檢察署民生犯罪及環境保護專組檢察官",
          "臺灣桃園地方檢察署執行科檢察官",
          "臺灣基隆地方檢察署犯罪被害人補償審議委員會委員",
          "基隆市政府家庭暴力暨性侵害防治委員會委員",
          "法務部檢察官人事審議委員會委員",
          "106年 獲選全國反毒有功人士",
          "臺灣司法人權進步協會理事"
        ],
        "educations": [
          "國立中興大學法律系財經法學組",
          "國防管理學院法律研究所",
        ],
        "expertises": [

        ],
        "introductionText": "前任職臺灣桃園地方檢察署、臺灣基隆地方檢察署分別擔任檢察官及主任檢察官，偵辦刑事案件經驗豐富，" +
            "甫於民國110年1月6日離開公職轉任律師。我來自司法界、瞭解實務作法，無法顛倒黑白，但可協助當事人向司法機關澄清事實，保障訴訟上之權益。"
      },
    ],
  })
}
</script>

<style scoped>

</style>
