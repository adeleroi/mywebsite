<template>
  <div class="navmenu">
    <div class="shadow">
        <div class="logo">
            <router-link :to="{
                name: 'Home'
            }" class="logo" style="text-decoration: none;">
                <img src="../assets/logo/myAvatar.svg" alt="" class="image">
                <div class="name" style="color: white"> <span class="firstname"> Ange-wilfried </span > N'guessan</div>
            </router-link>
        </div>
      <div class="navitems">
          <ul class="items">
            <li class="item resume">
                <a href="https://firebasestorage.googleapis.com/v0/b/cryptowebsite-798af.appspot.com/o/cv%2FCV.pdf?alt=media&token=b00ba14f-f79d-46cc-933d-ed07bb186f0c" 
                style="text-decoration: none; color: white" target ="_blank" rel="noopener noreferrer">
                  CV
                </a>    
            </li>
              <!-- <li class="item joinme">Projets</li> -->
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style>
.navmenu{
    height: 80px;
    background-color: skyblue;
}
.shadow{
    display: flex;
    justify-content: space-between;
    background-color: rgb(41, 38, 32);
    padding: 5px 20px 5px 20px;
    color: white;
    font-size: 20px;
}
.logo{
    display: flex;
    place-items: center;
    font-size: 30px;
}
.image{
    height: 60px;
    width: 60px;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: 10px;
}
.navitems{
    display: flex;
    place-items: center;
}
.items{
    display: flex;
    list-style: none;
    width: 150px;
    justify-content: space-around;
}
.firstname{
    color: skyblue;
}
.item{
    cursor: pointer;
}
@media only screen 
and (min-device-width: 320px) 
and (max-device-width: 614px)

and (-webkit-min-device-pixel-ratio: 2) {
    .name {
        display: none
    }
    .items{
        justify-content: flex-end;
    }
}
</style>
