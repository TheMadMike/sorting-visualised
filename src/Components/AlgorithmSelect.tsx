import { Select, Flex } from '@chakra-ui/react';

import algorithms from '../algorithms';

const AlgorithmSelect = (props: { onChange: Function } ) => {
    const options: JSX.Element[] = [];
    algorithms.forEach((value, key: string, map) => {
        options.push(<option key={key} value={key}>{key}</option>);
    });

    return (
        <Flex w={["80vw", "38vw"]} direction={["column", "row"]} align="center" my="1vh">
            Algorithm:
            <Select my={["1vh", 0]} mx="1vw" data-testid="select" onChange={(event) => {
                event.preventDefault();
                props.onChange(event.target.value);
            }}>
                { options }           
            </Select>
        </Flex>
    );
};

export default AlgorithmSelect;