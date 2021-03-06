import React, { useState } from 'react';
import { Box, Flex, Button, Input } from '@chakra-ui/react';

import DataChart from './DataChart';

import shuffle from './shuffle';

const generateDataSet = (numberOfElements: number): number[] => {
  let dataSet: number[] = [];
  for(let i = 0; i < numberOfElements; ++i) {
    dataSet.push(i+1);
  }
  return dataSet;
};

function App() {
  const [dataSet, setDataSet] = useState([1, 2, 3]);

  return (
    <Flex role="app" direction="column" align="center">
      <Box my="5vh" border="2px gray solid">
        <DataChart dataSet={dataSet}/>
      </Box>

      Number of array elements:
      <Input my="1vh" maxW="40vw" type="number" placeholder="number of elements"
        defaultValue={3}
        onChange={(event) => {
          const value = parseInt(event.target.value);
          setDataSet(generateDataSet(value));
        }} />

      <Button maxW="30vw" onClick={() => {
          let toShuffle: number[] = [...dataSet];
          setDataSet(shuffle(toShuffle));
        }}>
          Shuffle
      </Button>
      
    </Flex>
  );
}

export default App;
