import * as React from "react";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

const Module = (module) => {

    const {
        image,
        name,
        _id,
        
    } = module;
  return ( 
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src={`/images/${image}`} />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">First Module</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          Time : 30hrs
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Getting Started
      </Text>
      <Text mt={2}>Description of Module</Text>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="sm">
          <b>1/24 Completed</b>
        </Text>
      </Flex>
    </Box>
  );
}

export default Module;