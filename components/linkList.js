import Link from './link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    register {
      username
      email
      firstName
      lastName
    }
  }
`;
const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      {data && (
        <>
          {data.register.map((user) => (
            <Link key={user.email} user={user} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
