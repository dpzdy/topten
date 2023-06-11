<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="listData"
  >
    <div slot="footer"><b>国家舆情实验室</b></div>

    <a-list-item slot="renderItem" key="item.ID" slot-scope="item, index" class="list">
      <template slot="actions">
        <a-icon type="clock-circle" />
        <span> {{ item.GetTime }}</span>
      </template>

      <img
        slot="extra"
        width="200"
        alt="logo"
        :src="'data:image/png;base64,' + item.picUrl"
      />

      <a-list-item-meta :description="item.description"  class="title">
        <a slot="title" :href="item.Url"
          ><b>{{ item.Title }}</b></a
        >
        <a-avatar slot="avatar" :src="'data:image/png;base64,' + item.pngUrl" />
      </a-list-item-meta>
      <div class="summary">
        {{ item.Summary }}
      </div>
      <Keytag :keylist="item.Key"></Keytag>
    </a-list-item>
  </a-list>
</template>

<script>
import Keytag from "@/components/Keytag.vue"
export default {
  components: {
    Keytag,
  },
  props: ["listData"],
  data() {
    return {
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
    };
  },
  // computed:{
  //   myList
  // }
  // watch:{
  //   listData
  // }
};
</script>

<style scoped>
.list{
  padding: 5%;
  font-size: larger;
}
.title{
  font:italic bolder  arial, sans-serif;
  font-size: 19px !important;
}
.summary{
  text-indent: 2em;
  text-align: left;
}
</style>
