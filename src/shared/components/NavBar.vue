<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Iniciar Sesión</router-link>
        <router-link to="/registro">Registro</router-link>
        <router-link to="/Ayuda">Ayuda</router-link>
        <router-link to="/contactanos">Contactanos</router-link>
    </div>
</template>

<style scoped>

div {
    padding: 0 30px;
}

a {
    margin: 0 10px;
    font-weight: bold;
    color: #587744;
}
.router-link-exact-active {
    color: #42b983;
}
</style>