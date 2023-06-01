import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton';
import errorSvg from '../../assets/error.svg'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { NoAvatar, CustomAvatar } from './StyledComponents'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { formDataChange, editUser, removeUserAvatar, addUserAvatar } from '../../app/store';


export default function UpdateForm({ setEditorOpen }) {
    const [avatarError, setAvatarError] = useState(false)

    const { user, formData } = useSelector(state => state.user)
    const dispatch = useDispatch()


    function editSubmit(e) {
        e.preventDefault()
        dispatch(editUser())
        setEditorOpen(false)
    }

    function handleInputChange(e) {
        const { name, value } = e.target
        dispatch(formDataChange({ name: name, value: value }))
    }

    function handleFileSubmit(e) {
        const selected = e.currentTarget.files[0]

        if (selected.size > 100000) {
            return setAvatarError(true)
        }

        const src = URL.createObjectURL(selected)
        dispatch(addUserAvatar({ file: src }))
        return setAvatarError(false)
    }

    function cancelChanges() {
        dispatch(removeUserAvatar())
        setEditorOpen(false)
    }

    function deleteImg() {
        dispatch(removeUserAvatar())
    }

    return (
        <>
            <Typography variant="h6" component="h2" sx={{ marginBottom: '1.5rem' }}>
                General account settings
            </Typography>
            <Box
                component="form"
                sx={{
                    borderRadius: '4px',
                    width: '100%',
                    margin: '0 auto',
                    backgroundColor: 'grey.50',
                    flexDirection: 'column',
                    display: 'flex',
                    alignItems: 'center'
                }}>

                <Stack
                    spacing={3}
                    sx={{
                        padding: '1.25rem',
                        width: {
                            xs: "95%",
                            md: "50%"
                        }
                    }}>


                    <IconButton
                        aria-label="upload picture"
                        component="label"
                        sx={{
                            width: '120px',
                            height: '100px',
                            alignSelf: 'center',
                            '&:hover': { backgroundColor: '#FAFAFA' }
                        }}>
                        {
                            avatarError ?
                                <CustomAvatar>
                                    <input hidden accept="image/*" type="file" onChange={handleFileSubmit} />
                                    <img src={errorSvg} alt="error" sx={{ width: '100px', height: '100px' }} />
                                    <div className="overlay" onClick={deleteImg}>
                                        <DeleteIcon />
                                    </div>
                                </CustomAvatar> :

                                formData.avatar ?
                                    <CustomAvatar>
                                        <Avatar alt={user.firstName + '' + user.lastName} src={formData.avatar} sx={{ width: '100px', height: '100px' }}>
                                        </Avatar>
                                        <div className="overlay" onClick={deleteImg}>
                                            <DeleteIcon />
                                        </div>
                                    </CustomAvatar> :

                                    <NoAvatar>
                                        <AddIcon />
                                        <input hidden accept="image/*" type="file" onChange={handleFileSubmit} />
                                        <Typography variant="body2" component="span" color="#9E9E9E">
                                            Upload
                                        </Typography>
                                    </NoAvatar>
                        }
                    </IconButton>


                    <TextField
                        error={formData.firstName ? false : true}
                        helperText={!formData.firstName && "Can't be empty"}
                        name="firstName"
                        label="First name"
                        type="text"
                        defaultValue={user.firstName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        error={formData.lastName ? false : true}
                        helperText={!formData.lastName && "Can't be empty"}
                        name="lastName"
                        label="Last name"
                        type="text"
                        defaultValue={user.lastName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        error={formData.username.length >= 4 ? false : true}
                        helperText={formData.username.length < 4 && "Must be at least 4 characters"}
                        name="username"
                        label="Username"
                        type="text"
                        defaultValue={user.username}
                        onChange={handleInputChange}
                    />
                    <TextField
                        error={formData.email ? false : true}
                        helperText={!formData.email && "Can't be empty"}
                        name="email"
                        label="Email"
                        type="text"
                        defaultValue={user.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        error={formData.job ? false : true}
                        helperText={!formData.job && "Can't be empty"}
                        name="job"
                        label="Job title"
                        type="text"
                        defaultValue={user.job}
                        onChange={handleInputChange}
                    />


                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            '& > button': {
                                textTransform: 'none'
                            }
                        }}>
                        <Button
                            disableElevation
                            color="success"
                            variant="contained"
                            id="saveEdit"
                            onClick={editSubmit}>
                            Save
                        </Button>
                        <Button
                            disableElevation
                            id="cancelEdit"
                            onClick={cancelChanges}
                            sx={{
                                backgroundColor: "grey.A100",
                                color: "grey.800"
                            }}>
                            Cancel
                        </Button>
                    </Stack>
                </Stack>


            </Box>
        </>
    )
}