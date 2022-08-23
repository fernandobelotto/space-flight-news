import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function CardItem(props: any) {
  const { title, source, description, image } = props.card;

  return (
    <>
      <Flex gap={3} flexWrap='wrap'>
        <Image minW="246px" h="180px" rounded="lg" src={image} objectFit="cover" />
        <VStack alignItems="flex-start" maxW='400px'>
          <Text fontSize="2rem" color="white">
            {title}
          </Text>
          <Text color="#8695A4" fontSize="1.25rem">
            {source}
          </Text>
          <Text fontSize="1rem" color="white">
            {description}
          </Text>
        </VStack>
      </Flex>
    </>
  );
}
