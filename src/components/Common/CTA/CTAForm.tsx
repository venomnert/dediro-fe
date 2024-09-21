'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Typography,
} from '@mui/material';
import {
  useState,
  ChangeEvent,
  FormEvent,
  CSSProperties,
  SyntheticEvent,
} from 'react';
import { topicsList } from '@/components/Synthesis/utils';
import { useSubscribe } from '@/hooks';

const greenButtonStyles = {
  color: 'var(--black)',
  backgroundColor: 'var(--green)',
  textTransform: 'none',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: 600,
  borderRadius: 'var(--border-radius)',
  padding: '12px 20px',
  height: '100%',
  marginLeft: { xs: '0px', md: '20px' },
  width: { xs: '100%', md: 'auto' },
  marginTop: { xs: '15px', md: 0 },
  zIndex: 2,
};

const orangeButtonStyles = {
  color: 'var(--white)',
  backgroundColor: 'var(--orange)',
  textTransform: 'none',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: 600,
  boxShadow: 'var(--hard-shadow)',
  borderRadius: 'var(--border-radius)',
  padding: '12px 20px',
  height: '100%',
  width: '100%',
  marginTop: '20px',
  zIndex: 2,
};

interface CTAProps {
  ctaTextValue?: string;
  flexDirection?: any;
  isGreenButton?: boolean;
}

const CTAForm = ({
  ctaTextValue = 'Subscribe',
  isGreenButton = false,
  flexDirection = 'row',
}: CTAProps) => {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [topics, setTopics] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const { subscribe, loading, error: cioError, success } = useSubscribe();

  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleClose = (
    event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowSnackbar(false);
  };

  // set button styles
  const buttonStyles = isGreenButton ? greenButtonStyles : orangeButtonStyles;

  const formStyles: CSSProperties = {
    display: 'flex',
    flexDirection: isGreenButton ? { xs: 'column', md: 'row' } : flexDirection,
    alignItems: 'center',
  };

  const inputStyles = {
    height: '100%',
    width: isGreenButton ? { xs: '100%', md: '300px' } : '100%',
    boxShadow: 'var(--hard-shadow)',
    backgroundColor: 'var(--white)',
    borderRadius: 'var(--border-radius)',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
    },
  };

  const handleResetAll = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setTopics([]);
  };

  const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    try {
      const objForEmailRequest = { email };
      const isSuccessful = await subscribe(objForEmailRequest);

      if (isSuccessful) {
        setMessage('Email received! Do you want to provide more info?');
        setShowModal(true); // Open the modal for additional info
      } else if (cioError) {
        setMessage('This email is already registered.');
        setShowSnackbar(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred during subscription.');
      setShowSnackbar(true);
    }
  };

  const handleAdditionalInfoSubmit = async () => {
    setMessage('');

    try {
      const objForRequest = { email, firstName, lastName, topics };
      const isSuccessful = await subscribe(objForRequest);

      if (isSuccessful) {
        setMessage('User subscribed succesfully!');
        setShowModal(false);
        setShowSnackbar(true);
        handleResetAll();
      } else {
        setMessage('Failed to update user info.');
        setShowSnackbar(true);
        handleResetAll();
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred while updating info.');
      setShowSnackbar(true);
      handleResetAll();
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTopicsChange = (e: SelectChangeEvent<string[]>) => {
    const value = e.target.value;
    setTopics(typeof value === 'string' ? value.split(',') : value);
  };

  const handleCloseModal = () => {
    handleResetAll();
    setShowModal(false);
  };

  return (
    <>
      {/* Email Form */}
      <Box component="form" onSubmit={handleEmailSubmit} sx={formStyles}>
        <TextField
          sx={inputStyles}
          placeholder="Email address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          fullWidth={!isGreenButton}
        />
        <Button
          type="submit"
          sx={buttonStyles}
          fullWidth={!isGreenButton}
          disabled={loading}
        >
          {ctaTextValue}
        </Button>
      </Box>

      {/* Modal for additional info */}
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" component="h2" sx={{ marginBottom: '16px' }}>
            Complete Your Profile
          </Typography>

          {/* First Name */}
          <TextField
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            sx={{ marginBottom: '16px' }}
          />

          {/* Last Name */}
          <TextField
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            sx={{ marginBottom: '16px' }}
          />

          {/* Topics */}
          <FormControl fullWidth sx={{ marginBottom: '16px' }}>
            <InputLabel id="topics-label">Topics</InputLabel>
            <Select
              labelId="topics-label"
              multiple
              value={topics}
              onChange={handleTopicsChange}
              renderValue={(selected) => (selected as string[]).join(', ')}
            >
              {topicsList.map((topic) => (
                <MenuItem key={topic.title} value={topic.title}>
                  <Checkbox checked={topics.indexOf(topic.title) > -1} />
                  <ListItemText primary={topic.title} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            onClick={handleAdditionalInfoSubmit}
            variant="contained"
            color="primary"
            sx={{ ...buttonStyles, marginLeft: '0', width: '100%' }}
            disabled={loading}
            fullWidth
          >
            Submit Info
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
      />
    </>
  );
};

export default CTAForm;
