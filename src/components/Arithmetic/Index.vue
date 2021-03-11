
<template>
  <div style="background:#ECECEC; padding:20px;">
    <!-- all arithmetic from 2021.03.11 -->
    <a-card
      title="排序"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index,id) in arithmetic"
            :key='id'
            class="liClass"
          >
            {{item.index}}{{item.title}} <span>题目：</span> {{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
    </a-card>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      arithmetic:[
        
      ]
    }
  },
}
</script>