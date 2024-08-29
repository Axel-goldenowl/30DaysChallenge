import { FieldError, UseFormRegister } from 'react-hook-form';

export interface iInputProps {
    name: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<any>;
    error?: FieldError;
}
