<template>
  <div class="contact">
    <div class="contact-container">
      <h1 class="contact-title">Contact</h1>
      <div class="contact-msg">
        <p class="contmsg">
          Vous pouvez me contactez en remplissant le formulaire ci-dessous.
        </p>
        <div class="social">
          <ul class="socialmediaitems">
            <li class="item">
              <a href="https://github.com/adeleroi" target ="_blank" rel="noopener noreferrer">
              <img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxwYXRoIGZpbGw9IiM4MjgwOTEiIGQ9Ik0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTIiLz48L3N2Zz4K" alt="" class="socialicon">
              </a>
            </li>
            <li class="item">
              <a href="https://www.linkedin.com/in/ange-wilfried-n-guessan-634a87ba/" target ="_blank" rel="noopener noreferrer">
                <img src="data:image/svg+xml;base64,PHN2ZyAgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkxpbmtlZEluIGljb248L3RpdGxlPjxwYXRoIGZpbGw9IiM4MjgwOTEiIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2MtMS4xNDQgMC0yLjA2My0uOTI2LTIuMDYzLTIuMDY1IDAtMS4xMzguOTItMi4wNjMgMi4wNjMtMi4wNjMgMS4xNCAwIDIuMDY0LjkyNSAyLjA2NCAyLjA2MyAwIDEuMTM5LS45MjUgMi4wNjUtMi4wNjQgMi4wNjV6bTEuNzgyIDEzLjAxOUgzLjU1NVY5aDMuNTY0djExLjQ1MnpNMjIuMjI1IDBIMS43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0MkMwIDIzLjIyNy43OTIgMjQgMS43NzEgMjRoMjAuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0IDIzLjIgMCAyMi4yMjIgMGguMDAzeiIvPjwvc3ZnPg==" alt="" class="socialicon">
              </a>
            </li>
          </ul>
        </div>
      </div>
        <form action="post" class="signup-form-data" @submit.prevent="connect">
            <label for="" class="signup-title" >Nom*</label>
            <input type="text" required placeholder="Entrez votre nom" v-model.lazy="name" class="signup-username signform">
            <label for="" class="signup-title">Email*</label>
            <input type="text" required placeholder="Entrez votre email" v-model.lazy="email" class="signup-username signform">
            <label for="" class="signup-title" >Compagnie*</label>
            <input type="text" required placeholder="Entrez le nom de votre compagnie" v-model.lazy="compagnie" class="signup-username signform">
            <label for="" class="signup-title" >Message*</label>
            <textarea required class="contactmsg" v-model="msg"></textarea>
            <div class="btn">
              <button class="signup-submit-btn ">
                  <span class="signup-submit-btn-msg">SUBMIT</span>
              </button>
            </div>
        </form>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data(){
    return {
      name: '',
      email: '',
      compagnie: '',
      msg: '',
      showError: false,
      showSucess: false,
      baseUrl: "formdata"
    }
  },
  methods:{
    connect(){
      const promesse = fetch(this.baseUrl, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          company: this.compagnie,
          msg: this.msg
        })
      }).then(x => {
          return x.json();
      }).then(x=> {
        if(x.status === 200){
          this.showSucess = true;
          this.name = '',
          this.email = '',
          this.msg = '',
          this.compagnie = ''
        }else{
          this.showError = true;          
        }
      })
      return promesse;

    },

  }
}
</script>
<style>
.contact{
  display: flex;
  margin: 60px auto;
  max-width: 960px;
  place-items: center;
  margin-bottom: 20px;
}
.contact-title{
  text-align: left;
}
.contmsg{
  font-size: 23px;
}
.socialmediaitems{
  display: flex;
  list-style: none;
  padding: 0;
}
 .social{
   width: 100%;
   display: grid;
   place-items: center;
   display: flex;
 }
 .socialicon{
    height: 50px;
    width: 50px;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: 10px;
 }
 .signup-form-data{
   display: grid;
 }
 .signup-title{
   width: 100%;
   text-align: left;
 }
 .signup-username {
   height: 40px;
   margin-bottom: 10px;
   margin-top: 5px;
   width: 98%;
   font-size: 20px;
   padding-left: 10px;
 }
 .signup-submit-btn{
    height: 50px;
    width: 110px;
    background-color: #292620;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: .3s ease-in-out;
 }
 .btn{
   width: 100%;
   display: flex;
   justify-content: flex-end;
 }
 .contactmsg{
   height: 100px;
   margin-bottom: 10px;
   margin-top: 5px;
   padding-left: 10px;
   font-size: 16px;
 }
</style>