const Link = (props) => {
  const { user } = props;
  return (
    <div>
      <div>
        {user.username} ({user.email})
      </div>
    </div>
  );
};

export default Link;
