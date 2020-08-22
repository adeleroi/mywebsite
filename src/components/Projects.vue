<template>
  <div class="projects">
      <div class="about-projet">
        <h1 class="project-title"> Projets</h1>
        <br/>
        <p class="myself-info">Vous trouverez plus bas quelques uns de mes projets. Les technologies avec lesquelles je travaille sont entre autres: VueJS, ASP.NET, Django, NodeJS.</p>
        <div class="project-list">
            <div class="project">
                <img src="../assets/logo/Maintaining wellbeing made simple _ Nytialabs.png" alt="" class="project-img">
                <div class="description">
                    <p class="text">
                        J'ai été responsable de tout le développement de la landing page de la startup NytiaLabs et de l'integration du service marketing MailChimp.
                    </p>
                    <p class="stack"><span class="technologie">Technologies: </span> VueJS, NodeJS</p>
                    <p class="stack link">
                        <a  href="https://nytialabs.com/" target ="_blank" rel="noopener noreferrer">Site web</a>
                    </p>
                </div>
            </div>
            <div class="project">
                <img src="../assets/logo/alphabarbe.png" alt="" class="project-img">
                <div class="description">
                    <p class="text">
                        Site web e-commerce avec système d'authenfication et système de panier.
                    </p>
                    <p class="stack"><span class="technologie">Technologies: </span> VueJS, NodeJS, Firebase Authentication, Firebase CloudFirestore</p>
                    <p class="stack link">
                        <a  href="https://authkoutoukouserver.herokuapp.com/" target ="_blank" rel="noopener noreferrer">Site web</a>
                        <a  href="https://github.com/adeleroi/alphabarbe" class="github" target ="_blank" rel="noopener noreferrer">Github</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="curriculum">
            <a href="https://firebasestorage.googleapis.com/v0/b/cryptowebsite-798af.appspot.com/o/cv%2Fcv.pdf?alt=media&token=e7e3cf87-bc7e-41fe-8c35-8381ec18a93f">
            <button class="cv">
                CV
            </button>
            </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.projects{
  display: flex;
  margin: 60px auto;
  max-width: 960px;
  place-items: center;
  margin-bottom: 20px;
}
.project-title{
    text-align: left;
}
.project-list{
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
}
.project-img{
    height: 450px;

}
.project{
    /* border: 1px solid gray; */
    background-color: white;
    width: 470px;
}
.myself-info{
    text-align: left;
    font-size: 23px;
}
.text, .stack{
    text-align: left;
    padding-left: 15px;
    line-height: 23px;
}

.technologie{
    font-weight: bold;
    font-size: 20px;
}
.github{
    margin-left: 30px
}
.link{
    font-size: 20px;
}
a{
    /* text-decoration: none; */
    color: skyblue;
}
.curriculum{
    margin-top: 50px;
}
.cv{
    height: 55px;
    width: 130px;
    background-color: #292620;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: .3s ease-in-out;

}
.cv:hover{
    background-color: skyblue;
}

@media only screen 
and (min-device-width: 320px) 
and (max-device-width: 614px){
    .projects{
        margin: 0 12px 0 12px;
    }
    .myself-info{
        
        font-size: 18px;
    }
    .project-list{
        flex-direction: column;
    }
    .project{
        width: 350px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-self: center;
        padding-top: 10px;
    }
    .project-img{
        width: 308px;
        height: 350px;
        display: flex;
        align-self: center;
    }
    .description{
        margin-bottom: 10px;
    }
    .cv{
        width: 110px;
        height: 45px;
    }
}
/* @media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
      .project-list{
          display: grid;
          place-items: center;
      }
} */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1023px) 
  and (-webkit-min-device-pixel-ratio: 1) {
      .projects{
          margin: 0 12px 0 12px;
      }
      .project-list{
          display: flex;
      }
      .project{
          width: 365px;
      }
      .project-img{
          width: 356px;
      }

      .quote-container{
          margin: -3px 12px 30px 12px;
          /* margin-bottom: 30px; */
      }
}
</style>