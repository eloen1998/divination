<template>
    <div class="container">
        <p class="content">
            占卦者净手诚心，用铜钱或硬币六枚放在手中，两手高举过头连摇数摇，使六枚硬币在掌心自然重叠在一起，然后自下而上、自右而左自然放置排成一行，按卦象便知吉凶祸福。
        </p>
        <p class="tips">注：硬币图像或国徽面为阴，画○一字一面为阴面，标记为“○”。</p>
        <button class="btn mt4" @click="handleClick">开始</button>
    </div>

    <div class="affix-btn">
        <div @click="gotoSelf">记录</div>
    </div>
    <PopGame v-if="show" @end="handleEnd" @close="show = false" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import PopGame from './pop-game.vue'
import { useRecord } from '@/hooks/use-record'
import { useRouter } from 'vue-router'

const show = ref(false)

const { addRecord } = useRecord()
function handleEnd(result: any[]) {
    addRecord(result)
}

const router = useRouter()
const handleClick = () => {
    show.value = true
}

function gotoSelf() {
    router.push('/self')
}
</script>

<style scoped>
.container {
    height: 100%;
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        background: rgba(128, 128, 128, 0.5);
        color: #f9f9f9;
        padding: 0.2rem;
        border-radius: 0.4rem;
    }
}

.content {
    font-size: 16px;
    font-weight: bold;
}
.tips {
    margin-top: 0.4rem;
    font-size: 14px;
}

.affix-btn {
    position: fixed;
    top: 1rem;
    right: 0.34rem;
}
.affix-btn div {
    width: 0.57rem;
    height: 0.57rem;
    background: rgba(0, 0, 0, 0.56);
    border-radius: 0.16rem;
    border: none;
    color: #ffffff;
    font-size: 0.22rem;
    line-height: 0.57rem;
    font-weight: 600;
    text-align: center;
}
</style>
