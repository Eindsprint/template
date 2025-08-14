'use client';

import {
  Anchor,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { ButtonWrapper } from '@/components';
import { useRouter } from 'next/navigation';
import classes from './AuthenticationTitle.module.css';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/home/dashboard');
  };
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--secondary-light-sand)'
    }}>

        <Paper withBorder p="md" radius="md" style={{ width: '320px' }}>
          <TextInput label="E-mailadres" required radius="md" />
          <PasswordInput label="Wachtwoord" required mt="md" radius="md" />
          <ButtonWrapper variant="primary" fullWidth mt="xl" onClick={handleLogin}>
            Inloggen
          </ButtonWrapper>
        </Paper>
    </div>
  );
}