<template>
    <!-- <select v-model="modelValue" @change="changeOptions"> -->
    <select :value="modelValue" @change="changeOptions($event.target.value)">
        <option disabled value="">
            Выберите из списка
        </option>
        <option
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOptions(newValue) {
            this.modelValue = newValue;
        }
    }
    // methods: {
    //     changeOptions(event){
    //         this.$emit('update:modelValue', event.target.value);

    //     }
    // }
}
</script>

<style>

</style>