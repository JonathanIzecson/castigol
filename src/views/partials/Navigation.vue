<template>
    <div>
        <nav class="bg-gray-800 py-6 relative">
            <div class="container mx-auto flex px-8 lg:px-0">
                <div class="flex flex-grow items-center">
                    <img class="w-36" alt="logo" src="../../assets/logo.svg">
                </div>
                <div class="flex lg:hidden">
                    <img @click="showMenu" class="cursor-pointer" src="../../assets/circle-menu.png" alt="">
                </div>
                <div id="menu" class="lg:flex hidden flex-grow justify-between items-center w-full lg:w-auto left-0 absolute top-24 lg:relative lg:top-0 py-10 lg:py-0 bg-gray-800">
                    <div class="flex flex-col lg:flex-row mb-4 lg:mb-0 mx-4 lg:mx-0">
                        <router-link class="text-white lg:mr-7 mb-4 lg:mb-0" to="/">Inicio</router-link>
                        <router-link class="text-white lg:mr-7 mb-4 lg:mb-0" to="#">Mis quinielas</router-link>
                        <router-link class="text-white lg:mr-7 mb-4 lg:mb-0" to="#">Últimos resultados</router-link>
                        <router-link class="text-white" to="#">Acerca</router-link>
                    </div>
                    <div class="flex flex-col lg:flex-row mx-4 lg:mx-0">
                        <router-link to="/login" class="text-white border border-white rounded-md py-2.5 px-5 hover:bg-white
                        hover:text-gray-800 transition duration-500 ease-in-out lg:mr-4 mb-4 lg:mb-0"> Iniciar Sesion </router-link>
                        <router-link to="#" class="text-white bg-blue-500 border border-blue-500 rounded-md py-2.5 px-5
                        hover:bg-blue-600 hover:border-blue-600 transition duration-500 ease-in-out"> Regístrate </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        showMenu() {
            let menu = document.querySelector('#menu');
            menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden');
        }
    },
}
</script>

<style>
</style>