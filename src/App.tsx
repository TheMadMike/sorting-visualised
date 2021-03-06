import React, { useState } from 'react';
import { Box, Center, Flex, Button } from '@chakra-ui/react';

import DataChart from './DataChart';

import shuffle from './shuffle';

function App() {
  const [dataSet, setDataSet] = useState([1, 2, 3]);

  return (
    <Flex role="app" direction="column">
      <Center>
        <Box my="5vh" border="2px gray solid">
          <DataChart dataSet={dataSet}/>
        </Box>

      </Center>

      <Center>
        <Button maxW="30vw" onClick={() => {
            let toShuffle: number[] = [...dataSet];
            setDataSet(shuffle(toShuffle));
          }}>Shuffle data</Button>
      </Center>
    </Flex>
  );
}

export default App;
