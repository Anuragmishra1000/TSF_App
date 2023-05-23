import { Box, Image,Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>
                <Image
                  m={5}  src="https://media.istockphoto.com/id/543820866/photo/young-diverse-friends-in-local-park-hold-thank-you-sign.jpg?s=612x612&w=0&k=20&c=qOlDPhrAztXJuqE4MIlhZkZQlnugdgXl_IBrQoFzXSc=" alt="" 
               />
                <Heading textTransform={"uppercase"}> Payment Successfull</Heading>

                <Text as = "b">
                    Reference No: {referenceNum}
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess