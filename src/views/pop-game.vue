<template>
    <Pop :model-value="true">
        <div class="coin-wrap">
            <div
                class="coin"
                v-for="(item, index) in coinList"
                :key="index"
                :style="{
                    transform: `rotateY(${item.deg}deg)`,
                    backgroundImage: `url(${item.img})`
                }"
            ></div>
        </div>
        <div class="btn-wrap">
            <button class="button" @click="solve">查看卦辞</button>
            <button class="button" @click="emit('close')">确认</button>
        </div>
    </Pop>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Pop from '@/components/pop.vue'
import CoinFrontImg from '@/assets/coin-front.png'
import CoinEndImg from '@/assets/coin-end.png'
import type { Record } from '@/types'

const emit = defineEmits(['close', 'end'])
const coinList = ref<
    Array<{
        deg: number
        img: string
        endDeg: number
        flag: boolean
    }>
>([])

const record = ref<Record>({
    id: 0,
    manifestation: '',
    addTime: 0
})

function easing(t: number, b: number, c: number, d: number) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b
}

let raf: number
function start() {
    produceList()
    let startTime = Date.now()
    tick()
    function tick() {
        const progress = Date.now() - startTime
        const totalDeg = 180 * 30
        const duration = 5000

        coinList.value.forEach((item, index) => {
            const duration = 4000 + index * 200
            if (progress > duration) {
                return
            }
            const deg = totalDeg - easing(progress, 0, totalDeg - item.endDeg, duration)
            item.deg = Math.max(deg, item.endDeg)
            if (Math.floor(item.deg / 180) % 2 === 0) {
                item.img = CoinFrontImg
            } else {
                item.img = CoinEndImg
            }
        })

        if (progress < duration) {
            raf = requestAnimationFrame(tick)
        } else {
            emit('end', record.value)
        }
    }
}

function produceList(random: boolean = true) {
    coinList.value = Array.from({ length: 6 }, () => {
        const flag = random ? Math.random() > 0.5 : true
        return {
            flag,
            endDeg: flag ? 0 : 180,
            img: CoinFrontImg,
            deg: 0
        }
    })
    record.value = getRecord()
}

onMounted(() => {
    produceList(false)
    start()
})
onUnmounted(() => {
    cancelAnimationFrame(raf)
})

function getRecord(): Record {
    const manifestation = coinList.value.map((item) => (item.flag ? '字' : 'o')).join('')

    const id = coinList.value.reduce(
        (pre, item, index) => pre + (item.flag ? 1 : 0) * 2 ** (5 - index),
        0
    )
    return {
        id,
        manifestation,
        addTime: Date.now()
    }
}

const router = useRouter()
function solve() {
    router.push('/solve/' + record.value.id)
}
</script>

<style scoped>
.coin-wrap {
    display: flex;
    margin: 2rem;
    /* flex-direction: column; */
    height: 5rem;
    width: 100%;
    gap: 10px;
    background: rgb(240 161 161 / 50%);
    border-radius: 0.4rem;
    padding: 1rem 0.2rem;
    z-index: 20;
}
.coin {
    flex: 1;
    width: 100%;
    border-radius: 50%;
    margin: 0 auto;
    line-height: 100px;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
.btn-wrap {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    z-index: 20;
}
.button {
    outline: none;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    color: #fff;
    background: #1989fa;
}
</style>
