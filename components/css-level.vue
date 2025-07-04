<template>
    <div>
        <div class="container  hidden pc:up">
            <p>默认背景黑色，屏幕宽度大于 1000，显示红色</p>
            <p>media 声明在上面，优先级低</p>
        </div>

        <div class="container pc:down">
            <p>默认背景黑色，屏幕宽度大于 1000，显示红色</p>
            <p>media 声明在下面，优先级高</p>

        </div>
    </div>
</template>

<style scoped>
.container {
    height: 200px;
    width: 200px;
    color: white;
}

@media (min-width: 1000px) {
    .pc\:up {
        background-color: red;
    }
}

.container {
    background-color: black;
}

@media (min-width: 1000px) {
    .pc\:down {
        background-color: red;
    }
}
</style>
