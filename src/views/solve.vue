<template>
    <div>第{{ data.index }}卦 > {{ data.manifestation }}</div>
    <div class="container">
        <div class="title">{{ data.title }}</div>
        <div>{{ data.auspiciousness }}</div>
        <div class="poetry">{{ data.poetry }}</div>
        <div class="meaning">{{ data.meaning }}</div>
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
    poetry: '困龙得水好运交，不由喜气上眉梢，一切谋事皆如意，往后时运渐渐高。蟠龙久困在渊中，一日升腾起半空，往来飞腾能变化，从今有祸不成凶。',
    meaning: '大吉之课，无不欢乐，上人见喜，诸事不错。'
})

const route = useRoute()
const id = Number(route.params.id) || 0

const manifestation = id.toString(2).replace(/0/g, '○').replace(/1/g, '字')
console.log('manifestation', manifestation)
data.value = changes.find((item: any) => {
    return item.manifestation === manifestation
})
console.log('data.value', data.value)
</script>

<style scoped>
.container {
    padding: 0.3rem;
    text-align: center;
}
.meaning {
    margin: 0.5rem auto 0;
    width: 12em;
    padding: 1em;
    color: #f9f9f9;
    background: rgba(128, 128, 128, 0.5);
    border-radius: 0.4rem;
}
.poetry {
    margin: 0.5rem auto 0;
    width: 18em;
    padding: 1em;
    color: #f9f9f9;
    background: rgba(128, 128, 128, 0.5);
    border-radius: 0.4rem;
}
</style>
