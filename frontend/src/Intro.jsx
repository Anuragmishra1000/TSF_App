import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Intro({ img }) {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                m  = {10}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'310px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <VStack>
                        <Image
                            src={img}
                            layout={'fill'}
                        />
                    </VStack>
                </Box>
                <Stack>
                    <Text
                        color={'red.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'lg'}
                        letterSpacing={1.1}>
                        Donation Campaign
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Give. Empower. Transform
                    </Heading>
                    <Text color={'gray.500'}>
                        Transform lives through education. Your donation empowers children, fuels dreams, and paves the way for a brighter future. Join us in making a lasting impact today</Text>
                </Stack>

            </Box>
        </Center>
    );
}