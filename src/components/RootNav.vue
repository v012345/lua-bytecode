<template>
    <div class="locvars-container">
        <div>locvars :</div>
        <ol>
            <template v-for="value in list.locvars">
                <li>{{ value }}</li>
            </template>
        </ol>
    </div>
    <div class="upvalues-container">
        <div>upvalues :</div>
        <ol>
            <template v-for="value in list.upvalues">
                <li> {{ value }}</li>
            </template>
        </ol>

    </div>
    <div class="k-container">
        <div>k :</div>
        <ol start="0">
            <template v-for="value in list.k">
                <li>{{ value }}</li>
            </template>
        </ol>

    </div>

    <div class="code-container">
        <div>OpCode :</div>
        <ol>
            <template v-for="value in list.code">
                <li><span class="OpCode">{{ value.OpCode }}</span>{{ value.VmExecute }}</li>
            </template>
        </ol>

    </div>
    <div>
        <template v-for="value, index in list.p">
            <div>
                <button @click="isOpen[index] = !isOpen[index]">p[{{ index - 1 }}] :</button>
            </div>
            <div class="p-container" v-show="!isOpen[index]">
                <RootNav :list="value" />
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref([])
const props = defineProps({
    list: {
        type: Object,
        default: () => { }
    }
})
</script>
<style scoped>
.OpCode {
    display: inline-block;
    width: 150px;
}

.upvalues-container,
.locvars-container,
.k-container {
    margin-bottom: 10px;
}

.code-container {
    background-color: aliceblue;
}

.p-container {
    margin-left: 10px;
}
</style>
