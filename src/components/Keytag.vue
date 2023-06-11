<template>
  <div>
      <a-tag v-for="(item ,index ) in keylist" :key="index" :color="color[index]">
        {{item}}
      </a-tag>
  </div>
</template>


<script>
export default {
  props: ["keylist"],
  data() {
    return {
      color:["orange","red","pink","cyan","purple","blue","yellow","green"],
      keys:["中国","日本","俄乌","台海","中美","欧盟"]
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