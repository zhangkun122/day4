<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main{
  width: 100%;
  overflow: hidden;
  height: 100%;
  flex: 1;
}
footer{
  width: 100%;
  height: 46px;
  display: flex;
  span{
    flex: 1;
    text-align: center;
    line-height: 46px;
  }
}
</style>
