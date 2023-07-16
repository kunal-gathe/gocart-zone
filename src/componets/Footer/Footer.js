import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import '../Footer/Footer.css'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
        <div className='footer-container'>
            <div className='store-info'>
                <h3 className='footer-logo'>Gocart</h3>
                {/* <p className='store-description'>Welcome to our online store, where you'll find a wide selection of products.</p> */}
            </div>
            <div className='SubScribe'>
                <h4 className='subs-heading'>SubScribe to get Updates!</h4>
                <input type='text' placeholder='Email' className='email-input' />
                <button size='sm' className='f-btn'>SubScribe</button>
            </div>
            <div className='footer-social'>
                <HStack>
                    <Button size='sm' colorScheme='facebook' className='footer-s-icon' >
                        <FaFacebookF />
                    </Button>
                    <Button size='sm' colorScheme='twitter' className='footer-s-icon' >
                        <FaTwitter/>
                    </Button>
                    <Button size='sm' colorScheme='red' className='footer-s-icon'>
                        <FaInstagram />
                    </Button>
                </HStack>
            <div className='footer-call'>
                <p className='call-des'>Call us</p>
                <p className='ph'>+91 1234567890</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
