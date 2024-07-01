export const elements = [
  {
    id: 'firstname',
    label: 'First Name',
    name: 'firstname',
    eType: 'text',
    dType: 'text',
    placeholder: 'Enter your first name',
  },
  {
    id: 'email',
    label: 'Email',
    name: 'email',
    eType: 'email',
    dType: 'email',
    placeholder: 'Enter your email',
    width: 48,
    validation: {
      required: true,
    },
  },
  {
    id: 'gender',
    label: 'Gender',
    name: 'gender',
    eType: 'select',
    mData: {
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'button',
    label: 'Submit',
    name: 'submit',
    eType: 'button',
  },
];
