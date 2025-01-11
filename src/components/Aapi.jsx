import React, { useState } from 'react';
import { Menu, Bell, User, CreditCard, ShoppingCart, DollarSign, ChevronLeft, ChevronRight, PieChart, Gift, ShoppingBag, Users, BarChart2, Settings } from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: PieChart, label: 'Dashboard', active: true },
    { icon: Gift, label: 'Gift Cards' },
    { icon: ShoppingBag, label: 'Orders' },
    { icon: Users, label: 'Customers' },
    { icon: BarChart2, label: 'Reports' },
    { icon: Settings, label: 'Settings' }
  ];

  const stats = [
    { title: 'TOTAL GIFT CARDS CREATED', value: '37', growth: '12%', icon: CreditCard },
    { title: 'TOTAL GIFT CARDS SOLD', value: '7', growth: '8%', icon: ShoppingCart },
    { title: 'TOTAL REVENUE', value: '$3,370', growth: '15%', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            <Menu className="w-6 h-6 text-blue-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <span className="text-xl font-bold text-blue-600">AdminHub</span>
          </div>
          <button className="p-2">
            <User className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <aside className={`fixed top-0 left-0 h-full bg-gradient-to-b from-blue-600 to-blue-800 z-50 transition-all duration-300 
        ${isSidebarOpen ? 'w-72' : 'w-20'} 
        lg:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 text-white">
          <div className="flex items-center gap-3 mb-12 lg:block">
            {(isSidebarOpen || isMobileMenuOpen) && (
              <>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-bold">A</span>
                </div>
                <span className="text-2xl font-bold">AdminHub</span>
              </>
            )}
          </div>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className={`flex items-center p-3 rounded-xl transition-all duration-300 ${item.active ? 'bg-white/10 shadow-lg' : 'hover:bg-white/5'}`}>
                <item.icon className={`w-6 h-6 ${(isSidebarOpen || isMobileMenuOpen) ? 'mr-3' : 'mx-auto'}`} />
                {(isSidebarOpen || isMobileMenuOpen) && <span className="font-medium">{item.label}</span>}
              </a>
            ))}
          </nav>
        </div>
        {/* Toggle Button - Desktop only */}
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-12 bg-blue-600 rounded-r-lg items-center justify-center text-white shadow-lg"
        >
          {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 pt-20 lg:pt-8
        ${isSidebarOpen ? 'lg:ml-72' : 'lg:ml-20'} p-4 lg:p-8`}>
        {/* Header - Desktop */}
        <div className="hidden lg:flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            DASHBOARD
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Bell className="w-5 h-5 text-blue-600" />
            </button>
            <button className="p-3 bg-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-gray-500 text-xs lg:text-sm font-medium mb-2">{stat.title}</h3>
                  <p className="text-2xl lg:text-4xl font-bold text-blue-600">{stat.value}</p>
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-green-500 text-xs lg:text-sm">
                <ChevronRight className="w-4 h-4 mr-1" />
                <span>{stat.growth} from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-2xl p-4 lg:p-8 shadow-xl border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Gift Card Sales</h2>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-initial px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all text-sm lg:text-base">
                Weekly
              </button>
              <button className="flex-1 sm:flex-initial px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm lg:text-base">
                Monthly
              </button>
            </div>
          </div>
          <div className="h-[200px] lg:h-[300px] w-full">
            <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
              Chart Area
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;