'use client';

import React from 'react';
import { Title, Text, Stack, SimpleGrid, Paper, Divider } from '@mantine/core';
import {
  // Basic UI Icons
  IconHome2, IconUser, IconSettings, IconSearch, IconBell, IconMail, IconPhone, IconMenu2,
  IconX, IconCheck, IconPlus, IconMinus, IconEdit, IconTrash, IconCopy, IconDownload,
  IconUpload, IconShare, IconHeart, IconStar, IconBookmark, IconFlag, IconTag, IconPin,
  
  // Navigation Icons
  IconArrowLeft, IconArrowRight, IconArrowUp, IconArrowDown, IconChevronLeft, IconChevronRight,
  IconChevronUp, IconChevronDown, IconCaretLeft, IconCaretRight, IconCaretUp, IconCaretDown,
  
  // Media Icons
  IconPhoto, IconVideo, IconMusic, IconHeadphones, IconMicrophone, IconCamera, IconFilm,
  IconVolume, IconVolumeOff, IconPlayerPlay, IconPlayerPause, IconPlayerStop, IconPlayerSkipForward,
  IconPlayerSkipBack, IconShuffle, IconRepeat,
  
  // Communication Icons
  IconMessage, IconMessageCircle, IconSend, IconBrandTwitter, IconBrandFacebook, IconBrandInstagram,
  IconBrandLinkedin, IconBrandGithub, IconBrandGoogle, IconBrandApple, IconBrandWindows,
  
  // File & Document Icons
  IconFile, IconFileText, IconFolder, IconFolderOpen, IconArchive, IconClipboard,
  IconNotes, IconBook, IconBook2, IconNewspaper, IconPrinter, IconScan,
  
  // System & Tools Icons
  IconTool, IconTool as IconWrench, IconHammer, IconScrewdriver, IconPuzzle, IconKey, IconLock,
  IconLockOpen, IconShield, IconShieldCheck, IconEye, IconEyeOff, IconFingerprint,
  
  // Time & Calendar Icons
  IconClock, IconCalendar, IconCalendarEvent, IconClock as IconTimer, IconAlarm, IconWatch,
  IconSun, IconMoon, IconSunset, IconSunrise,
  
  // Weather Icons
  IconCloud, IconCloudRain, IconCloudSnow, IconSun as IconSunWeather, IconMoon as IconMoonWeather,
  IconTemperature, IconDroplet, IconWind,
  
  // Shopping & Commerce Icons
  IconShoppingCart, IconShoppingBag, IconCreditCard, IconCoin, IconReceipt, IconTag as IconPrice,
  IconGift, IconTruck, IconPackage, IconBarcode,
  
  // Location & Map Icons
  IconMapPin, IconMap, IconRoute, IconCompass, IconGps, IconLocation, IconBuilding,
  IconHome, IconOffice, IconCar, IconBus, IconTrain, IconPlane,
  
  // Health & Medical Icons
  IconHeart as IconHealth, IconFirstAid, IconPill, IconStethoscope, IconVaccine,
  IconActivity, IconPulse, IconZodiacCancer,
  
  // Education & Learning Icons
  IconSchool, IconCertificate, IconAward, IconMedal, IconTrophy, IconTarget,
  IconBulb, IconBrain, IconAtom, IconMath,
  
  // Sports & Recreation Icons
  IconBall, IconRun, IconSwimming, IconBike, IconTent, IconMountain, IconBeach,
  IconGamepad, IconDice, IconChess, IconCards,
  
  // Technology Icons
  IconDeviceDesktop, IconDeviceLaptop, IconDeviceTablet, IconDeviceMobile, IconRouter,
  IconWifi, IconBluetooth, IconUsb, IconBattery, IconPlug, IconCpu, IconDatabase,
  
  // Social & Emoji Icons
  IconMoodHappy, IconMoodSad, IconMoodNeutral, IconMoodSmile, IconMoodWink,
  IconThumbUp, IconThumbDown, IconUsers, IconUserPlus, IconUserMinus,
  
  // Status Icons
  IconAlertTriangle, IconInfoCircle, IconCircleCheck, IconExclamationMark,
  IconAlertCircle, IconX as IconError
} from '@tabler/icons-react';

interface IconItem {
  name: string;
  component: React.ComponentType<any>;
  category: string;
}

