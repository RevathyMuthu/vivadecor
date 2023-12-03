import React from 'react'
import { Box, Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react';
const Row4 = () => {
    return (
        <Box>
            <Grid templateColumns='repeat(4, 1fr)' mt={40}>

                <GridItem w='100%' colStart={1} colEnd={3} h='20' ml={10}>

                    <GridItem w='100%' h='20' >
                        <Box w={350} pb={10}>
                            <Text fontSize={30} fontWeight={'bold'}>Designing Your Dream in Three Simple Steps</Text>
                        </Box>
                    </GridItem>
                    <GridItem w='100%' h='10' >
                    </GridItem>
                    <GridItem w='100%' h='40'>
                        <Box w={700}>
                            <HStack align="start" gap={10} >
                                <VStack>
                                    <Image src="/images/R1.png" alt="Content Image" align="left" w={10} h={10} />
                                    <Image src="/images/Line 6.png" alt="Content Image" align="left" h={20} />

                                </VStack>
                                <VStack w={80} align="left">
                                    <Text fontSize="20" fontWeight={'bold'}>
                                        Start Project
                                    </Text>
                                    <Text fontSize="16">
                                        Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </GridItem>
                    <GridItem w='100%' h='40'>
                        <Box w={600}>
                            <HStack gap={10}>
                                <VStack>
                                    <Image src="/images/R2.png" alt="Content Image" align="left" w={10} h={10} />
                                    <Image src="/images/Line 6.png" alt="Content Image" align="left" h={20} />

                                </VStack>
                                <VStack w={80} align="left">
                                    <Text fontSize="20" fontWeight={'bold'}>
                                        Craft
                                    </Text>
                                    <Text fontSize="16">
                                        Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </GridItem>
                    <GridItem w='100%' h='20' >
                        <Box w={600}>
                            <HStack align="start" gap={10}>
                                <VStack>
                                    <Image src="/images/R3.png" alt="Content Image" align="left" w={10} h={10} />


                                </VStack>
                                <VStack w={80} align="left">
                                    <Text fontSize="20" fontWeight={'bold'}>
                                        Execute
                                    </Text>
                                    <Text fontSize="16">
                                        Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </GridItem>
                </GridItem>
                <GridItem w='100%' colStart={3} colEnd={6} h='400'  >
                    <Image src="/images/Row4.jpg" alt="Content Image" align="center" w={600} h={570} />
                </GridItem>

            </Grid>

            {/* <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                <GridItem colStart={1} colEnd={3} h='10' bg='tomato' />
                <GridItem colStart={3} colEnd={6} h='10' bg='papayawhip' />
            </Grid> */}

        </Box >
    )
}

export default Row4