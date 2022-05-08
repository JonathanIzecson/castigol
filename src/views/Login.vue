<template>
    <div>
        <form @submit.prevent="initSession">
            <input type="text" v-model="form.email" placeholder="Email..."/> <br/>
            <input type="password" v-model="form.password" placeholder="Password..."/> <br/>
            <button type="submit">Iniciar sesion</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data(){
        return {
            form: {
                email: 'jonathanemmanuel.2292@gmail.com',
                password: 'password'
            },
        }
    },
    computed: {
        ...mapState(['user']),
    },
    methods:{
        ...mapActions(['login', 'logout']),
        initSession(){
            this.login(this.form);
        },
    }
}
</script>

<style>

</style>