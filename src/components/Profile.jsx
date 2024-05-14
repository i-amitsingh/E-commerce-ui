const Profile = () => {
  return (
    <div className="bg-gray-100 mx-auto py-8">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Amit Singh</h2>
            <p className="text-gray-600">amit.singh@example.com</p>
            <p className="text-gray-600">+91 9999999999</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Order History
        </h2>
        <div className="border-t border-gray-200 mb-6">
          <div className="py-4">
            <p className="text-gray-800">Order #123456</p>
            <p className="text-gray-600">Date: Jan 1, 2024</p>
            <p className="text-gray-600">Total: $50.00</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Saved Addresses
        </h2>
        <div className="border-t border-gray-200 mb-6">
          <div className="py-4">
            <p className="text-gray-800">Home Address</p>
            <p className="text-gray-600">
              A-37 Sahibabad, Civil Lines Prayagraj Uttar Pradesh India (211001)
            </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Payment Methods
        </h2>
        <div className="border-t border-gray-200 mb-6">
          <div className="py-4">
            <p className="text-gray-800">Credit Card</p>
            <p className="text-gray-600">**** **** **** 1234</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mr-4">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
