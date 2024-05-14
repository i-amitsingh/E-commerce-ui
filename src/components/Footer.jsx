import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <div className="w-screen bg-gray-900 grid grid-cols-12 px-10 py-4">
      <div className="col-span-4 my-auto">
        <img src={logo} className=" ml-10 rounded-full h-20 object-cover" />
      </div>
      <div className="text-white grid grid-cols-3 col-span-8">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Orders</li>
          <li>Shop</li>
          <li>Privacy</li>
        </ul>
        <ul>
          <li>Profile</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
}
