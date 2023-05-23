import React from 'react'
import { ThemeProvider, theme, Box, CSSReset, ColorModeProvider, Flex, Stack, IconButton, useColorMode } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";
import { useState } from 'react';
// import Donate from './components/Donate';
import SignupCard from './user';
import Intro from './Intro';


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "The Spark Foundation",
            description: "Donation",
            image: "https://www.gapio.in/wp-content/uploads/2022/05/1_4XRAX4obUOvMVqWibVCneQ.jpeg",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Anurag mishra",
                email: "anuragmishra08c.com",
                contact: "9560414133"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    // const [amount, setAmount] = useState('');

    // const handleOnChange = (e) => {
    //     // console.log("Uppercase was clicked on change ")
    //     setAmount(e.target.value);
    // }
    return (


        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                <Intro img={"https://lokmitra.org.in/wp-content/uploads/2015/02/Girl-from-Harchandpur-by-Monica-2010.jpg"} />
                <SignupCard />
                <Card amount={2000} img={"https://www.gapio.in/wp-content/uploads/2022/05/1_4XRAX4obUOvMVqWibVCneQ.jpeg"} checkoutHandler={checkoutHandler} />
                {/* <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} /> */}

            </Stack>
        </Box>
    )
}




export default Home