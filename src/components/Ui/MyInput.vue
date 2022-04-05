<template>
    <input
        :value='modelValue'
        @input='updateInput'
        class="input" 
        type="text"
    >
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
.input {
    width: 100%;
    border: 1px solid rgba(0, 87, 128, 0.26);;
    background-color: rgba(0, 128, 128, 0.020);
    border-radius: 3px;
    padding: 14px 15px;
    margin: 5px 5px;
    }
</style>