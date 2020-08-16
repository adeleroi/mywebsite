<template>
  <div class="footer">
      <div class="wave">
          <img src="../assets/logo/Vector.svg" alt="" class="waveimg">
      </div>

    <div class="container">
        <div class="quote-container">
            <span class="quote-msg">
                “Treat a work of art like a prince: let it speak to you first.”
            </span>
            <span class="auth-name">― Arthur Schopenhauer</span>
        </div>
        <!-- <div class="extra">
            <span class="question">
                Intéressé à collaborer?
                <router-link :to="{
                    name: 'Contact'
                }"> 
                    <span class="msg">Envoyez moi un message</span>
                </router-link>
            </span>
        </div> -->

        <div class="copyright">
            <span> &#169; Copyright Ange-wilfried 2020</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    margin-top: 100px;
}
.waveimg{
    margin-bottom: -3px;
}
.quote-container{
    background-color: #292620; 
    color: white;
    height: 200px;
    font-family: 'Pacifico', cursive;
    /* font-family: 'Special Elite', cursive; */
    font-size: 40px;
    display: flex;
    flex-direction: column;
}
.container{
    background-color: #292620; 
    color: white;
    padding-bottom: 40px;
}
.extra{
    margin-bottom: 40px;
}
.credit{
    margin-bottom: 10px;
}
.quote-container{
    margin-top: -3px;
}
@media only screen 
and (min-device-width: 320px) 
and (max-device-width: 614px){

    .quote-container{
        margin-top: -3px;
    }
    .quote-msg{
        font-size: 23px;
        padding-top: 40px;
        margin-top: -3px;
    }
    .waveimg{
        width: 703px;
        /* height: 350px; */
    }
    .auth-name{
        margin-top: 16px;
        font-size: 25px;
    }
}

</style>