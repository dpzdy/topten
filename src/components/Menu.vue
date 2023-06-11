<template>
  <div >
    <a-menu
      mode="inline"
      :open-keys="openKeys"
      style="width: 256px"
      @openChange="onOpenChange"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>国家</span></span>
        <a-menu-item key="10">
          <router-link to="/">中国</router-link>
        </a-menu-item>
        <a-menu-item key="11">
          <router-link to="/us">美国</router-link>
        </a-menu-item>
        <a-menu-item key="12">
          <router-link to="/jan">日本</router-link>
        </a-menu-item>
        <a-menu-item key="13">
          <router-link to="/rus">俄罗斯</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>话题</span></span>
        <a-menu-item key="20">
          <router-link to="/china-us">中美</router-link>
        </a-menu-item>
        <a-menu-item key="21">
          <router-link to="/tai">台海</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub3">
        <span slot="title"><a-icon type="appstore" /><span>热点</span></span>
        <a-menu-item key="30">
          <router-link to="/shang">香格里拉</router-link>
        </a-menu-item>
        <a-menu-item key="31">
          <router-link to="/kos">科索沃</router-link>
        </a-menu-item>
        <a-menu-item key="32">
          <router-link to="/blinken">布林肯</router-link>
          
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>