<template>
    <div class="topnavAndBanner">
        <topnav />
        <div class="banner">
            <h1>Liwen的Vue3-UI框架</h1>
            <h2>这是一个厉害的UI框架</h2>
            <p class="actions">
                <a href="https://github.com">Github</a>
                <router-link to="/doc">开始</router-link>
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
<style lang="scss" scoped>
.topnavAndBanner {
    background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}

.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>