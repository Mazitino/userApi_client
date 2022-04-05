<template>
    <div class="user">
        <div>
            <div v-show="false" class="">{{user.id}}</div>
            <div><strong>Имя: </strong> {{ user.first_name }} </div>
            <div><strong>Фамилия: </strong> {{ user.last_name }} </div>
            <div><strong>Email: </strong> {{ user.email }} </div>
        </div>
        <div>  
            <img :src=user.avatar />  
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
    padding: 20px;
    border: 2px solid rgba(0, 87, 128, 0.11);
    background-color: rgb(250, 250, 250);
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>