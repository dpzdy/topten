<template>
  <div class="wrapper">
    <div class="load" v-if="spinning == true">
      <a-spin :spinning="spinning" tip="Loading..."></a-spin>
    </div>
    <a-tabs  default-active-key="1" tabPosition="top"  v-if="spinning == false">
      <div slot="tabBarExtraContent"  v-if="spinning == false">
        <a-date-picker
          :default-value="moment('2015/01/01', dateFormat)"
          :locale="locale"
          :format="dateFormat"
          v-model="myDate"
          @change="datePickerChange"
        />
      </div>

      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="android" />
          中文
        </span>
        <TopTenList :listData="listCh"></TopTenList>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="apple" />
          Eng
        </span>
        <TopTenList :listData="listEn"></TopTenList>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import TopTenList from "@/components/TopTenList.vue";
import moment from "moment";
import API from "@/api/api";
import zhCn from "ant-design-vue/lib/locale-provider/zh_CN";
import baseUrl from '@/api/api';
moment.locale("zh-cn");

export default {
  components: {
    TopTenList,
  },
  data() {
    return {
      listData: [],
      listCh: [],
      listEn: [],
      dateFormat: "YYYY-MM-DD",
      myDate: undefined,
      locale: zhCn,
      currentPicker: "",
      spinning:true,
      keyword:"布林肯"
    };
  },
  created() {
    let time = new Date();
    this.myDate = this.$moment(time.toLocaleDateString(), "YYYY-MM-DD");
    this.currentPicker = this.$moment(this.myDate).format("YYYY-MM-DD");
  },
  mounted() {
    // this.getUserInfo()
    this.getData(this.keyword);
  },
  methods: {
    moment,
    dataFormat(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].pngUrl === undefined) {
          data[i].pngUrl =
            "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";
        }
        if (data[i].picUrl == "") {
          data[i].picUrl =
            "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";
        } else {
          data[i].picUrl = "/" + data[i].picUrl;
        }

        let keys = data[i].gongxian.split(";");
        data[i]["Keys"] = keys.slice(0,keys.length-1)
        // console.log(data[i]["Keys"])
        
      }
    },
    getData(type) {
      
      console.log(this.currentPicker)
      this.spinning = true
      this.$axios({
        method: "post",
        url: `${baseUrl}/getEachTopicTopTenNews`,
        data: {
          token: "1dfhtrrjfdawew9844fadffffdf",
          startDay: this.currentPicker,
          endDay: this.currentPicker,
          topicName: type
        },

        transformRequest: [
          function (data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((response) => {
        this.listData = response.data.data;
        this.dataFormat(this.listData);
        this.getClassfy(this.listData);
        this.spinning = false

        // this.listData.forEach(element => {
        //   console.log(element.pngUrl)
        // });
      });
    },
    getClassfy(data) {
      this.listCh = [];
      this.listEn = [];
      for (let i = 0; i < data.length; i++) {
        var en = new Array();
        var ch = new Array();

        en["ID"] = data[i]["ID"];
        en["GetTime"] = data[i]["GetTime"];
        en["Url"] = data[i]["Url"];
        en["Title"] = data[i]["Title"];
        en["pngUrl"] = data[i]["pngUrl"];
        en["picUrl"] = data[i]["picUrl"];
        en["Summary"] = data[i]["Summary"];

        en["Key"] = data[i]["Keys"];

        ch["ID"] = data[i]["ID"];
        ch["GetTime"] = data[i]["GetTime"];
        ch["Url"] = data[i]["Url"];
        ch["pngUrl"] = data[i]["pngUrl"];
        ch["picUrl"] = data[i]["picUrl"];
        ch["Title"] = data[i]["TitleCh"];
        ch["Summary"] = data[i]["SummaryCh"];
        ch["Key"] = data[i]["Keys"];

        this.listCh.push(ch);
        this.listEn.push(en);
      }
    },
    datePickerChange(value) {
      this.currentPicker = this.$moment(this.myDate).format("YYYY-MM-DD");
      this.getData(this.keyword);
    },
  },
};
</script>

<style>
.wrapper {
  width: 1000px;
}
.load {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}
</style>
