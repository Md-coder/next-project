import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CreateLink = () => {
  const CREATE_LINK_MUTATION = gql`
    mutation PostMutation($username: String!, $email: String!) {
      post(username: $username, email: $email) {
        id
        createdAt
        url
        description
      }
    }
  `;
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.username,
      url: formState.email,
    },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className='flex flex-column mt3'>
          <input
            className='mb2'
            value={formState.username}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            type='text'
            placeholder='Enter username'
          />
          <input
            className='mb2'
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value,
              })
            }
            type='text'
            placeholder='Enter email'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;
