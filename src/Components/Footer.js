import React from 'react'
import { Box, VStack, HStack, Link, Image, Text, Grid } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" bgColor="#313131" color="white" p={20} w={[300, 500, 1400]}>
            <Grid templateColumns="repeat(4, 1fr)" gap={10}>
                <Box>
                    <VStack align="left" gap={5}>
                        {/* Logo */}
                        <Image src="/images/Logo 2.png" alt="Footer Logo" boxSize="60px" w={100} h={30} />
                        <Text>
                            VivaDecor your premier destination for luxury and modern interior design
                        </Text>

                        {/* Social Media Icons */}
                        <HStack spacing={4}>
                            <Link href="#" textDecoration="none">
                                <Image src="/images/Facebook.png" alt="Facebook" boxSize="30px" />
                            </Link>
                            <Link href="#" textDecoration="none">
                                <Image src="/images/X.png" alt="Twitter" boxSize="30px" />
                            </Link>
                            <Link href="#" textDecoration="none">
                                <Image src="/images/Instagram.png" alt="Instagram" boxSize="30px" />
                            </Link>
                            <Link href="#" textDecoration="none">
                                <Image src="/images/Linkdin.png" alt="LinkedIn" boxSize="30px" />
                            </Link>
                        </HStack>
                    </VStack>

                </Box>
                <Box>
                    {/* Related Page Links */}
                    <VStack spacing={4} align="left" ml={20}>
                        <Text fontSize={18}>
                            Our Services
                        </Text>
                        <Link href="#" textDecoration="none">
                            Interior design
                        </Link>
                        <Link href="#" textDecoration="none">
                            Outdoor design
                        </Link>
                        <Link href="#" textDecoration="none">
                            Lightning design
                        </Link>
                        <Link href="#" textDecoration="none">
                            Office design
                        </Link>
                    </VStack>

                </Box>
                <Box>
                    <VStack spacing={4} align="left" ml={20}>
                        <Text fontSize={18}>
                            Our Services
                        </Text>
                        <Link href="#" textDecoration="none">
                            Reviews
                        </Link>
                        <Link href="#" textDecoration="none">
                            Careers
                        </Link>
                        <Link href="#" textDecoration="none">
                            Pricing
                        </Link>
                        <Link href="#" textDecoration="none">
                            Press inquires
                        </Link>
                    </VStack>

                </Box>
                <Box>
                    <VStack align="left" ml={10}>

                        {/* Contact Address */}
                        <Text fontSize="18" color={'#FFFFFF'}>
                            Our Services <br /><br />
                        </Text>
                        <Link href="mailto:info@vivadecor.com" textDecoration="none" color={'#D1D1D1'}>
                            info@vivadecor.com
                        </Link>
                        <Text fontSize="16" color={'#D1D1D1'}>
                            <br />
                            Design Avenue Cityville,
                            <br />
                            CA 90210 United States
                        </Text>
                    </VStack>

                </Box>


            </Grid>





        </Box >
    )
}

export default Footer