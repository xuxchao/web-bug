# style 没有添加兼容性支持

`backdrop-filter` 他有浏览器兼容属性是 `-webkit-backdrop-filter`。这里拿 vue 项目来说只要写在 style 标签中，他会自动生成 `-webkit-backdrop-filter`。但是 vue 中使用 style 和 :style 就不会生成

<StyleCompat />

<details class="code-details">
<summary>点击展开/折叠代码</summary>

<<< @/components/style-compat.vue
</details>

<script setup>
import StyleCompat from './components/style-compat.vue'
</script>
