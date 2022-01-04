import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import uuid from 'uuid';

state = {
    timers : [
        {
            id: uuid.v4(),
            title: 'Read Thesis Paper',
            project: 'Design Project',
            elapsed: 12345,
            runningSince: null
        },
        {
            id: uuid.v4(),
            title: 'Do Excercise',
            project: 'Gym',
            elapsed: 67890,
            runningSince: null
        },
        
    ]
}