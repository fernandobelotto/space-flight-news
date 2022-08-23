import { Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex
        alignItems='center'
        color="white"
        bg="brand.darkgray"
        h="100px"
        boxShadow="0px 2px 15px 5px rgba(0, 0, 0, 0.25)"
      >
        <Container maxW="container.lg">
          <Flex justify="space-between">
            <Heading>Space Flight News</Heading>
            <HStack spacing={5}>
              <Text>Home</Text>
              <Text>Tending</Text>
              <Text>Categories</Text>
              <Text>About us</Text>
            </HStack>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
