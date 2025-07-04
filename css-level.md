# CSS LEVEL

事情的起因是我用 tailwindcss + media 导致的。media 的优先级跟普通 css 的优先级一样，引入的顺序会导致样式生效先后问题。具体看下面的例子

<CssLevel />

<details class="code-details">
<summary>点击展开/折叠代码</summary>

<<< @/components/css-level.vue
</details>

仅仅是这样，还不足以称之为坑。真正坑的是我引用的第三方组件也是 tailwindcss ，他是异步组件外链导入的，项目代码里面是行内样式

<details class="code-details">
<summary>点击展开/折叠代码</summary>

```html
<head>
<style>
    .hidden { display: none; }

    @media (min-width: 1158px) {
        .pc\:block {
            display: block;
        }
    }
</style>

// 内容
// .hidden { display: none;}
<link src="css.css">
</head>

// tailwindcss 生成的 media 都在最下面没有问题
// 但是动态导入的 link 他插入了 head 的最下面，导致 hidden 大于 pc:block 的优先级让 他失效了
<div class="hidden pc:block">
```
</details>

<script setup>
import CssLevel from './components/css-level.vue'
import { onMounted } from 'vue'
</script>