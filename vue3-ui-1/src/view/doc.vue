<template>
    <div>
        <topnav />
        <div class="content">
            <aside>边栏</aside>
            <main>主内容 </main>
        </div>
    </div>
</template>

<script lang="ts">
import topnav from "../components/topnav.vue"
export default {
    components: { topnav }
}
</script>

<style lang="scss" scoped></style>