<script>
import {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-vue-ui-kit';


export default {
    components: {
        MDBBtn,
        MDBNavbar,
        MDBNavbarToggler,
        MDBNavbarBrand,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBCollapse,
        MDBDropdown,
        MDBDropdownToggle,
        MDBDropdownMenu,
        MDBDropdownItem
    },
    data() {
        return {
            name: "",
            collapse1: false,
            dropdown1: false,
            dropdown6: false,
            isLogged: false
        }

    },
    mounted() {

         if(localStorage.getItem("name") != undefined) {
            this.isLogged = true
         
         }


    },
methods: {
    closeS() {
        localStorage.clear()
        location.reload()
      
    }
}




};
</script>
<template>

    <MDBNavbar light bg="light" expand="lg" container>

        <MDBNavbarBrand>LUNA</MDBNavbarBrand>

        <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent"></MDBNavbarToggler>

        <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
            <MDBNavbarNav class="mb-2 mb-lg-0">

                <MDBNavbarItem>
                    <router-link to="/">Inicio</router-link>
                </MDBNavbarItem>

                <MDBNavbarItem>
                    <router-link to="/ayuda">ayuda</router-link>
                </MDBNavbarItem>

                <MDBNavbarItem>
                    <router-link to="/contactanos">contactanos</router-link>
                </MDBNavbarItem>
                <div class="d-flex" v-if="!isLogged">
                    <MDBNavbarItem>
                    <router-link to="/login">Iniciar sesión</router-link>
                </MDBNavbarItem>

                <MDBNavbarItem>
                    <router-link to="/registro">Registrarse</router-link>
                </MDBNavbarItem>
                </div>
                <div v-else>
                    <MDBNavbarItem>
                    <p @click="closeS" >Cerrar sesión</p>
                </MDBNavbarItem>
                </div>


                <MDBNavbarItem>


                    <router-link to="/Error">404</router-link>
                </MDBNavbarItem>

            </MDBNavbarNav>
        </MDBCollapse>

    </MDBNavbar>
</template>

<style scoped>
a, p {
    margin: 0 10px;
    font-weight: bold;
    color: #0c0c0c;
    cursor: pointer;
}

.router-link-exact-active {
    color: #3b71ca;
}
</style>