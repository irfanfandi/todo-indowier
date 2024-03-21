const Button = (props) => {
  return (
    <button
      // onClick={props?.onClick}
      // form={props.form}
      // type={props.type}
      {...props}
      className={`${props.color} py-2 px-4 rounded-xl text-white`}
    >
      {props.title}
    </button>
  );
};

export default Button;
