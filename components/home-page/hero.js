import Image from 'next/image'

import classes from './hero.module.css'

function Hero () {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/myself.jpg'
          alt='An image showing Vitor'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Vitor</h1>
      <p>I blog about web development - especially frontend frameworks like React or similars</p>
    </section>
  )
}

export default Hero
