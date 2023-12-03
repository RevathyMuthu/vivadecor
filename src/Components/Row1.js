import React from 'react';
import { Box, Grid, Image, Text, VStack, GridItem, HStack, Button } from '@chakra-ui/react';

const Row1 = () => {
    return (
        <div>
            <div >
                <Box p={10} maxW='xxl' mw='800' h='220'>
                    <Grid templateColumns="repeat(5, 1fr)" gap={8}>
                        <GridItem colSpan={2} >
                            <Box w="1000px" h="200px">
                                {/* left column with description */}
                                <VStack align="start">
                                    <Box maxW='xxl' mw='auto' h='auto'>
                                        <Text fontSize="120" fontWeight="600">
                                            Interior Design
                                        </Text>
                                    </Box>
                                    <Box maxW='xl' mw='600' h='220'>
                                        <Text fontSize="20">
                                            Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge
                                            modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication
                                        </Text>
                                    </Box>
                                </VStack>
                            </Box >
                        </GridItem>
                        <GridItem colStart={5} colEnd={6} h='30'  >
                            <Box maxW='sm' w="300px" h="200px">
                                {/* Right column with image */}
                                <Image src="/images/R1I1.jpg" alt="Content Image" w={600} h={350} />

                            </Box>
                        </GridItem>
                        
                    </Grid>
                </Box>

            </div>
            <div>
                <Box p={0} maxW='xxl' mw='600' h='220'>

                    {/* 2-column structure */}
                    {/* <SimpleGrid columns={2} spacing='20px'> */}
                    <Grid templateColumns="repeat(5, 1fr)" gap={8} pt={20} pl={10}>
                        <GridItem colStart={1} h='10' >
                            <Box w="600px" h="200px" pt={20}>
                                <Button background={'black'} color={'white'} borderRadius={2}>
                                    Start Projects
                                </Button>
                                {/* left column with description */}
                                <HStack align="start" mt={20}>
                                    <Text fontSize="50" >
                                        400+
                                    </Text>
                                    <Text fontSize="50" pl={70}>
                                        600+
                                    </Text>
                                    <Text fontSize="50" ml={70}>
                                        100+
                                    </Text>
                                </HStack>
                                <HStack align="start">
                                    <Text fontSize="16" >

                                        Project Complete
                                    </Text>
                                    <Text fontSize="16" pl={59}>

                                        Satisfied Clients
                                    </Text>
                                    <Text fontSize="16" pl={79}>

                                        Unique Styles
                                    </Text>
                                </HStack>
                            </Box>
                        </GridItem>
                        <GridItem colStart={2} colEnd={6} h='0' pt={20}  >
                            <Box maxW='sm' w="350px" h="250px">
                                <Image src="/images/Rectangle 60.png" alt="Content Image" />
                            </Box>
                        </GridItem>
                        <GridItem colStart={2} colEnd={6} pl={10} h='10'  >

                            <Image src="/images/R2I2.jpg" alt="Content Image" w={480} h={300} />

                        </GridItem>
                        <GridItem colStart={2} colEnd={6} h='10' mt={154} ml={480}  >
                            <Image src="/images/Arrow down.jpg" alt="Content Image" w={75} h={74} />
                        </GridItem>

                    </Grid>
                </Box>

            </div>
        </div >

    )
}

export default Row1
