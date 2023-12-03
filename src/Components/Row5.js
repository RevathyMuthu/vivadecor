import React from 'react'
import { Box, Image, Text, VStack, Grid, GridItem, HStack } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Row5 = () => {
    return (
        <div style={{ paddingTop: 300 }}>
            <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                <GridItem colSpan={2} h='200' pl={10} >
                    <Image src="/images/Row5.jpg" alt="Content Image" align="center" w={650} h={570} />
                </GridItem>

                <GridItem colStart={3} colEnd={6} h='20'>
                    <Box w={400}>
                        <Text fontSize="40" fontWeight={'bold'}>
                            What Our Customers Say About Us
                        </Text>
                    </Box>
                </GridItem >
                <GridItem colStart={1} colEnd={1} h='20' mt={420} pl={10} >
                    <ArrowBackIcon bg={'#F1F1F1'} borderRadius={5} w={20} h={20} mr={10} />
                    <ArrowForwardIcon bg={'#F1F1F1'} borderRadius={5} w={20} h={20} />

                </GridItem>



                <GridItem colStart={2} colEnd={6} h='20'>
                    <HStack>
                        <GridItem colStart={2} colEnd={6} h='20'>
                            <Box w={500} h={500} bg={'#1F1F1F'}>
                                <Box pt={10} pl={10}>
                                    <Image src="/images/quote.png" alt="Content Image" w={5} h={5} />
                                </Box>

                                <Text fontSize="25" color={'white'} pt={10} pl={10} pr={10}>
                                    Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!
                                </Text>
                                <HStack pt={10} pl={10}>
                                    <Image src='/images/Sophie.png' w={20} h={20} />
                                    <VStack pl={10}>
                                        <Text fontSize="20" fontWeight={'bold'} color={'white'}>Sophie Carter</Text>
                                        <Text fontSize="18" color={'white'}>New York, USA</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </GridItem>
                        <GridItem colStart={3} colEnd={6} h='20'>
                            <Box w={500} h={500} bg={'#1F1F1F'}>
                                <Box pt={10} pl={10}>
                                    <Image src="/images/quote.png" alt="Content Image" w={5} h={5} />
                                </Box>

                                <Text fontSize="25" color={'white'} pt={10} pl={10} pr={10}>
                                    Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!
                                </Text>
                                <HStack pt={10} pl={10}>
                                    <Image src='/images/James.png' w={20} h={20} />
                                    <VStack pl={10}>
                                        <Text fontSize="20" fontWeight={'bold'} color={'white'}>James Bennett</Text>
                                        <Text fontSize="18" color={'white'}>Toronto, Canada</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </GridItem>
                    </HStack>
                </GridItem>

            </Grid>
        </div>
    )
}

export default Row5