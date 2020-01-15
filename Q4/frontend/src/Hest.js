import React from 'react'
import hest from './hest01.png'

export default () =>
    <div>
        <img src="https://hellerupfinans.dk/wp-content/uploads/animal-brown-horse-752x440.jpg" alt="external-hest"/>
        <img src={hest} alt="local-hest"/>
    </div>