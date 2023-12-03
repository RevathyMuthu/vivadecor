import { Center, Box, Input, Text, Button, VStack, HStack } from '@chakra-ui/react'

import React from 'react'

const Subscription = () => {
    return (
        <div style={{ paddingTop: 100 }}>
            <Center>
                <VStack>
                    <Box w={500} h={317} border='1px' borderColor='gray.200' boxShadow='lg'>
                        <Box p={10}>
                            <Text fontSize="30" align={'center'} fontWeight={'bold'}>Subscribe to Our Newsletter for Design Insights</Text>
                            <Text mt={30}>Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox</Text>

                        </Box>


                        <HStack>
                            <Input w={500} placeholder='Enter your email address' />
                            <Button bg={'black'} color={'white'}>Subscribe</Button>

                        </HStack>


                    </Box>


                </VStack>


            </Center>

        </div>
    )
}

export default Subscription