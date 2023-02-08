<template>
    <div class="main">
    <div class="tab-content text-center shadow-4">
      <p class="text-left title">Registro</p>
      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <div tag="form" class="form tab-pane fade show active needs-validation" novalidate @submit.prevent="checkForm">
        <MDBInput
        invalidFeedback="Please provide your last name"
        validFeedback="Looks good!"
        required class="mb-4 mt-4" type="email" label="Correo" v-model="email" />
        <MDBInput required class=" mt-4" type="email" label="Contraseña" v-model="password" />
        <MDBInput required class=" mt-4" type="email" label="Repite la contraseña" v-model="againpassword" />

        <MDBBtn type="submit" @click="sendData"  class="mt-5" color="primary">Registrarse</MDBBtn>
      </div>
      <div class="text-center mt-4">
        <p>¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión</router-link></p>
      </div>
      </div>
    
    </div>
    </div>
    </template>

<script>
import { MDBInput, MDBBtn } from 'mdb-vue-ui-kit';


export default {
  components: {
    MDBInput,
    MDBBtn
  },
  data (){
    return {
      email: "",
      password: "",
    }
  },
  methods : {
    sendData() {
        this.$swal.fire({
          icon: 'error',
          title: 'No tienes permisos para crear usuarios',
          text: 'Verifica con el adm',
        })
    }
  }
}
</script>


    <style scoped>
    
    .tab-content{
      max-width: 400px;
      padding: 20px ;
      border-radius: 15px;
    }
     .form-outline {
      border-bottom: 1px solid rgba(0, 0, 0,0.3);
      margin: 30px 0;
    
     }
     .main {
      width: 100%;
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
     }
    
     .title {
      font-weight: bold;
      font-size: 24px;
     }
    </style>