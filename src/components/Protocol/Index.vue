
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
            v-for="(item,index,id) in interview"
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
        
      </div>
    </a-card>
    <!-- UDP -->
    <a-card
      title="UDP"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <img :src='img' />
      </div>
    </a-card>

    <!-- IP -->
      <a-card
      title="IP"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <img :src='img' />
      </div>
    </a-card>
  </div>

</template>