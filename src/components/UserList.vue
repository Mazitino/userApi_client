<template>
    <div v-if="users.length > 0">
        <h3>Список пользователей</h3>
        <transition-group name="user-list">
            <user-item  
                v-for="user in users" 
                :user="user"
                :key="user.id"
            />
        </transition-group>
    </div>
    <h2 v-else style="color: red">
        Список пользователей пуст
    </h2>
</template>

<script>
import UserItem from "@/components/UserItem";
export default {
    components: {UserItem},
    props: {
        users: {
            type: Array,
            required: true
        }
    } 
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.3s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.user-list-move {
  transition: transform 0.5s ease;
}
</style>