import React, { useEffect, useState } from 'react';
import ShortInfoBlock from '../../components/ShortInfoBlock';
import { fetcher } from '../../utils/functions';
import PieChart from '../../components/PieChart';
import Mbox from '../../components/MboxWidget';
import Agent from '../../components/Agent';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const mock = {
  preview: {
    messages: {
      read: 12,
      queue: 9,
      active: 1,
      complited: 7,
    },
    statistic: {
      fb: {
        inQueu: 0,
        inActive: 40,
        inCompleted: 0,
      },
      email: {
        inQueu: 10,
        inActive: 30,
        inCompleted: 30,
      },
      whatsApp: {
        inQueu: 70,
        inActive: 20,
        inCompleted: 20,
      },
    },
    agents: [
      { name: 'Teddy Blood', avatar: '', status: 'active', chats: '3' },
      { name: 'Maeva Milay', avatar: '', status: 'active', chats: '0' },
      { name: 'Hector Escaton', avatar: '', status: 'inactive', chats: '5' },
      { name: 'Hector', avatar: '', status: 'inactive', chats: '5' },
      { name: 'Doleres Abertly', avatar: '', status: 'inactive', chats: '5' },
      { name: 'Doleres Abertly', avatar: '', status: 'inactive', chats: '5' },
      { name: 'Doleres Abertly', avatar: '', status: 'inactive', chats: '5' },
    ],
  },
};

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const login = useSelector((state) => state.login);

  if (!login.isLogin) return <Navigate to="/login" />;

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const responce = await fetcher(mock);
      setData(responce);
      setLoading(false);
    }

    getData();
  }, []);

  console.log('data', data);

  const { preview: { messages, statistic, agents } = {} } = data;

  return (
    <Box
      sx={{
        padding: '2rem',
      }}
    >
      <ShortInfoBlock loading={loading} {...messages} />
      <PieChart loading={loading} {...statistic} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Mbox loading={loading} {...statistic} />
        <Agent loading={loading} agents={agents}></Agent>
      </Box>
    </Box>
  );
}
