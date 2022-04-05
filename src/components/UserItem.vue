<template>
    <div class="user">
        <div>
            <div v-show="false" class="">{{user.id}}</div>
            <div><strong>Имя: </strong> {{ user.first_name }} </div>
            <div><strong>Фамилия: </strong> {{ user.last_name }} </div>
            <div><strong>Email: </strong> {{ user.email }} </div>
            <div><strong>Аватар: </strong> {{ user.avatar }} </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
.user {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>