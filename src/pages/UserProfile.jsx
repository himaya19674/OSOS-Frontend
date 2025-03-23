import React, { useState } from 'react';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Mati Dilki',
    email: 'matidilki@matale.com',
    phone: '0712434806',
    address: 'No.03, kale road, Matale'
  });

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [purchaseHistory, setPurchaseHistory] = useState([
    { id: '12345', date: '2025-03-15', amount: '$120.00', status: 'Completed' },
    { id: '12344', date: '2025-02-28', amount: '$75.50', status: 'Completed' },
    { id: '12343', date: '2025-01-10', amount: '$210.25', status: 'Completed' }
  ]);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Password change logic would go here
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    alert('Password changed successfully!');
  };

  const handleDownloadReport = () => {
    // Download report logic would go here
    alert('Downloading purchase history report...');
  };

  const handleEditProfile = () => {
    // Edit profile logic would go here
    alert('Edit profile functionality would open here.');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Delete account logic would go here
      alert('Account deletion request submitted.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar1 />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Profile</h1>
        
        <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start">
            {/* User Photo - Cannot be changed as specified */}
            <div className="mb-6 md:mb-0 md:mr-8 flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-orange-400">
                <i className="fas fa-user text-6xl text-gray-500"></i>
              </div>
              <p className="mt-2 text-sm text-gray-500">Profile Photo</p>
            </div>
            
            {/* User Information */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                  <p className="text-lg font-medium text-gray-900">{user.name}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                  <p className="text-lg font-medium text-gray-900">{user.email}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                  <p className="text-lg font-medium text-gray-900">{user.phone}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Address</h3>
                  <p className="text-lg font-medium text-gray-900">{user.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Change Password Section */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Change Password</h2>
          <form onSubmit={handlePasswordChange}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
            </div>
            
            <div className="mt-4">
              <button 
                type="submit"
                className="bg-orange-500 px-4 py-2 rounded-lg text-gray-900 hover:bg-orange-600"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
        
        {/* Purchase History Section */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Purchase History</h2>
            <button 
              onClick={handleDownloadReport}
              className="bg-transparent border border-orange-400 px-4 py-2 rounded-lg text-gray-800 hover:bg-orange-400 hover:text-gray-900 flex items-center"
            >
              <i className="fas fa-download mr-2"></i>
              Download Report
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {purchaseHistory.map((purchase) => (
                  <tr key={purchase.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{purchase.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {purchase.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {purchase.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {purchase.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Footer Buttons */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <button 
            onClick={handleEditProfile}
            className="bg-orange-500 px-6 py-3 rounded-lg text-gray-900 hover:bg-orange-600 flex items-center justify-center"
          >
            <i className="fas fa-edit mr-2"></i>
            Edit Profile
          </button>
          
          <button 
            onClick={handleDeleteAccount}
            className="bg-transparent border border-red-500 px-6 py-3 rounded-lg text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center"
          >
            <i className="fas fa-trash-alt mr-2"></i>
            Delete Account
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;