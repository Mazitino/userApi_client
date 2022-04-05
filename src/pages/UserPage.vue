<template>
    <div >
        <h1>Страница с пользователями</h1>
        <my-input
            v-on:keyup.enter="fetchUser"
            v-model="searchFirstName"
            placeholder="Поиск по имени в базе...."
        />
        <my-input
            v-model="searchLastName"
            v-on:keyup.enter="fetchUser"
            placeholder="Поиск по фамилии в базе...."
        />
        <my-input
            v-model="searchQuery"
            placeholder="Фильтр по имени...."
        />
        <my-input
            v-model="searchQuery2"
            placeholder="Фильтр по фамилии...."
        />
        <div class="app_btns">
            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        
        <user-list 
            :users="sortedAndSearchedUsers2"
            v-if="!isUserLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div ref="observer" class="observer" ></div>
    </div>
</template>









<script>
import UserList from "@/components/UserList.vue"
import axios from 'axios'

export default {
    components: {
        UserList,
    },
    data(){
        return {
            users: [],
            isUserLoading: false,
            selectedSort: '',
            searchQuery: '',
            searchQuery2: '',
            searchFirstName: '',
            searchLastName: '',
            page: 1,
            limit: 6,
            totalPages: 0,
            sortOptions: [
                {value: 'first_name', name: 'По имени'},
                {value: 'last_name', name: 'По фамилии'},
            ]
        }
    },
    methods: {
        async fetchUser(){
            try{
                this.isUserLoading = true;
                if(this.searchFirstName || this.searchLastName)
                {
                    const responce = await axios.get('http://localhost:8080/api/user', {
                        params: {
                            first_name: this.searchFirstName,
                            last_name: this.searchLastName
                        }
                    });
                    this.users = [responce.data.data];
                    console.log( this.users);
                } else {
                    this.page = 1;
                    this.limit = 6;
                    this.fetchUsers();
                    return;
                };
            }catch (e){
                alert('Ошибка, введите корректные данные!')
            }finally {
                this.isUserLoading = false;
            }

        },
        async fetchUsers(){
            try {
                this.isUserLoading = true;
                const responce = await axios.get('http://localhost:8080/api/users', {
                    params: {
                        page: this.page,
                        limit: this.limit
                    }
                });
                //console.log(responce);
                this.totalPages = Math.ceil(100 / this.limit)
                this.users = responce.data.user;  
                console.log( this.users);
            }catch (e){
                alert('Ошибка')
            }finally {
                this.isUserLoading = false;
            }
        },
        async loadMoreUsers(){
            try {
                this.page +=1;
                const responce = await axios.get('http://localhost:8080/api/users', {
                    params: {
                        page: this.page,
                        limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(100 / this.limit)
                this.users = [...this.users, ...responce.data.user];  
            }catch (e){
                alert('Ошибка')
            }
        }
    },
    mounted(){
        this.fetchUsers();
        console.log( this.$refs.observer);
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && this.page < this.totalPages) {
                this.loadMoreUsers()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedUsers() {
            return [...this.users].sort((user1, user2)=> user1[this.selectedSort]?.localeCompare(user2[this.selectedSort]))
        },
        sortedAndSearchedUsers() {
            return this.sortedUsers.filter(user => user.first_name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
        sortedAndSearchedUsers2() {
            return this.sortedAndSearchedUsers.filter(user => user.last_name.toLowerCase().includes(this.searchQuery2.toLowerCase()))
        }
    },
    watch: {
        
    }
}
</script>









<style>

.app_btns{
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.page_wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
}
.current-page{
    border: 2px solid teal;
}
.observer {
    height: 30px;
    background: rgba(0, 128, 128, 0);
}
</style>