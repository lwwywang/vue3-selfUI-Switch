<template>
    <div>
        <topnav />
        <div class="banner">
            <h1>Liwen的UI框架</h1>
            <h2>这是一个厉害的UI框架</h2>
            <p class="actions">
                <a>Github</a>
                <a>开始</a>
            </p>
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