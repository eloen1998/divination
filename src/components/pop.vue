<template>
    <teleport to="body">
        <div class="pop" v-if="modelValue">
            <div class="cover"></div>
            <slot></slot>
        </div>
    </teleport>
</template>
<script lang="ts" setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.pop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.pop .cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 22, 34, 0.7);
}
</style>
