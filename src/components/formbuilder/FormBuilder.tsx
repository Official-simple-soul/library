import React, { useEffect, useState } from 'react';
import { FormControl, Box, FormHelperText } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import {
  renderAutoComplete,
  renderButtonAndLoadingButton,
  renderCheckBox,
  renderRadioButton,
  renderTagsInput,
  renderTextField,
  renderUpload,
} from './renders';

interface FormElement {
  id: string;
  label: string;
  name: string;
  eType?: string;
  dType: string;
  placeholder?: string;
  validation?: any;
  width?: number;
  helperText?: string;
  mData?: {
    align?: string;
    variant?: string;
    color?: string;
    rows?: number;
    accept?: string;
    options?: Array<{ value: string | number; label: string }>;
    readOnly?: boolean;
    width?: number;
    preview_upload?: boolean;
    custom_label?: string;
    label_style?: React.CSSProperties;
  };
}

interface FormBuilderProps {
  elements: FormElement[];
  onSubmit: (data: any) => void;
  loadingState: boolean;
  formData: any;
  setFormData?: (data: any) => void;
}

const FormBuilder: React.FC<FormBuilderProps> = ({
  elements,
  onSubmit,
  loadingState,
  formData,
  setFormData,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: formData,
  });

  React.useEffect(() => {
    if (setFormData) {
      const subscription = watch((value) => setFormData(value));
      return () => subscription.unsubscribe();
    }
  }, [watch, setFormData]);

  const handleFormSubmit = async (data: any) => {
    try {
      onSubmit(data);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = (width) => width <= 768;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {elements.map((element, index) => (
          <Box
            key={index}
            width={
              isMobile(windowWidth) && element.eType !== 'button'
                ? '100%'
                : `${element.mData?.width || 100}%`
            }
            display="flex"
            marginY="10px"
            sx={{
              marginLeft:
                element.mData?.align === 'right'
                  ? 'auto'
                  : element.mData?.align === 'center'
                  ? 'auto'
                  : '',
              marginRight: element.mData?.align === 'center' ? 'auto' : '',
            }}
          >
            <Controller
              name={element.name}
              control={control}
              rules={element.validation}
              render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth>
                  <h1 style={{ ...element.mData?.label_style }}>
                    {element?.mData?.custom_label}
                    {element?.validation?.required && ' *'}
                  </h1>
                  {renderInput(element, field, error, loadingState)}
                  <FormHelperText id={`${element.id}-helper-text`}>
                    {element.helperText}
                  </FormHelperText>
                </FormControl>
              )}
            />
          </Box>
        ))}
      </Box>
    </form>
  );
};

const renderInput = (
  element: FormElement,
  fieldProps: any,
  error: any,
  loadingState: any
) => {
  if (element.eType) {
    switch (element.eType) {
      case 'text':
      case 'password':
      case 'email':
      case 'number':
      case 'date':
      case 'time':
      case 'textarea':
      case 'select':
      case 'file':
        element.mData = getMetaData(element);
        return renderTextField(element, fieldProps, error);
      case 'checkbox':
        element.mData = getMetaData(element);
        return renderCheckBox(element, fieldProps);
      case 'radio':
        element.mData = getMetaData(element);
        return renderRadioButton(element, fieldProps);
      case 'autocomplete':
        element.mData = getMetaData(element);
        return renderAutoComplete(element, fieldProps);
      case 'taginput':
        element.mData = getMetaData(element);
        return renderTagsInput(element, fieldProps);
      case 'upload':
        element.mData = getMetaData(element);
        return renderUpload(element, fieldProps);
      case 'button':
        element.mData = getMetaData(element);
        return renderButtonAndLoadingButton(element, loadingState);
      default:
        return null;
    }
  } else {
    switch (element.dType) {
      case 'string':
      case 'number':
        element.mData = getMetaData(element);
        return renderTextField(element, fieldProps, error);

      case 'color':
      case 'boolean':
      case 'date':
      case 'calendar':
      case 'list':
      default:
        return '';
    }
  }
};

const getMetaData = (element) => {
  if (element.eType) {
    switch (element.eType) {
      case 'upload': {
        return {
          variant: 'outlined',
          align: 'center',
          preview_upload: true,
          ...element.mData,
        };
      }
      case 'taginput':
        return { ...element.mData, multiple: true };
      case 'textarea':
        return { rows: 5, ...element.mData, multiline: true };
      case 'password':
        return { ...element.mData };
      case 'email':
        return { ...element.mData };
      case 'submit':
        return { ...element.mData };
      default:
        return element.mData;
    }
  } else {
    switch (element.dtype) {
      case 'list':
        return {
          ...element.mData,
          select: true,
        };
      case 'file':
        return { ...element.mData };
      case 'number':
        return { ...element.mData };

      default:
        return element.mData;
    }
  }
};

export default FormBuilder;
