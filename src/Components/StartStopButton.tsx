import { Button } from '@chakra-ui/react';
import { useState } from 'react';

const StartStopButton = ( props: { onClick: Function } ) => {
    const [label, setLabel] = useState('Start');

    return (
        <Button data-testid="button" my="1vh" maxW="30vw" onClick={(e) => {
            e.preventDefault();
            props.onClick({shouldBeRunning: label === 'Start'});
            setLabel(label === 'Start' ? 'Stop' : 'Start');
        }}>
            { label }
        </Button>
    );
};

export default StartStopButton;