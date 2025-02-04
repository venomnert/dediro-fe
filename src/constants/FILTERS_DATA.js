import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';

const FILTERS_DATA = [
  { name: 'for-you', label: 'For you', icon: <WidgetsRoundedIcon /> },
  { name: 'top', label: 'Top', icon: <StarBorderRoundedIcon /> },
  {
    name: 'tech-science',
    label: 'Tech & Science',
    icon: <MemoryRoundedIcon />,
  },
  { name: 'finance', label: 'Finance', icon: <PaidOutlinedIcon /> },
  {
    name: 'arts-culture',
    label: 'Arts & Culture',
    icon: <ColorLensOutlinedIcon />,
  },
  { name: 'sports', label: 'Sports', icon: <SportsSoccerOutlinedIcon /> },
  { name: 'health', label: 'Health', icon: <FavoriteBorderOutlinedIcon /> },
  { name: 'education', label: 'Education', icon: <SchoolOutlinedIcon /> },
  { name: 'food', label: 'Food', icon: <FastfoodOutlinedIcon /> },
  { name: 'fashion', label: 'Fashion', icon: <CheckroomOutlinedIcon /> },
];

export default FILTERS_DATA;
