// Building definitions with layout positions for the SVG town scene.
// `pin` = percentage position for the red map pin (clickable).
// `scene` = absolute pixel position within the 1920x1080 SVG viewBox for placing building illustrations.
const BUILDINGS = [
  {
    id: 'home',
    label: 'Home',
    subtitle: 'About Me',
    color: '#E88D4F',
    pin: { x: '14%', y: '52%' },
    scene: { x: 140, y: 420, w: 160, h: 200 },
    mobileIcon: '🏠',
  },
  {
    id: 'library',
    label: 'Library',
    subtitle: 'Resume',
    color: '#AB47BC',
    pin: { x: '30%', y: '44%' },
    scene: { x: 420, y: 370, w: 170, h: 210 },
    mobileIcon: '📚',
  },
  {
    id: 'lab',
    label: 'Lab',
    subtitle: 'Skills',
    color: '#66BB6A',
    pin: { x: '45%', y: '50%' },
    scene: { x: 720, y: 410, w: 180, h: 180 },
    mobileIcon: '🧪',
  },
  {
    id: 'postoffice',
    label: 'Post Office',
    subtitle: 'Contact',
    color: '#FFA726',
    pin: { x: '58%', y: '42%' },
    scene: { x: 980, y: 360, w: 160, h: 195 },
    mobileIcon: '📮',
  },
  {
    id: 'cyberhub',
    label: 'Cyber Hub',
    subtitle: 'Security',
    color: '#26A69A',
    pin: { x: '72%', y: '48%' },
    scene: { x: 1250, y: 380, w: 170, h: 210 },
    mobileIcon: '🔒',
  },
  {
    id: 'office',
    label: 'Office',
    subtitle: 'Projects',
    color: '#5B8DBE',
    pin: { x: '85%', y: '40%' },
    scene: { x: 1530, y: 320, w: 155, h: 260 },
    mobileIcon: '🏢',
  },
  {
    id: 'gym',
    label: 'Gym',
    subtitle: 'Hobbies',
    color: '#EC407A',
    pin: { x: '50%', y: '72%' },
    scene: { x: 830, y: 640, w: 180, h: 170 },
    mobileIcon: '🏋️',
  },
];

export default BUILDINGS;
