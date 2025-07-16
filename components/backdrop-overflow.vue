<template>
    <p>下面俩个盒子中，第一个盒子额外设置了 border-radiuw 和 overflow:hidden。其他的都一样</p>

    <!-- #region snippet -->
    <p>这里是不正常的效果，内部的小矩形多出来四个角</p>
    <div class="container" style="border-radius: 16px; overflow: hidden;">
        <div class="image-container">
            <div class="overlay"></div>
        </div>
    </div>

    <p>这是期望的效果</p>
    <div class="container">
        <div class="image-container">
            <div class="overlay"></div>
        </div>
    </div>
    <!-- #endregion snippet -->
</template>

<style scoped>
.container {
    background-color: #000;
    height: 20rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.image-container {
    overflow: hidden;
    width: 158px;
    height: 182px;
    border-radius: 0.5rem;
    background-image: url('../assets/image/1.png');
}

.overlay {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
}
</style>