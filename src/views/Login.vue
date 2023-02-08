<template>
  <div v-if="!isLogged" class="main">
    <div class="tab-content text-center shadow-4">
      <p class=" title">Iniciar sesión</p>
      <div tag="form" class="form tab-pane fade show active needs-validation" novalidate @submit.prevent="checkForm">
        <MDBInput invalidFeedback="Please provide your last name" validFeedback="Looks good!" required class="mb-4 mt-4"
          type="email" label="Correo" v-model="email" />
        <MDBInput required class=" mt-5" type="password" label="Contraseña" v-model="password" />

        <MDBBtn @click="sendData" type="submit" class="mt-5" color="primary">Iniciar sesión</MDBBtn>
      </div>

      <div class="text-center mt-4">
        <p>¿Aún no tienes una cuenta? <router-link to="/registro">Registrate</router-link></p>
      </div>
    </div>
  </div>
  <div v-else>  Ya estás loggeado como {{ name }}</div>
</template>

<script>
import { MDBInput, MDBBtn } from 'mdb-vue-ui-kit';


export default {
  components: {
    MDBInput,
    MDBBtn
  },

  data() {
    return {
      name: "",
      isLogged: false,
      visible: "",
      email: "",
      password: "",
      users: ["chema", "jose","joseluna@gmail.com"
      ],
      passwords: [
        "josemariA1.",
        "Password1234."
      ]

    }
  },
  mounted() {
    if(localStorage.getItem("name") != undefined) {
            this.isLogged = true
            this.name = localStorage.getItem("name")

         }

  },
  methods: {
    sendData() {
      if (this.users.includes(this.email) && this.passwords.includes(this.password)) {
       localStorage.setItem('name', this.email)
       location.reload()
      }else {
        this.$swal.fire({
          icon: 'error',
          title: 'Verifica tus datos',
          text: 'Something went wrong!',
        })
      }
    },
  }
  }
</script>

<style scoped>
.tab-content {
  max-width: 400px;
  padding: 20px;
  border-radius: 15px;
}


.main {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  border: none !important;
}

.title {
  font-weight: bold;
  font-size: 24px;
}
</style>