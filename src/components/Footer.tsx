import React from 'react';

type SocialLink = {
  href: string;
  icon: string;
  label: string;
};

const socialLinks: SocialLink[] = [
  { href: 'https://x.com/miixunes', icon: 'x.svg', label: 'Twitter / X' },
  { href: 'https://www.tiktok.com/@miixune', icon: 'tiktok.svg', label: 'TikTok' },
  { href: 'https://www.instagram.com/kilii.aut', icon: 'instagram.svg', label: 'Instagram' },
  { href: 'https://github.com/miixune', icon: 'github.svg', label: 'GitHub' },
  { href: 'mailto:your.email@example.com', icon: 'mail.svg', label: 'Email' },
  { href: 'https://discord.gg/Nq9EEH9hcy', icon: 'discord.svg', label: 'Discord' }
];

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <img
                  src={`/icons/${item.icon}`}
                  alt={item.label}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Miixu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
