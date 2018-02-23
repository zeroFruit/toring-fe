import React from 'react';
import Stepper from 'react-stepper-horizontal';

const StepperTemplate = ({ steps, crntStep }) => (
    <Stepper
        steps={ steps }
        activeStep={ crntStep }
        defaultColor="#ced4da"
        activeColor="#495057"
        completeColor="#495057"
        circleFontSize={0}
        titleFontSize={12}
    />
);

export default StepperTemplate;