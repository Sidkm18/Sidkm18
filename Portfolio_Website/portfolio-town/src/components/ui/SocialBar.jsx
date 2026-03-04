import { PROFILE } from '../../data/content';
import { FaGithub, FaLinkedinIn, FaHackerrank, FaCode } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiCodeforces } from 'react-icons/si';

const ICON_MAP = {
  FaGithub,
  FaLinkedinIn,
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  FaHackerrank,
};

export default function SocialBar() {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
      {PROFILE.socials.slice(0, 4).map((social) => {
        const Icon = ICON_MAP[social.icon] || FaCode;
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 group"
            style={{
              background: 'rgba(255,255,255,0.85)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            title={social.platform}
          >
            <Icon
              size={16}
              className="text-gray-500 group-hover:text-gray-800 transition-colors"
            />
          </a>
        );
      })}
    </div>
  );
}
