import React from 'react'
import { Box, Button, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react';
const Row3 = () => {
    return (
        <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={40} mt={40}>
                <GridItem w='100%' h='400'  >
                    <Image src="/images/Row3.jpg" alt="Content Image" ml={10} mr={40} align="center" w={500} h={400} />
                </GridItem>
                <GridItem w='100%' h='10' >
                    <GridItem w='100%' h='20' pb={10} >
                        <Box w={350}>
                            <Text fontSize={30} fontWeight={'bold'}>Designing Your Dream With Brilliance</Text>
                        </Box>

                    </GridItem>
                    <GridItem w='100%' h='40' pt={10}>
                        <Box w={500}>
                            <Text>
                                Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience
                            </Text>
                        </Box>

                    </GridItem>
                    <GridItem w='100%' h='10' >
                        <Box w={600}>
                            <HStack>
                                <Text fontWeight={'bold'}>Living Room Interior Design</Text>
                                <Button ml={250} bg={'transparent'} >+</Button>

                            </HStack>
                        </Box>
                    </GridItem>
                    <GridItem w='100%' h='10' >
                        <Box w={600}>
                            <HStack>
                                <Text fontWeight={'bold'}>Commercial Office Room Interior Design</Text>
                                <Button ml={160} bg={'transparent'}>+</Button>

                            </HStack>
                        </Box>
                    </GridItem>
                    <GridItem w='100%' h='10' mt={10}>
                        <Button background={'black'} color={'white'} pl={10} pr={10} borderRadius={3}>
                            Learn More
                        </Button>
                    </GridItem>

                </GridItem>

            </Grid>

        </Box >

    )
}

export default Row3