export default function IconsPage() {
  const iconList: IconItem[] = [
    // Basic UI Icons
    { name: 'IconHome2', component: IconHome2, category: 'Basic UI' },
    { name: 'IconUser', component: IconUser, category: 'Basic UI' },
    { name: 'IconSettings', component: IconSettings, category: 'Basic UI' },
    { name: 'IconSearch', component: IconSearch, category: 'Basic UI' },
    { name: 'IconBell', component: IconBell, category: 'Basic UI' },
    { name: 'IconMail', component: IconMail, category: 'Basic UI' },
    { name: 'IconPhone', component: IconPhone, category: 'Basic UI' },
    { name: 'IconMenu2', component: IconMenu2, category: 'Basic UI' },
    { name: 'IconX', component: IconX, category: 'Basic UI' },
    { name: 'IconCheck', component: IconCheck, category: 'Basic UI' },
    { name: 'IconPlus', component: IconPlus, category: 'Basic UI' },
    { name: 'IconMinus', component: IconMinus, category: 'Basic UI' },
    { name: 'IconEdit', component: IconEdit, category: 'Basic UI' },
    { name: 'IconTrash', component: IconTrash, category: 'Basic UI' },
    { name: 'IconCopy', component: IconCopy, category: 'Basic UI' },
    { name: 'IconDownload', component: IconDownload, category: 'Basic UI' },
    { name: 'IconUpload', component: IconUpload, category: 'Basic UI' },
    { name: 'IconShare', component: IconShare, category: 'Basic UI' },
    { name: 'IconHeart', component: IconHeart, category: 'Basic UI' },
    { name: 'IconStar', component: IconStar, category: 'Basic UI' },
    { name: 'IconBookmark', component: IconBookmark, category: 'Basic UI' },
    { name: 'IconFlag', component: IconFlag, category: 'Basic UI' },
    { name: 'IconTag', component: IconTag, category: 'Basic UI' },
    { name: 'IconPin', component: IconPin, category: 'Basic UI' },
    
    // Navigation Icons
    { name: 'IconArrowLeft', component: IconArrowLeft, category: 'Navigation' },
    { name: 'IconArrowRight', component: IconArrowRight, category: 'Navigation' },
    { name: 'IconArrowUp', component: IconArrowUp, category: 'Navigation' },
    { name: 'IconArrowDown', component: IconArrowDown, category: 'Navigation' },
    { name: 'IconChevronLeft', component: IconChevronLeft, category: 'Navigation' },
    { name: 'IconChevronRight', component: IconChevronRight, category: 'Navigation' },
    { name: 'IconChevronUp', component: IconChevronUp, category: 'Navigation' },
    { name: 'IconChevronDown', component: IconChevronDown, category: 'Navigation' },
    
    // Media Icons
    { name: 'IconPhoto', component: IconPhoto, category: 'Media' },
    { name: 'IconVideo', component: IconVideo, category: 'Media' },
    { name: 'IconMusic', component: IconMusic, category: 'Media' },
    { name: 'IconHeadphones', component: IconHeadphones, category: 'Media' },
    { name: 'IconMicrophone', component: IconMicrophone, category: 'Media' },
    { name: 'IconCamera', component: IconCamera, category: 'Media' },
    { name: 'IconPlayerPlay', component: IconPlayerPlay, category: 'Media' },
    { name: 'IconPlayerPause', component: IconPlayerPause, category: 'Media' },
    { name: 'IconPlayerStop', component: IconPlayerStop, category: 'Media' },
    { name: 'IconVolume', component: IconVolume, category: 'Media' },
    
    // Communication Icons
    { name: 'IconMessage', component: IconMessage, category: 'Communication' },
    { name: 'IconMessageCircle', component: IconMessageCircle, category: 'Communication' },
    { name: 'IconSend', component: IconSend, category: 'Communication' },
    { name: 'IconBrandTwitter', component: IconBrandTwitter, category: 'Communication' },
    { name: 'IconBrandFacebook', component: IconBrandFacebook, category: 'Communication' },
    { name: 'IconBrandInstagram', component: IconBrandInstagram, category: 'Communication' },
    { name: 'IconBrandLinkedin', component: IconBrandLinkedin, category: 'Communication' },
    { name: 'IconBrandGithub', component: IconBrandGithub, category: 'Communication' },
    
    // File & Document Icons  
    { name: 'IconFile', component: IconFile, category: 'Files' },
    { name: 'IconFileText', component: IconFileText, category: 'Files' },
    { name: 'IconFolder', component: IconFolder, category: 'Files' },
    { name: 'IconFolderOpen', component: IconFolderOpen, category: 'Files' },
    { name: 'IconArchive', component: IconArchive, category: 'Files' },
    { name: 'IconClipboard', component: IconClipboard, category: 'Files' },
    { name: 'IconBook', component: IconBook, category: 'Files' },
    { name: 'IconPrinter', component: IconPrinter, category: 'Files' },
    
    // System & Tools Icons
    { name: 'IconTool', component: IconTool, category: 'Tools' },
    { name: 'IconWrench', component: IconWrench, category: 'Tools' },
    { name: 'IconHammer', component: IconHammer, category: 'Tools' },
    { name: 'IconKey', component: IconKey, category: 'Tools' },
    { name: 'IconLock', component: IconLock, category: 'Tools' },
    { name: 'IconShield', component: IconShield, category: 'Tools' },
    { name: 'IconEye', component: IconEye, category: 'Tools' },
    { name: 'IconEyeOff', component: IconEyeOff, category: 'Tools' },
    
    // Time & Calendar Icons
    { name: 'IconClock', component: IconClock, category: 'Time' },
    { name: 'IconCalendar', component: IconCalendar, category: 'Time' },
    { name: 'IconTimer', component: IconTimer, category: 'Time' },
    { name: 'IconAlarm', component: IconAlarm, category: 'Time' },
    { name: 'IconSun', component: IconSun, category: 'Time' },
    { name: 'IconMoon', component: IconMoon, category: 'Time' },
    
    // Shopping & Commerce Icons
    { name: 'IconShoppingCart', component: IconShoppingCart, category: 'Commerce' },
    { name: 'IconShoppingBag', component: IconShoppingBag, category: 'Commerce' },
    { name: 'IconCreditCard', component: IconCreditCard, category: 'Commerce' },
    { name: 'IconCoin', component: IconCoin, category: 'Commerce' },
    { name: 'IconGift', component: IconGift, category: 'Commerce' },
    { name: 'IconTruck', component: IconTruck, category: 'Commerce' },
    
    // Location & Map Icons
    { name: 'IconMapPin', component: IconMapPin, category: 'Location' },
    { name: 'IconMap', component: IconMap, category: 'Location' },
    { name: 'IconCompass', component: IconCompass, category: 'Location' },
    { name: 'IconBuilding', component: IconBuilding, category: 'Location' },
    { name: 'IconCar', component: IconCar, category: 'Location' },
    { name: 'IconPlane', component: IconPlane, category: 'Location' },
    
    // Technology Icons
    { name: 'IconDeviceDesktop', component: IconDeviceDesktop, category: 'Technology' },
    { name: 'IconDeviceLaptop', component: IconDeviceLaptop, category: 'Technology' },
    { name: 'IconDeviceMobile', component: IconDeviceMobile, category: 'Technology' },
    { name: 'IconWifi', component: IconWifi, category: 'Technology' },
    { name: 'IconBluetooth', component: IconBluetooth, category: 'Technology' },
    { name: 'IconBattery', component: IconBattery, category: 'Technology' },
    
    // Social & Emoji Icons
    { name: 'IconMoodHappy', component: IconMoodHappy, category: 'Social' },
    { name: 'IconMoodSad', component: IconMoodSad, category: 'Social' },
    { name: 'IconThumbUp', component: IconThumbUp, category: 'Social' },
    { name: 'IconUsers', component: IconUsers, category: 'Social' },
    
    // Status Icons
    { name: 'IconAlertTriangle', component: IconAlertTriangle, category: 'Status' },
    { name: 'IconInfoCircle', component: IconInfoCircle, category: 'Status' },
    { name: 'IconCircleCheck', component: IconCircleCheck, category: 'Status' },
    { name: 'IconExclamationMark', component: IconExclamationMark, category: 'Status' },
    { name: 'IconAlertCircle', component: IconAlertCircle, category: 'Status' },
    { name: 'IconError', component: IconError, category: 'Status' }
  ];

  const categories = Array.from(new Set(iconList.map(icon => icon.category)));

  return (
    <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Icons</Title>
          <Text c="dimmed" size="lg">
            Collection of Tabler Icons available in the design system. Click on any icon to copy its import statement.
          </Text>
        </div>

        {categories.map((category, index) => {
          const categoryIcons = iconList.filter(icon => icon.category === category);
          
          return (
            <React.Fragment key={category}>
              {index > 0 && <Divider />}
              <div>
                <Title order={2} mb="lg" size="h3">{category}</Title>
                <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }} spacing="xl" verticalSpacing="xl">
                  {categoryIcons.map((icon) => {
                    const IconComponent = icon.component;
                    
                    return (
                      <div
                        key={icon.name}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: '12px',
                          minHeight: '80px'
                        }}
                      >
                        <IconComponent 
                          size={32} 
                          stroke={1.5} 
                          style={{ color: '#333' }}
                        />
                        <Text 
                          size="xs" 
                          c="dark"
                          style={{ 
                            textAlign: 'center',
                            fontSize: '11px',
                            fontFamily: 'monospace',
                            backgroundColor: 'var(--mantine-color-gray-1)',
                            padding: '4px 8px',
                            borderRadius: '4px'
                          }}
                        >
                          {icon.name}
                        </Text>
                      </div>
                    );
                  })}
                </SimpleGrid>
              </div>
            </React.Fragment>
          );
        })}

    </Stack>
  );
}