<template>
    <div>
        <div style="backdrop-filter: blur(10px);">
            我是 style 属性, 可以打开控制台看看我又没有 -webkit-backdrop-filter 属性
        </div>

        <hr/>
        
        <div :style="{ 'backdrop-filter': 'blur(10px)' }">
            我是 :style 属性, 可以打开控制台看看我又没有 -webkit-backdrop-filter 属性
        </div>

        <hr/>
        
        <div class="backdrop-filter">
            <p>我是 style 中的 class 属性, 可以打开控制台看看我又没有 -webkit-backdrop-filter 属性</p>
            <p>这里 vitepress 没有生成，可能是跟 vitejs 默认配置有所区别</p>
        </div>
    </div>
</template>


<style scoped lang="scss">

.backdrop-filter {
    backdrop-filter: blur(10px);

}
</style>