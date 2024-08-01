<template>
    <div class="container">
        <div class="title">今日运势</div>
        <div class="list">
            <table>
                <tr v-for="(item, index) in records" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.manifestation }}</td>
                    <td>
                        <router-link :to="'/solve/' + item.id">查看卦辞</router-link>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRecord } from '@/hooks/use-record'

const { records } = useRecord()
</script>

<style scoped>
.container {
    padding-top: 0.5rem;
}
.coin-wrap {
    display: flex;
    margin: 2rem;
    /* flex-direction: column; */
    height: 3rem;
    gap: 10px;
    background: rgb(240 161 161 / 50%);
    border-radius: 0.4rem;
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
.title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
.list {
    margin: 0.5rem;
    display: flex;
    justify-content: center;
}
td {
    padding: 0 0.2rem;
}
</style>
