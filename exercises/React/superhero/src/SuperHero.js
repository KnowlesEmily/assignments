import React, { Component } from 'react';
import HeroList from './HeroList';

const heroes = [
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  },
  {
    name: "Shaquille O'Neal",
    catchPhrase: "Kazaam",
    imgUrl: "https://pixel.nymag.com/imgs/daily/vulture/2012/04/03/03_kazaam2.w1200.h630.jpg"
  }
]

const SuperHero = () => {
  const mappedHeroes = heroes.map((hero, i) => {
    return (
      <HeroList
        key={i+hero.name}
        name={hero.name}
        catchPhrase={hero.catchPhrase}
        imgUrl={hero.imgUrl}
        />
    )
  })

  return (
    <div>
      {mappedHeroes}
    </div>
  )
}

export default SuperHero