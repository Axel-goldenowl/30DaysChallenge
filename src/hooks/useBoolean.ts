import { useState } from 'react';

export const useBoolean = (defaultValue = true) => {

    const [value, setValue] = useState(defaultValue);

    const toggle = () => {
        setValue(prev => !prev);
    }

    return [value, toggle];
}


