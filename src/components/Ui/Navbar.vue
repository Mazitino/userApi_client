<template>
    <div class="navbar">
        <div @click="$router.push('/')" style="margin-left: 20px" >Главная</div>
        <div class="navbar_btns">
            <my-button @click="$router.push('/users')">пользователи</my-button>
            <my-button style="margin-left: 20px" @click="$router.push('/about')">О нас</my-button>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar{
    height: 60px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 10px rgba(212, 212, 212, 0.616);
    display: flex;
    align-items: center;
    padding: 0x 15px;
}
.navbar_btns{
    margin-left: auto;
}
</style>
