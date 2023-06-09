<template>
  <div>
    <h1>解卦</h1>
    <h6>第{{data.index}}卦 {{data.title}} {{data.auspiciousness}}</h6>
    <p>{{ data.manifestation }}</p>
    <p>{{ data.poetry }}</p>
    <p>{{ data.meaning }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { changes } from './constant'

const data = ref({
    index: '一',
    title: '困龙得水',
    auspiciousness: '上上',
    manifestation: '字字字字字字',
    poetry:
      '困龙得水好运交，不由喜气上眉梢，一切谋事皆如意，往后时运渐渐高。蟠龙久困在渊中，一日升腾起半空，往来飞腾能变化，从今有祸不成凶。',
    meaning: '大吉之课，无不欢乐，上人见喜，诸事不错。'
})

const route = useRoute()
const id = Number(route.params.id) || 0

let manifestation = ''

for (let i = 0; i < 6; i++) {
  const quotient = id % 2 ** (5 - i)
  manifestation += quotient > 0 ? '字' : '○'
}
console.log('manifestation', manifestation);

const change = changes.find((item: any) => {
  return item.manifestation === manifestation
})

data.value = change
console.log('data.value', data.value);
</script>

<style></style>
