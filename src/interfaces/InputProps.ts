import { FieldError, UseFormRegister } from 'react-hook-form';

export interface IInputProps {
    name: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<any>;
    error?: FieldError;
}
