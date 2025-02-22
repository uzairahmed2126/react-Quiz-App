import { Link } from "react-router";
function CloseBtn({ customClass}) {
  return (
    <Link
      to="/"
      className={`${customClass} text-gray-500 hover:text-gray-600`}
    >
      <i className="fa fa-close"></i>
    </Link>
  );
}

export default CloseBtn;
