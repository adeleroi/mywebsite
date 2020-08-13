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
            <span>― Arthur Schopenhauer</span>
        </div>
        <div class="extra">
            <span class="question">
                Intéressé à collaboré?
                <span class="msg">Envoyez moi un message</span>
            </span>
        </div>
        <div class="credit">
            <a href="https://www.aboutmonica.com/" target ="_blank" rel="noopener noreferrer">Site web modèle</a>
        </div>
        <div class="copyright">
            <span> &#169; Ange-wilfried 2020</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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

</style>