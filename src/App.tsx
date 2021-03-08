import React, { useEffect, useState } from 'react';
import { Box, Flex, Button, Input } from '@chakra-ui/react';

import DataChart from './Components/DataChart';

import shuffle from './shuffle';
import { generateDataSet } from './Algorithms/utility';

import SortingAlgorithm from './Algorithms/SortingAlgorithm';
import algorithms from './algorithms';

function App() {
  const [dataSet, setDataSet] = useState([1, 2, 3]);
  const [algorithm, setAlgorithm] = useState<SortingAlgorithm>(algorithms.get('BubbleSort') as SortingAlgorithm);
  const [running, setRunning] = useState(false);
  const [stepTimeMs, setStepTime] = useState(10);

  useEffect(() => {
    let algorithmCopy = Object.assign(algorithm);
    algorithmCopy.stepTimeMs = stepTimeMs;
    setAlgorithm(algorithmCopy);
  }, [stepTimeMs]);

  return (
    <Flex role="app" direction="column" align="center">
      <Box my="5vh" border="2px gray solid">
        <DataChart dataSet={dataSet}/>
      </Box>

      Number of array elements:
      <Input my="1vh" maxW="40vw" type="number" placeholder="number of elements"
        defaultValue={3}
        onChange={(event) => {
          let value = parseInt(event.target.value);
          value = value > 10000 ? 10000 : value;
          setDataSet(generateDataSet(value));
        }} />

      <Button maxW="30vw" onClick={() => {
          let toShuffle: number[] = [...dataSet];
          setDataSet(shuffle(toShuffle));
        }}>
          Shuffle
      </Button>

      <Button my="1vh" maxW="30vw" onClick={(e) => {
          if(!running) {
            setRunning(true);
            algorithm.sort(dataSet, setDataSet);
            algorithm.sort(dataSet, setDataSet).then(() => {
              setRunning(false);
            });
          }
          
        }}>
          Run
      </Button>

      <Button my="1vh" maxW="30vw" onClick={(e) => {
          algorithm.stop();
        }}>
          Stop
      </Button>
      
    </Flex>
  );
}

export default App;
