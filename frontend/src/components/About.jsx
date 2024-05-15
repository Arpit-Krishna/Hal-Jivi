import React from 'react'
import Style from './aboutus.module.css';

export default function About() {
  return (
    <div className = {Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1> 👋 About Us.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit delectus eum voluptates doloremque consequuntur rem dolor soluta quis, doloribus magni qui ratione temporibus quidem ipsum animi adipisci quam commodi nesciunt molestias blanditiis! Optio nemo veritatis excepturi ratione porro numquam consectetur inventore sit voluptate dolor dolorum eum magnam libero cupiditate, facilis id delectus aperiam et omnis saepe est neque. Facere molestiae incidunt harum maiores laboriosam numquam eveniet eaque voluptas quae doloremque aliquid modi mollitia nesciunt, exercitationem eum tenetur error non. Nisi in odit accusantium saepe, inventore voluptatum, facilis tempora sapiente quaerat voluptatem quisquam doloremque mollitia, hic porro. 
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            {/* <Image src={}/> */}
          </div>

        </div>
      </div>
      
    </div>
  )
}
