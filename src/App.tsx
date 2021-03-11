import { useEffect, useState } from 'react';
import { Box, Flex, Button, Input } from '@chakra-ui/react';

import DataChart from './Components/DataChart';
import StartStopButton from './Components/StartStopButton';
import AlgorithmSelect from './Components/AlgorithmSelect';

import shuffle from './shuffle';
import { generateDataSet } from './Algorithms/utility';

import SortingAlgorithm from './Algorithms/SortingAlgorithm';
import algorithms from './algorithms';

const App = () => {
  const [dataSet, setDataSet] = useState([1, 2, 3]);
  const [algorithm, setAlgorithm] = useState<SortingAlgorithm>(algorithms.get('BubbleSort') as SortingAlgorithm);
  const [stepTimeMs, setStepTime] = useState(10);

  useEffect(() => {
    let algorithmCopy = Object.assign(algorithm);
    algorithmCopy.stepTimeMs = stepTimeMs;
    setAlgorithm(algorithmCopy);
  }, [stepTimeMs, algorithm]);

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

      <AlgorithmSelect onChange={(algorithmName: string) => {
        setAlgorithm(algorithms.get(algorithmName) as SortingAlgorithm);
      }}/>

      <StartStopButton onClick={
        (data: {shouldBeRunning: boolean}) => {
          if(data.shouldBeRunning) {
            algorithm.sort(dataSet, setDataSet);
            algorithm.sort(dataSet, setDataSet);
          } else {
            algorithm.stop();
          }
        }
      } />
      
    </Flex>
  );
}

export default App;
