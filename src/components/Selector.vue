<template>
  <a-select
    label-in-value
    :default-value="{ key: '香格里拉' }"
    style="width: 120px"
    @change="handleChange"
  >
    <a-select-option value="jack">
      香格里拉
    </a-select-option>
    <a-select-option value="lucy">
      科索沃
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  methods: {
    handleChange(value) {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    },
  },
};
</script>
