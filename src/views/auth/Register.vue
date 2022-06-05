<template>
    <div>
        <div class="bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
            <div class="bg-white border rounded-lg lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
                <form class="p-12 md:p-24" @submit.prevent="register">
                    <div class="flex items-center text-lg mb-6 md:mb-8 bg-gray-200 border rounded-lg">
                        <svg class="ml-3" width="24" viewBox="0 0 24 24">
                            <path
                                d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                        </svg>
                        <input type="text" id="username" v-model="form.username"
                            class="bg-gray-200 pl-2 py-2 md:py-4 focus:outline-none w-full"
                            placeholder="Usuario" />
                    </div>
                    <div class="flex items-center text-lg mb-6 md:mb-8 bg-gray-200 border rounded-lg">
                        <svg class="ml-3" viewBox="0 0 24 24" width="24">
                            <path
                                d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                        </svg>
                        <input type="email" id="email" v-model="form.email"
                            class="bg-gray-200 pl-2 py-2 md:py-4 focus:outline-none w-full" placeholder="Correo Electronico" />
                    </div>
                    <div class="flex items-center text-lg mb-6 md:mb-8 bg-gray-200 border rounded-lg">
                        <svg class="ml-3" viewBox="0 0 24 24" width="24">
                            <path
                                d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                        </svg>
                        <input type="password" id="password" v-model="form.password"
                            class="bg-gray-200 pl-2 py-2 md:py-4 focus:outline-none w-full" placeholder="Contraseña" />
                    </div>
                    <div class="flex items-center text-lg mb-6 md:mb-8 bg-gray-200 border rounded-lg">
                        <svg class="ml-3" viewBox="0 0 24 24" width="24">
                            <path
                                d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                        </svg>
                        <input type="password" id="password_confirmation" v-model="form.password_confirmation"
                            class="bg-gray-200 pl-2 py-2 md:py-4 focus:outline-none w-full" placeholder="Confirmar contraseña" />
                    </div>

                    <button :disabled="emptyFields" :class="{ 'cursor-not-allowed': emptyFields }"
                        class="bg-gray-800 font-medium p-2 md:p-4 mb-8 text-white uppercase w-full hover:bg-gray-900 transition duration-500 ease-in-out">Registrar</button>
                    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Intente de nuevo!</strong>
                        <span class="block sm:inline"> Ocurrió un error al registrar el usuario.</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                username: 'JonathanIzecson',
                email: 'jonathanemmanuel.2292@gmail.com',
                password: 'password',
                password_confirmation: 'password'
            },
            error: false,
        }
    },
    computed: {
        emptyFields(){
            return Object.values(this.form).some( value => !value);
        }
    },
    methods: {
        async register(){
            await axios.get('/sanctum/csrf-cookie');
            axios.post('/register', this.form)
            .then(resp => {
                this.$router.push({name:'Home'});
            })
            .catch(error => {
                this.error = true;
                setTimeout(() => this.error = false, 3000);
            });
        }
    }
}
</script>

<style>
</style>