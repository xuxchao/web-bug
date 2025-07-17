<template>
    <div class="main-container">
        <div class="content-left">
            <div v-for="item in 3" :key="item" class="dynamic-box">{{ item }}</div>
        </div>
        <div class="content-right"></div>
    </div>

    <p>父容器用了 flex，最大宽度是 688px</p>
    <p>子容器有左右俩个</p>
    <p>左边的容器宽度是 300px * 3 = 900px</p>
    <p>右边的容器宽度是 300px</p>
    <p>左边和右边的容器宽度加起来超出了父容器的宽度</p>
    <p>期望左边的容器能够跟随宽度的变化自动变化</p>
    <p>我给左边的容器设置了 flex-1, 期望自适应，没有出现预期效果</p>
    <p>我添加上 overflow-x: auto, 左容器出现了预期的效果</p>
</template>

<style scoped lang="scss">
.main-container {
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow: hidden;
}

.content-left {
    // width: 100%;
    overflow-x: auto;
    flex: 1;
    display: flex;
    gap: 0.5rem;

    .dynamic-box {
        width: 300px;
        height: 100px;
        background-color: #0f0;
        flex-shrink: 0;
    }


}

.content-right {
    width: 300px;
    flex-shrink: 0;
    background-color: #000;
}
</style>