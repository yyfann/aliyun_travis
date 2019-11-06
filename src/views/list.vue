<!-- @file  -->
<template lang='pug'>
  div
    div 列表
    .list {{ listData }}
    router-link.link(
      to="/detail"
    ) 去详情
</template>

<script>
export default {
  data() {
    return {
      listData: []
    }
  },

  methods: {

  },
}
</script>






