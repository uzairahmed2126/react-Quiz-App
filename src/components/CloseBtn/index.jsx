import { Link } from "react-router";
function CloseBtn({ top, left, customClass,fontSize }) {
  return (
    <Link
      to="/"
      className={`${customClass} flex absolute top-[${top}] left-[${left}] ${fontSize} text-gray-500 hover:text-gray-600`}
    >
      <i className="fa fa-close"></i>
    </Link>
  );
}

export default CloseBtn;
