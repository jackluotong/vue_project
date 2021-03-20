
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
            v-for="(item,index,id) in HTTP"
            :key='id'
            class="liClass"
          >
            {{item.index}}{{item.title}} <span>题目：</span> {{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
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
<script>
export default {
  data() {
    return {
      TCP:[],
      HTTP:[
        {title:'',name:'http?',answer:'HTTP是超文本传输协议，是互联网上用得最多的网络协议， 所以的www文件都遵守这个标准。HTTP 协议工作于客户端—服务端架构上。浏览器作为 HTTP 客户端通过 URL 向 HTTP 服务端（即 Web 服务器） 发送请求'},
        {name:'https?',answer:'HTTPS 的全称是 Hyper Text Transfer Protocol over Secure Socket Layer，是以安全为目标的 HTTP 通道， 简单讲是 HTTP 的安全版，即 HTTP 下加入 SSL 层（Secure Sockets Layer 安全套接层），简称为 HTTPS'},
        {name:'http and https different?',asnwer:'1.https更安全，运行于ssl,ssl运行于tcp,是加了加密和认证机制的http;2.不同的连接方式,端口也不同80,4433.https消耗更多的ccpu和内存资源,3https需要向机构购买证书'}
      ],
      UDP:[],
      IP:[],
    }
  },
}
</script>