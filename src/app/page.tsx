'use client'
import { ActionIcon, Avatar, BackgroundImage, Button, Center, Group, Image, Paper, Stack, Title, Transition } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { IconBrandBlogger, IconCheck, IconChevronLeft, IconCopy, IconMail, IconShare } from '@tabler/icons-react'
import { useState } from 'react';

export default function App() {
  const email = 'proflaianebernardo@gmail.com';
  const myLinkToShare = 'https://proflaianebernardo.vercel.app/';
  const clipboard = useClipboard({ timeout: 1000 });
  const [paperContent, setPaperContent] = useState<'main' | 'share'>('main');

  return (
    <BackgroundImage src='/wallpaper.webp'>
      <Center h='100vh'>
        <Transition mounted={paperContent === 'main'} transition="slide-right" duration={250} timingFunction="ease">
          {(styles) => (
            <Paper w='25rem' maw='90vw' shadow='lg' radius='md' p='lg' style={{
              ...styles,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: `blur(3px)`,
              position: 'absolute'
            }}>
              <Stack align='center' gap='md'>
                <Avatar src='/perfil.webp' size={220}></Avatar>
                <Title order={1} fz={'h2'}>Prof. Laiane Bernardo</Title>
                <Stack w='100%' gap='xs'>
                  <Button component='a' href='https://proflaianebernardo.blogspot.com/?m=1' target='_blank' fullWidth fw='bold' leftSection={<IconBrandBlogger size={20} />}>
                    Visite meu Blogger
                  </Button>
                  <Button component='a' href={`mailto:${email}`} fullWidth fw='bold' leftSection={<IconMail size={20} />}>
                    Enviar email
                  </Button>
                  <Button fullWidth fw='bold' leftSection={<IconShare size={20} />} onClick={() => setPaperContent('share')}>
                    Compartilhar
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          )}
        </Transition>
        <Transition mounted={paperContent === 'share'} transition="slide-left" duration={250} timingFunction="ease">
          {(styles) => (
            <Paper w='25rem' maw='90vw' shadow='lg' radius='md' p='lg' style={{
              ...styles,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: `blur(3px)`,
              position: 'absolute'
            }}>
              <Stack align='center' gap='md'>
                <Image src='/qrcode.webp' />
                <Group w='100%' gap='xs'>
                  <ActionIcon size='36px' onClick={() => setPaperContent('main')}>
                    <IconChevronLeft size={20} />
                  </ActionIcon>
                  <Button flex={1} fw='bold' color={clipboard.copied ? 'green' : ''} leftSection={clipboard.copied ? <IconCheck size={20} /> : <IconCopy size={20} />} onClick={() => clipboard.copy(myLinkToShare)} >
                    {clipboard.copied ? 'Copiado' : 'Copiar link'}
                  </Button>
                </Group>
              </Stack>
            </Paper>
          )}
        </Transition>
      </Center>
    </BackgroundImage>
  );
}
