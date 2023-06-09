<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const coinList = ref([1, 1, 1, 1, 1, 1])

let startTime: number

function start() {
  startTime = Date.now()
  coinList.value = Array.from({ length: 6 }, () => (Math.random() > 0.5 ? 0 : 1))

  let count = 0
  change()

  function change() {
    count++
    if (count % 10 === 0) {
      coinList.value.forEach((item, index) => {
        coinList.value[index] = item > 0.5 ? 0 : 1
      })
    }
    if (Date.now() - startTime < 5000) {
      requestAnimationFrame(change)
    }
  }
}

const router = useRouter()
function solve() {
  let id = 0
  coinList.value.forEach((item, index) => {
    id += item * 2 ** (5 - index)
  })
  console.log(id)

  router.push('/solve/' + id)
}
</script>

<template>
  <header>title</header>

  <main>
    <button @click="start">开始</button>
    <div class="coin" v-for="(flag, index) in coinList" :key="index">
      {{ flag > 0 ? '正' : '反' }}
    </div>

    <button @click="solve">解卦</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.coin {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
  margin: 0 auto;
  line-height: 100px;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  text-shadow: 0 0 10px #fff;
  box-shadow: 0 0 10px #fff;
  animation: rotate 1s linear infinite;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
