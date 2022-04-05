<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="navbar_btns" >Главная</div>
        <div @click="$router.push('/users')" class="navbar_btns" >Пользователи</div>
        <div @click="$router.push('/about')" class="navbar_btns" >О нас</div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar{
    display: flex;
    justify-content: center;
    background-color: rgb(27, 27, 27);
    color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.692);
}
.navbar_btns{
    padding: 15px;
    background-color: rgb(27, 27, 27);
}
</style>
