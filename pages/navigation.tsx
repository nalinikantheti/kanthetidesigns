import React from "react";
import { Link } from "react-router-dom";

const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Book Me', href: '/book' },
    { name: 'About Me', href: '/about' },
  ];
  
export function Navigation() {
    return (
      <nav className="w-64 bg-slate-800 p-6">
        <ul className="space-y-4">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link to={tab.href}>
                <button className="text-lg hover:text-slate-300">{tab.name}</button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }