import { Box, Center, Container, Text, VStack } from "@chakra-ui/react";
import CardItem from "./components/card-item/card-item";
import { cards } from "./components/mock/cards";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Box bg="brand.background">
      <Navbar />
      <main>
        <Box m="5">
          <Container maxW="container.lg">
            <VStack spacing={5} align="flex-start">
              {cards.map((card) => {
                return <CardItem card={card}></CardItem>;
              })}
            </VStack>
          </Container>
        </Box>
      </main>
      <footer>
        <Box
          h="60px"
          bg="brand.darkgray"
        >
          <Center h="100%">
            <Text color="white">Space Flight News, 2022</Text>
          </Center>
        </Box>
      </footer>
    </Box>
  );
}
