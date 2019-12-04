<template>
  <div class="home">
   <main>
     <div class="item" v-for="(item,index) in copyList" :key="index">
       <p>{{item.name}}</p>
        <p>{{item.speak}}</p>
     </div>
   </main>
   <footer>
     <span v-for="(item,index) in list" @click="TabList(item.code)" :key="index">{{item.name}}</span>
   </footer>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  data () {
    return {
      list:[
        {
          name:'联系人',
          code:0
        },
        {
          name:'我的',
          code:1
        },
        {
          name:'最近联系',
          code:2
        }
      ],
      curIndex:0
    }
  },
  computed: {
    ...mapState(['copyList'])
  },
  created () {
    this.getList()
  },
  methods: {
    ...mapActions(['getList']),
    TabList(index){
      this.$store.commit('tab', {index})
      console.log(1);
      
    }
  }
}
</script>
