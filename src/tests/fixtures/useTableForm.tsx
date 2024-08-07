import React from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'avatar', headerName: 'Avatar', width: 100 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  { field: 'age', headerName: 'Age', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'phone', headerName: 'Phone', flex: 1 },
  { field: 'address', headerName: 'Address', flex: 1 },
  { field: 'city', headerName: 'City', flex: 1 },
  { field: 'state', headerName: 'State', flex: 1 },
  {
    field: 'old-city',
    headerName: 'Old City',
    flex: 1,
    valueGetter: (params) => `${params?.city} + ${params.id}`,
  },

  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (params) => (
      <span
        style={{
          backgroundColor: params.value === 'Active' ? 'green' : 'red',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        {params.value}
      </span>
    ),
  },
];

const rows = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'Active',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    email: 'jane.doe@example.com',
    phone: '123-456-7891',
    address: '124 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'Inactive',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Smith',
    age: 22,
    email: 'alice.smith@example.com',
    phone: '123-456-7892',
    address: '125 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'Active',
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Johnson',
    age: 28,
    email: 'bob.johnson@example.com',
    phone: '123-456-7893',
    address: '126 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=4',
    status: 'Inactive',
  },
  {
    id: 5,
    firstName: 'Charlie',
    lastName: 'Brown',
    age: 35,
    email: 'charlie.brown@example.com',
    phone: '123-456-7894',
    address: '127 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=5',
    status: 'Active',
  },
  {
    id: 6,
    firstName: 'David',
    lastName: 'Wilson',
    age: 40,
    email: 'david.wilson@example.com',
    phone: '123-456-7895',
    address: '128 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=6',
    status: 'Inactive',
  },
  {
    id: 7,
    firstName: 'Eva',
    lastName: 'Taylor',
    age: 32,
    email: 'eva.taylor@example.com',
    phone: '123-456-7896',
    address: '129 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=7',
    status: 'Active',
  },
  {
    id: 8,
    firstName: 'Frank',
    lastName: 'Anderson',
    age: 29,
    email: 'frank.anderson@example.com',
    phone: '123-456-7897',
    address: '130 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=8',
    status: 'Inactive',
  },
  {
    id: 9,
    firstName: 'Grace',
    lastName: 'Thomas',
    age: 27,
    email: 'grace.thomas@example.com',
    phone: '123-456-7898',
    address: '131 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=9',
    status: 'Active',
  },
  {
    id: 10,
    firstName: 'Hannah',
    lastName: 'Jackson',
    age: 26,
    email: 'hannah.jackson@example.com',
    phone: '123-456-7899',
    address: '132 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=10',
    status: 'Inactive',
  },
  {
    id: 11,
    firstName: 'Ian',
    lastName: 'White',
    age: 24,
    email: 'ian.white@example.com',
    phone: '123-456-7810',
    address: '133 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=11',
    status: 'Active',
  },
  {
    id: 12,
    firstName: 'Jack',
    lastName: 'Harris',
    age: 38,
    email: 'jack.harris@example.com',
    phone: '123-456-7811',
    address: '134 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=12',
    status: 'Inactive',
  },
  {
    id: 13,
    firstName: 'Karen',
    lastName: 'Martin',
    age: 33,
    email: 'karen.martin@example.com',
    phone: '123-456-7812',
    address: '135 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=13',
    status: 'Active',
  },
  {
    id: 14,
    firstName: 'Leo',
    lastName: 'Garcia',
    age: 36,
    email: 'leo.garcia@example.com',
    phone: '123-456-7813',
    address: '136 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=14',
    status: 'Inactive',
  },
  {
    id: 15,
    firstName: 'Mia',
    lastName: 'Martinez',
    age: 31,
    email: 'mia.martinez@example.com',
    phone: '123-456-7814',
    address: '137 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=15',
    status: 'Active',
  },
  {
    id: 16,
    firstName: 'Nathan',
    lastName: 'Rodriguez',
    age: 23,
    email: 'nathan.rodriguez@example.com',
    phone: '123-456-7815',
    address: '138 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=16',
    status: 'Inactive',
  },
  {
    id: 17,
    firstName: 'Olivia',
    lastName: 'Lewis',
    age: 34,
    email: 'olivia.lewis@example.com',
    phone: '123-456-7816',
    address: '139 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=17',
    status: 'Active',
  },
  {
    id: 18,
    firstName: 'Paul',
    lastName: 'Walker',
    age: 29,
    email: 'paul.walker@example.com',
    phone: '123-456-7817',
    address: '140 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=18',
    status: 'Inactive',
  },
  {
    id: 19,
    firstName: 'Quinn',
    lastName: 'Lee',
    age: 37,
    email: 'quinn.lee@example.com',
    phone: '123-456-7818',
    address: '141 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=19',
    status: 'Active',
  },
  {
    id: 20,
    firstName: 'Rachel',
    lastName: 'Young',
    age: 28,
    email: 'rachel.young@example.com',
    phone: '123-456-7819',
    address: '142 Main St',
    city: 'Anytown',
    state: 'CA',
    avatar: 'https://i.pravatar.cc/150?img=20',
    status: 'Inactive',
  },
];

export { columns, rows };