<template>
    <div class="locvars-container">
        <div>locvars :</div>
        <template v-for="value, index in list.locvars">
            <span>{{ index }} {{ value }}</span>
        </template>
    </div>
    <div class="upvalues-container">
        <div>upvalues :</div>
        <template v-for="value, index in list.upvalues">
            <span>{{ index }} {{ value }}</span>
        </template>
    </div>
    <div class="k-container">
        <div>k :</div>
        <template v-for="value, index in list.k">
            <span>{{ index }} {{ value }}</span>
        </template>
    </div>

    <div class="code-container">
        <ol>
            <template v-for="value in list.code">
                <li><span class="OpCode">{{ value.OpCode }}</span>{{ value.VmExecute }}</li>
            </template>
        </ol>

    </div>
    <div class="p-container">
        <template v-for="value, index in list.p">
            <div>p[{{ index - 1 }}] :</div>
            <RootNav :list="value" />
        </template>
    </div>
</template>

<script setup>
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
