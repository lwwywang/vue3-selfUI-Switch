<template>
    <div>
        Button 示例
    </div>
    <h1>示例1</h1>
    <div>
        <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">按钮1</Button>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"

export default {
    components: { Button },
    setup() {
        const onClick = () => { }
        return {
            onClick
        }
    },
}

</script>