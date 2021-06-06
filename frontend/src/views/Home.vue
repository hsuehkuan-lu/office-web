<template>
  <v-container>
    <v-row class="d-none d-sm-flex">
      <v-row>
        <v-col>
          <h1
              class="text-center"
              v-bind:style="styleObject"
          >{{ name }}</h1>
        </v-col>
      </v-row>
      <v-row class="mt-3">
        <v-col>
          <p v-html="introductionText">
            {{introductionText}}
          </p>
          <p class="text-center" v-bind:style="{fontSize: '22px'}"><strong>祝福大家 幸福圓滿</strong></p>
          <p class="text-right">所長 <strong>呂理銘</strong></p>
        </v-col>
        <v-col>
          <v-img
              aspect-ratio="1.5"
              src="@/assets/images/shake-hands.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-row>
    <v-row class="d-sm-none">
      <v-row>
        <v-col>
          <h1
              class="text-center"
              v-bind:style="styleObject"
          >{{ name }}</h1>
        </v-col>
      </v-row>
      <v-row class="ma-1">
        <v-col>
          <p v-html="introductionText">
            {{introductionText}}
          </p>
          <p class="text-center" v-bind:style="{fontSize: '22px'}"><strong>祝福大家 幸福圓滿</strong></p>
          <p class="text-right">所長 <strong>呂理銘</strong></p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      name: "和風聯合法律事務所",
      introductionText:
          "大家好！</br>" +
          "首先感謝您對於和風的關懷，期待能在大家的期許下，完成解決困難與糾紛，圓滿改變紛擾的難事。" +
          "而和風團隊均有多年承辦案件之經驗及實績，亦自許將盡心尋求徬徨、疑難事務之圓滿止紛。<br>" +
          "常言生活上，哪能沒有風沒有雨？而能始終順心如意安渡者，則是幸福的人生；" +
          "但更多的是，命途的遭遇，常有挫折、不順遂的時候；此刻當如何？" +
          "人人自有不同化解之相處方式，能自行順利解決了，則為你祝福；" +
          "而或許難以排遣，惟仍選擇默然承受，自認也許是命運的安排者，亦有之；" +
          "但不願低頭現狀而心存伸張改變，思量尋求幫助憑藉時，則和風將願陪伴你，共尋生活改變的出路，正誠摯期待您前來咨詢與洽商，共啟解脫困境之路。<br>" +
          "因此為了不讓改變生活的機會留下遺憾，和風全員必在大家的關切中，秉持豐富的處理事務經驗，本諸止紛的協助熱情，" +
          "呈現專業的解析、指正，盡心改善、化解困難的契機，深許解惑紓困的圓滿。<br>" +
          "在此，請謹記<strong>遇到困難時，別對生活失望</strong>，和風全員歡迎大家的蒞臨及諮詢，期待與您共創人生，同享生活的未來。",
      styleObject: {
        fontSize: '50px',
        fontFamily: 'KouzanBrush'
      }
    }),
    components: {

    },
  }
</script>
