import ForumIcon from '@mui/icons-material/Forum';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

export default function AvatarIcon({ source, color }) {
    switch (source) {
        case 'facebook':
            return <FacebookOutlinedIcon color="facebook" style={{ color: color, width: "16px", height: '16px' }} />
        case 'whatsapp':
            return <WhatsAppIcon color="whatsapp" style={{ color: color, width: "16px", height: '16px' }} />
        case 'email':
            return <MarkunreadIcon color="email" style={{ color: color, width: "16px", height: '16px' }} />
        default:
            return <ForumIcon style={{ color: color, width: "16px", height: '16px' }} />
    }
}