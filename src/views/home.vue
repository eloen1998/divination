<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <main>
    <div class="description">
      <p>
        占卦者净手诚心，用铜钱或硬币六枚放在手中，两手高举过头连摇数摇，使六枚硬币在掌心自然重叠在一起，然后自下而上、自右而左自然放置排成一行，按卦象便知吉凶祸福。
      </p>
      <p>注：硬币图像或国徽面为阴，画○一字一面为阴面，标记为“○”。</p>
      <router-link to="/game"><button>开始</button></router-link>
    </div>
  </main>
</template>

<style scoped>
.description {
  width: 80%;
}

html,
body {
  height: 100%;
  width: 100%;
  background-color: black;
}

.container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 2em;
  filter: contrast(20);
  background-color: black;
  overflow: hidden;
}

h1 {
  font-family: Righteous;
  color: white;
  font-size: 4rem;
  text-transform: uppercase;
  line-height: 1;
  animation: letterspacing 5s infinite alternate ease-in-out;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  letter-spacing: -2.2rem;
}

@keyframes letterspacing {
  0% {
    letter-spacing: -2.2rem;
    filter: blur(0.5rem);
  }

  50% {
    filter: blur(0.5rem);
  }

  100% {
    letter-spacing: 0.5rem;
    filter: blur(0rem);
    color: #fff;
  }
}
</style>
