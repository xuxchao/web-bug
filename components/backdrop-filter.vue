<template>
    <div class="parent-container">
        <!-- #region snippet -->
        <div>
            <h2>正常使用</h2>
            <div class="container">
                <div class="backdrop-filter" :style="{ backdropFilter: `blur(${backdropFilter1}px)` }">
                </div>
            </div>
        </div>

        <div>
            <h2>不正常使用</h2>
            <div class="container">
                <div class="backdrop-filter"  :style="{ backdropFilter: `blur(${backdropFilter1}px)` }">
                    <div class="backdrop-filter" :style="{ backdropFilter: `blur(${backdropFilter2}px)` }">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>多层使用方式</h2>
            <div class="container">
                <div class="backdrop-filter absolute"  :style="{ backdropFilter: `blur(${backdropFilter1}px)` }">
                </div>
                <div class="backdrop-filter absolute"  :style="{ backdropFilter: `blur(${backdropFilter2}px)` }">
                </div>
            </div>
        </div>
        <!-- #endregion snippet -->
    </div>
    <div>
        <!-- 原生滑块功能 -->
        <input type="range" min="0" max="100" v-model="backdropFilter1" />
        <input type="range" min="0" max="100" v-model="backdropFilter2" />
    </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';

const backdropFilter1 = ref(10)
const backdropFilter2 = ref(10)
</script>

<style scoped lang="scss">
.parent-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4px;
}

.container {
    background-image: url('../assets/image/1.png');
    background-size: cover;
    width: 100%;
    height: 300px;
    position: relative;
}

.absolute {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}

.backdrop-filter {
    width: 100%;
    height: 100%;
    // backdrop-filter: blur(10px);
}
</style>
