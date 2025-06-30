# backdrop-filter

双层 backdrop-filter 使用会出现问题

<BackdropFilter />

可以看到，这三个 demo 的区别就是不正常使用的 backdrop-filter 嵌套了 backdrop-filter，正常双层的则是拆分成俩个独立的元素，能够正常生效

<details class="code-details">
<summary>点击展开/折叠代码</summary>

<<< @/components/backdrop-filter.vue#snippet{html}
</details>

<script setup>
import BackdropFilter from './components/backdrop-filter.vue'
import { onMounted } from 'vue'
</script>