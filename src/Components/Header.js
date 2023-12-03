import React from 'react'
import { Box, Flex, Spacer, HStack, Link, Button, Image } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box as="header" bgColor="white" p={10} color="black" w={[300, 700, 1300]}>
            <Flex align="center">
                {/* Logo */}
                <Image src="/images/Logo.png" alt="Logo" mw='60'
                    h='10' />
                <Spacer />
                {/* Navigation Menu */}
                <HStack spacing={10} ml={4} fontSize="25">
                    <Link href="#" textDecoration="none" >
                        Home
                    </Link>
                    <Link href="#" textDecoration="none">
                        Services
                    </Link>
                    <Link href="#" textDecoration="none">
                        Contact
                    </Link>
                    <Link href="#" textDecoration="none">
                        Support
                    </Link>
                </HStack>

                <Spacer />

                {/* Login Button */}
                <Button borderRadius={2} background={'black'} color={'white'}>
                    Sign Up
                </Button>
            </Flex>
        </Box>
    )
}

export default Header