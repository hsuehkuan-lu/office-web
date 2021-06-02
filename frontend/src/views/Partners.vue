<template>
  <v-container>
    <v-row class="ma-3">
      <v-col>
        <h1
            class="text-center"
        >律師介紹</h1>
      </v-col>
    </v-row>

    <TheLawyers/>

    <v-divider></v-divider>
    <v-row class="ma-3">
      <v-col>
        <h1
            class="text-center"
        >行政助理</h1>
      </v-col>
    </v-row>

    <TheAssistants/>

  </v-container>
</template>

<script>
import TheLawyers from "@/components/TheLawyers";
import TheAssistants from "@/components/TheAssistants";

export default {
  name: "Lawyers",
  components: {TheLawyers, TheAssistants},
  data: () => ({
    lawyers: [
      {
        "name": "胡世光",
        "order": 5,
        "title": "律師",
        "show": false,
        "experiences": [
            "中興大學法律系學士",
            "司法特考檢察事務官考試及格",
            "律師高考及格",
            "臺灣桃園地方法院檢察署檢察事務官",
            "臺灣桃園地方法院檢察署檢察事務官組長"
        ],
        "introductionText": "自我介紹！",
        "expertises": [
            "刑事案件辯護及告訴代理",
            "調查局、警察局、廉政署、地檢署陪同偵訊",
            "民事案件訴訟代理及調解",
            "家事案件（離婚、繼承、監護權）之調處及訴訟代理",
            "訴願、行政訴訟及其他行政救濟案件",
            "國家賠償案件",
            "債務清理、整合及協商",
            "民事強制執行、保全程序案件"
        ]
      },
      {
        "name": "第二個律師",
        "order": 2,
        "title": "律師",
        "show": false,
        "experiences": [
          "曾經", "現在", "未來"
        ],
        "expertises": [

        ],
        "introductionText": ""
      }
    ],
    'assistants': [

    ],
    methods: {
    }
  }),
}
</script>

<style scoped>

</style>
