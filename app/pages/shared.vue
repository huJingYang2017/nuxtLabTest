<script setup lang="ts">
const draft = useState('lab-draft', () => '还没有写')
</script>

<template>
  <div>
    <h1>useState</h1>
    <DemoBlock
      title="同一把钥匙，服务端和浏览器共用"
      scene="列表页的筛选词、向导里填到一半的名字。换一个路由再回来，字还在；刷新后回到初始值。"
      hint="useState('lab-draft') 的字符串是钥匙。服务端渲染时的值会放进 payload，水合时不会另起一份。"
    >
      <label>
        草稿
        <input v-model="draft" type="text">
      </label>
      <p>去 Pinia 页再回来，输入框里仍是这段文字。刷新页面会回到「还没有写」。</p>
    </DemoBlock>
  </div>
</template>
