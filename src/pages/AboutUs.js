import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


export default function AboutUs() {
    return (
        <>
        <Hero hero="roomsHeroAbout">
            <Banner title="About Us">
               <Link to="/" className="btn-primary">Return to Home</Link>
            </Banner>
        </Hero>
        <section className='roomslist'>
            <div className='about-us'>
            <h3>About Galle Resort</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi. Cras sed felis eget velit aliquet. Amet dictum sit amet justo donec enim. Posuere morbi leo urna molestie at. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Nullam non nisi est sit amet facilisis. Odio ut enim blandit volutpat maecenas volutpat blandit. Nulla facilisi nullam vehicula ipsum a. Velit aliquet sagittis id consectetur.
            </p>
            <br/>
            <p>
                Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nullam non nisi est sit amet. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Arcu dui vivamus arcu felis. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Diam maecenas sed enim ut sem viverra. Diam quis enim lobortis scelerisque. Risus in hendrerit gravida rutrum quisque non tellus. Porta lorem mollis aliquam ut porttitor leo a diam. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Nisl pretium fusce id velit. Donec enim diam vulputate ut pharetra. Urna nunc id cursus metus aliquam. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Sit amet mattis vulputate enim nulla aliquet porttitor. Lobortis mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <br/>
            <p>
                Auctor urna nunc id cursus. Aliquet sagittis id consectetur purus. Consectetur adipiscing elit pellentesque habitant morbi tristique. Viverra mauris in aliquam sem fringilla ut. Dolor sed viverra ipsum nunc aliquet. Euismod lacinia at quis risus. Purus non enim praesent elementum facilisis leo vel fringilla. Viverra nibh cras pulvinar mattis nunc sed blandit. Turpis egestas sed tempus urna et. Sit amet venenatis urna cursus. At in tellus integer feugiat scelerisque varius morbi. Egestas erat imperdiet sed euismod.

                In arcu cursus euismod quis. Ipsum dolor sit amet consectetur. Quam id leo in vitae turpis massa sed elementum. Massa enim nec dui nunc. Consequat mauris nunc congue nisi vitae suscipit tellus. Nibh ipsum consequat nisl vel pretium lectus quam. Pellentesque sit amet porttitor eget dolor morbi non arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. A erat nam at lectus. Dis parturient montes nascetur ridiculus mus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Feugiat in fermentum posuere urna.

                Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Vestibulum sed arcu non odio euismod lacinia. Elementum sagittis vitae et leo. Nunc sed id semper risus in hendrerit. Venenatis tellus in metus vulputate. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Quam adipiscing vitae proin sagittis nisl rhoncus. Augue lacus viverra vitae congue eu consequat ac. Nec dui nunc mattis enim ut tellus. Etiam sit amet nisl purus in. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Viverra mauris in aliquam sem fringilla ut morbi. Sit amet facilisis magna etiam tempor. Lectus quam id leo in vitae turpis massa. Leo in vitae turpis massa sed elementum. Integer eget aliquet nibh praesent. Nisl vel pretium lectus quam id leo in.
            </p>
            </div>
        </section>
        </>
    )
}
