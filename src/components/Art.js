import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/Art.css';

// import custom components
import ArtImg from './ArtImg';


class Art extends Component {
  constructor() {
    super();

    this.state = {
      art: [
        {
            "artTitle": "do no harm",
            "artDesc": "when you smoke on the sidewalk you are hurting all of us",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/harm.png",
            "songTitle": "keep the streets empty for me",
            "songArtist": "fever ray",
            "songUri": "3TbKcmraxp8J4PvsJNRXhi",
            "path": 'harm.png'
        },
        {
            "artTitle": "it's fashun, hunny",
            "artDesc": "you woudn't understand",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_6707.png",
            "songTitle": "evelyn",
            "songArtist": "kim tillman",
            "songUri": "7IxAZG49yA14FHkFADeseO",
            "path": 'IMG_6707.png'
        },
        {
            "artTitle": "stoicism",
            "artDesc": "you asked me why my voice croaks and i wince every time i try to smile so i am painting you this",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/scream.png",
            "songTitle": "there's nothing at 4th & king but a train station",
            "songArtist": "corpus callosum",
            "songUri": "6woDFmBzkY9IF6XNYeFF4e",
            "path": 'scream.png'
        },
        {
            "artTitle": "shame",
            "artDesc": "wear it like a crown",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/blood1.png",
            "songTitle": "little drop of poison",
            "songArtist": "tom waits",
            "songUri": "03wn5kP9qGwFHz2hpP2GrY",
            "path": 'blood1.png'
        },
        {
            "artTitle": "lady macbeth",
            "artDesc": "you'll never wash away the blood from your hands but we'll worship you anyway",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_5958.png",
            "songTitle": "rings on her fingers",
            "songArtist": "vudu sister",
            "songUri": "0PtXnk3nDReF3Hipg91xZK",
            "path": 'IMG_5958.png'
        },
        {
            "artTitle": "untitled",
            "artDesc": "be careful what you wish for",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_7780.png",
            "songTitle": "winter ghosts",
            "songArtist": "JBM",
            "songUri": "3c1ZxZ6Sz3xMHQRNU2OGln",
            "path": 'IMG_7780.png'
        },
        {
            "artTitle": "loss",
            "artDesc": "hide my ashes in the most beautiful canyon",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/ghosts.png",
            "songTitle": "fourth of july",
            "songArtist": "sufjan stevens",
            "songUri": "4K3RZJ8sWPbv0IedcnEfw6",
            "path": 'ghosts.png'
        },
        {
            "artTitle": "cul sec",
            "artDesc": "liberté, egalité, biere-eté",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_1743.png",
            "songTitle": "tous les memes",
            "songArtist": "stromae",
            "songUri": "1GC1MIaRMW3kfVK9VyD5Ii",
            "path": 'IMG_1743.png'
        },
        {
            "artTitle": "untitled",
            "artDesc": "bare your soul & become the sun",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_6580.png",
            "songTitle": "broken land",
            "songArtist": "the bones of j.r. jones",
            "songUri": "49QhVXEB8yQW635WvWA9mT",
            "path": 'IMG_6580.png'
        },
        {
            "artTitle": "saint sisters",
            "artDesc": "sensational // sinsational",
            "artLink": "https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_5402.png",
            "songTitle": "yo! my saint",
            "songArtist": "karen o",
            "songUri": "2We0UNxKWgx4by5BVxy6P5",
            "path": 'IMG_5402.png'
        }
      ]
    }

  }



  render() {
    return (
      <div className="component">
      {this.state.art ?
        this.state.art.map((item, key) => {
          return (
            <LazyLoad key={key}>
            <ArtImg key={key} info={item} imageSource={"./assets/" + item.path}/>
            </LazyLoad>
          )
        })
        : ''
      }
      </div>
    )
  }
}

export default Art;
