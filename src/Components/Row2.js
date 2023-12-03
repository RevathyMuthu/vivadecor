import React from 'react';
import { Box, Grid, Image, Text, HStack, GridItem, VStack } from '@chakra-ui/react';

const Row2 = () => {
    return (
        <div style={{ paddingTop: 300 }}>
            <Box p={8}>
                <HStack mb={20}>
                    <Image src="/images/line1.png" />
                    <Text fontSize={30}>
                        Our Services
                    </Text>
                </HStack>
                <Grid templateColumns="repeat(3, 1fr)" gap={8} ml={0}>
                    <GridItem colSpan={1} rowSpan={1} >
                        <HStack align="start" gap={10}>
                            <Image src="/images/Lighting design icon.png" alt="Content Image" align="left" w={10} h={12} />
                            <VStack w={60} h={20} align="left">
                                <Text fontSize="20">
                                    Lighting Design
                                </Text>
                                <Text fontSize="16">
                                    Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere
                                </Text>
                            </VStack>
                        </HStack>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <HStack align="start" gap={10}>
                            <Image src="/images/Interior design icon.png" alt="Content Image" align="left" w={10} h={12} />
                            <VStack w={60} h={20} align="left">
                                <Text fontSize="20">Interior Design</Text>
                                <Text fontSize="16">From concept to completion, we oversee every detail to bring your vision to life efficiently</Text>

                            </VStack>

                        </HStack>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={2}>
                        <HStack align="start" gap={10} >
                            <Image src="/images/Outdoor design icon.png" alt="Content Image" align="left" w={10} h={12} />
                            <VStack w={60} h={20} align="left">
                                <Text fontSize="20">
                                    Outdoor Design
                                </Text>
                                <Text fontSize="16">
                                    Celebrate the changing seasons with our seasonal outdoor decor services
                                </Text>

                            </VStack>

                        </HStack>
                    </GridItem>

                </Grid>



            </Box>
        </div>

    )
}

export default Row2
