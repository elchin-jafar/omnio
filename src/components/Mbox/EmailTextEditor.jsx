import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';

export default function EmailTextEditor() {
    return (
        <Box
            sx={{
                paddingLeft: '0.75rem',
            }}>
            <Tooltip title="Bold">
                <IconButton>
                    <FormatBoldIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Italic">
                <IconButton>
                    <FormatItalicIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Underline">
                <IconButton>
                    <FormatUnderlinedIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Text Color">
                <IconButton>
                    <FormatColorTextIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Bulleted List">
                <IconButton>
                    <FormatListBulletedIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Numbered List">
                <IconButton>
                    <FormatListNumberedIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Decrease Indent">
                <IconButton>
                    <FormatIndentIncreaseIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Increase Indent">
                <IconButton>
                    <FormatIndentDecreaseIcon />
                </IconButton>
            </Tooltip>
        </Box>
    )
}