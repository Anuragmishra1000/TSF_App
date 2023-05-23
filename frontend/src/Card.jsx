import { Button, Image, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import React from 'react'

const Card = ({ amount, img, checkoutHandler }) => {

    return (
        <VStack>
            <Image m={8} src={img} boxSize={"64"} objectFit="cover" />
            <Button colorScheme='red' onClick={() => checkoutHandler(amount)}>Donate</Button>
        </VStack>
    )
}

export default Card