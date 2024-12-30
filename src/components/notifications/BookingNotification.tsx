import React, { useState, useEffect } from 'react';

const companies = [
  { name: 'TechCorp Solutions', location: 'Dubai' },
  { name: 'Digital Dynamics', location: 'London' },
  { name: 'InnovateX', location: 'Singapore' },
  { name: 'Franklin Systems', location: 'Toronto' },
  { name: 'SmartBiz AI', location: 'Dubai' },
  { name: 'Global Techno Space', location: 'Berlin' },
  { name: 'Alison Ventures', location: 'Tokyo' },
  { name: 'DataFlow Inc', location: 'Sydney' }
];

export function BookingNotification() {
  const [notification, setNotification] = useState<{ name: string; location: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomCompany = companies[Math.floor(Math.random() * companies.length)];
      setNotification(randomCompany);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(showNotification, 5000);
    const interval = setInterval(() => {
      showNotification();
    }, 30000 + Math.random() * 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 transform transition-all duration-500 z-50 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-black rounded-lg p-3 border border-cyan-900/50">
        <div className="flex items-center gap-2">
          {/* Diamond icon */}
          <div className="shrink-0">
            <svg width="20" height="20" viewBox="0 0 32 32" className="text-cyan-400">
              <path
                d="M16 2L30 16L16 30L2 16L16 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          
          {/* Notification text */}
          <p className="text-sm">
            <span className="text-cyan-400">{notification.name}</span>
            <span className="text-gray-400"> from </span>
            <span className="text-cyan-400">{notification.location}</span>
            <span className="text-gray-400"> just booked a Discovery Call</span>
          </p>
        </div>
      </div>
    </div>
  );
}