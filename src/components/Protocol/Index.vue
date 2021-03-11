
<template>
  <div style="background:#ECECEC; padding:20px;">
    <!-- all protocol from 2021.03.11 -->
    <a-card
      title="TCP"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index,id) in TCP"
            :key='id'
            class="liClass"
          >
            {{item.index}}{{item.title}} <span>题目：</span> {{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
    </a-card>

    <!-- HTTP -->
    <a-card
      title="HTTP"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
          v-for='(item,index,id) in HTTP'
          :key='id'
          class="liClass"
          >
          {{item.index}}{{item.title}}  <span> name:</span>{{item.name}} <br>answer:<span style='color:black'>{{item.answer}} </span>
          </li>
        </ol>
      </div>
    </a-card>
    <!-- UDP -->
    <a-card
      title="UDP"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
       <ol>
          <li
          v-for='(item,index,id) in UDP'
          :key='id'
          class="liClass"
          >
          {{item.index}}{{item.title}}  <span> name:</span>{{item.name}} <br>answer:<span style='color:black'>{{item.answer}} </span>
          </li>
        </ol>
      </div>
    </a-card>

    <!-- IP -->
      <a-card
      title="IP"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
      <ol>
          <li
          v-for='(item,index,id) in IP'
          :key='id'
          class="liClass"
          >
          {{item.index}}{{item.title}}  <span> name:</span>{{item.name}} <br>answer:<span style='color:black'>{{item.answer}} </span>
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
      TCP:[
        {title:'tcp',name:'tcp',answer:'?'}
      ],
      HTTP:[],
      UDP:[],
      IP:[]
    }
  },
}
</script>
<style scoped>
.liClass{
text-align: left;
}
.content{
  float: left;
}
</style>